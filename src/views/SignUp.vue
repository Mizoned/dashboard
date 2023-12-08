<template>
	<div class="authorization">
		<div class="authorization__plan">
			<div class="authorization__header">
				<v-logotype class="authorization__logotype"></v-logotype>
			</div>
			<div class="authorization__container">
				<v-plan-includes></v-plan-includes>
			</div>
		</div>
		<div class="authorization__main">
			<div class="authorization__header">
				<div class="authorization__header-logotype">
					<v-logotype class="authorization__logotype"></v-logotype>
				</div>
				<div class="authorization__main-sign-in">
					Already a member? <a class="v-link" href="/sign-in">Sign in</a>
				</div>
			</div>
			<div class="authorization__container">
				<div class="sign-up">
					<h1 class="sign-up__title">Sign up</h1>
					<div v-if="step === 1" class="sign-up__container">
						<div class="sign-up__socials">
							<div class="sign-up__socials-text">Sign up with Open account</div>
							<v-social-list class="sign-up__list" />
							<div class="sign-up__hr"></div>
						</div>
						<div class="sign-up__form form-component">
							<v-label-box label="Or continue with email address">
								<v-input-icon
									v-model="email"
									type="text"
									placeholder="Your email"
									autocomplete="off"
									:is-error="v$.email.$invalid && v$.email.$error"
									:error-message="v$.email?.$errors[0]?.$message"
									svg-name-component="VIconMail"
									@clear="resetVuelidateProperty('email')"
									@update:model-value="updateProperty($event, 'email')"
									@blur="v$.email.$touch()"
								/>
							</v-label-box>
							<v-button
								:disabled="(v$.email.$invalid && v$.email.$error) || isLoading"
								label="Continue"
								color="primary"
								:is-loading="isLoading"
								@click="registrationCodeSendHandler"
							/>
							<v-captcha class="sign-up__captcha" />
						</div>
					</div>
					<div v-else-if="step === 2" class="sign-up__container">
						<div class="sign-up__socials">
							<div class="sign-up__socials-text">
								We just send you a verify code. Check your inbox to get them.
							</div>
						</div>
						<div class="sign-up__form form-component">
							<v-code
								v-model="code"
								:is-error="v$.code.$invalid && v$.code.$error"
								:error-message="v$.code?.$errors[0]?.$message"
								@update:model-value="updateProperty($event, 'code')"
								@blur="v$.code.$touch()"
							/>
							<v-button
								:disabled="(v$.code.$invalid && v$.code.$error) || isLoading"
								label="Continue"
								color="primary"
								:is-loading="isLoading"
								@click="registrationCodeVerifyHandler"
							/>
							<v-captcha class="sign-up__captcha" />
						</div>
					</div>
					<div v-else-if="step === 3" class="sign-up__container">
						<div class="sign-up__socials">
							<div class="sign-up__socials-text">Sign up with Open account</div>
							<v-social-list class="sign-up__list" />
						</div>
						<div class="sign-up__form form-component">
							<v-label-box label="Enter the password for your future account">
								<v-input-icon
									v-model="password"
									type="password"
									autocomplete="off"
									placeholder="Password"
									:is-error="v$.password.$invalid && v$.password.$error"
									:error-message="v$.password?.$errors[0]?.$message"
									svg-name-component="VIconLock"
									@clear="resetVuelidateProperty('password')"
									@update:model-value="updateProperty($event, 'password')"
									@blur="v$.password.$touch()"
								/>
							</v-label-box>
							<v-button
								:disabled="(v$.code.$invalid && v$.code.$error) || isLoading"
								label="Continue"
								color="primary"
								:is-loading="isLoading"
								@click="signUpHandler"
							/>
							<v-captcha class="sign-up__captcha" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VButton from '@/components/UI/VButton.vue';
import VCaptcha from '@/components/VCaptcha.vue';
import VLogotype from '@/components/VLogotype.vue';
import VPlanIncludes from '@/components/UI/Auth/VPlanIncludes.vue';
import VCode from '@/components/UI/Auth/VCode.vue';
import VLabelBox from '@/components/UI/VLabelBox.vue';
import VSocialList from '@/components/UI/Auth/VSocialList.vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers, minLength, maxLength } from '@vuelidate/validators';
import { mapActions } from 'vuex';

export default {
	name: 'SignUp',
	components: { VSocialList, VLabelBox, VCode, VButton, VCaptcha, VLogotype, VPlanIncludes },
	data() {
		return {
			v$: useVuelidate(),
			email: '',
			step: 1,
			code: '',
			password: '',
			isLoading: false,
			vuelidateExternalResults: {
				email: '',
				code: '',
				password: ''
			}
		};
	},
	validations() {
		return {
			email: {
				required: helpers.withMessage('Required field', required),
				email: helpers.withMessage('Email address entered incorrectly', email)
			},
			code: {
				required: helpers.withMessage('Required field', required),
				minLength: helpers.withMessage('Code must be 4 characters long', minLength(4)),
				maxLength: helpers.withMessage('Code must be 4 characters long', maxLength(4))
			},
			password: {
				required: helpers.withMessage('Required field', required),
				minLength: helpers.withMessage('Password must be more than 8 characters', minLength(9)),
				maxLength: helpers.withMessage('Password must be less than 32 characters', maxLength(32))
			}
		};
	},
	methods: {
		...mapActions({
			sendRegistrationCode: 'authModule/sendRegistrationCode',
			verifyRegistrationCode: 'authModule/verifyRegistrationCode',
			signUp: 'authModule/signUp'
		}),
		async registrationCodeSendHandler() {
			if (this.v$.email.$invalid) {
				this.v$.email.$touch();
				return;
			}

			this.isLoading = true;

			this.sendRegistrationCode({ email: this.email })
				.then(() => {
					this.step++;
				})
				.catch((error) => {
					const errors = error.response.data.errors;
					errors.forEach((error) => {
						this.vuelidateExternalResults[error.param] = error.msg;
					});
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
		async registrationCodeVerifyHandler() {
			if (this.v$.code.$invalid) {
				this.v$.code.$touch();
				return;
			}

			this.isLoading = true;

			this.verifyRegistrationCode({ email: this.email, code: this.code })
				.then(() => {
					this.step++;
				})
				.catch((error) => {
					this.v$.code.$touch();
					const errors = error.response.data.errors;
					errors.forEach((error) => {
						this.vuelidateExternalResults.code = error.msg;
					});
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
		async signUpHandler() {
			if (this.v$.password.$invalid) {
				this.v$.password.$touch();
				return;
			}

			this.isLoading = true;

			this.signUp({ email: this.email, password: this.password })
				.then(() => {
					this.$router.push({ name: 'Home' });
				})
				.catch((error) => {
					const errors = error.response.data.errors;
					errors.forEach((error) => {
						this.vuelidateExternalResults.password = error.msg;
					});
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
		updateProperty(value, propertyName) {
			this.v$.$clearExternalResults();
			if (!value) {
				this.resetVuelidateProperty(propertyName);
			}
		},
		resetVuelidateProperty(propertyName) {
			this[propertyName] = '';
			this.v$[propertyName].$reset();
		}
	}
};
</script>

<style scoped lang="scss">
.authorization {
	display: grid;
	grid-template-columns: 400px 1fr;
	height: 100%;
	width: 100%;
	overflow: auto;

	&__plan {
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;

		@media screen and (max-width: 768px) {
			display: none;
		}
	}

	&__main {
		display: grid;
		grid-template-rows: auto 1fr;
		background-color: var(--neutral-light-black-background-color);
		transition: background-color 0.3s;
		height: 100%;
	}

	&__container {
		padding: 24px;
		align-self: center;
		justify-self: center;
	}

	&__header {
		display: flex;
		justify-content: space-between;
		padding: 24px;

		&-logotype {
			display: none;

			@media screen and (max-width: 768px) {
				display: block;
			}
		}
	}

	&__main-sign-in {
		margin-left: auto;
		font-style: normal;
		font-weight: 600;
		font-size: 13px;
		line-height: 16px;
		letter-spacing: -0.01em;
		color: var(--primary-ivory-color);
		padding: 16px;
		text-align: right;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
}

.sign-up {
	display: flex;
	flex-direction: column;
	gap: 32px;
	max-width: 296px;

	&__title {
		font-style: normal;
		font-weight: 600;
		font-size: 48px;
		line-height: 48px;
		letter-spacing: -0.03em;
		color: var(--neutral-champagne-color);
		margin: 0;
	}

	&__container {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	&__socials {
		display: flex;
		flex-direction: column;
		gap: 20px;

		&-text {
			font-style: normal;
			font-weight: 600;
			font-size: 14px;
			line-height: 24px;
			letter-spacing: -0.01em;
			color: var(--neutral-champagne-color);
		}
	}

	&__hr {
		height: 2px;
		background-color: var(--neutral-dark-gray-background-color);
		border-radius: 2px;
		margin-top: 12px;
	}

	&__form {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	&__captcha {
		margin-top: 20px;
	}
}

.v-link {
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: -0.01em;
	color: var(--neutral-champagne-color);
	text-decoration: none;
}
</style>
