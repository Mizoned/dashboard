<template>
	<div class="product-create">
		<div class="v-row product-create__row">
			<div class="v-column product-create__column">
				<v-box id="product-create" class="product-create__card">
					<template #head>
						<v-widget-title title="Name & description" color="green" />
						<v-button
							label="Back"
							before-svg-component-name="VIconArrow"
							color="secondary"
							size="sm"
							@click="$router.go(-1)"
						></v-button>
					</template>
					<template #body>
						<div class="product-create__fieldset">
							<v-label-box
								label="Product title"
								tooltip-message="Maximum 100 characters. No HTML or emoji allowed"
							>
								<v-input
									v-model="form.name"
									:is-error="v$.form.name.$invalid && v$.form.name.$error"
									:error-message="v$.form.name?.$errors[0]?.$message"
									type="text"
									name="name"
									autocomplete="product"
									@blur="v$.form.name.$touch()"
								/>
							</v-label-box>
							<v-label-box
								label="Description"
								tooltip-message="Maximum 100 characters. No HTML or emoji allowed"
							>
								<v-textarea
									v-model="form.description"
									:is-error="v$.form.description.$invalid && v$.form.description.$error"
									:error-message="v$.form.description?.$errors[0]?.$message"
									@blur="v$.form.description.$touch()"
								/>
							</v-label-box>
							<!--              <v-label-box label="Key features" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">-->
							<!--                <div class="product-create__key-features">-->
							<!--                  <v-input class="product-create__key-features-input" placeholder="Value"/>-->
							<!--                  <v-input class="product-create__key-features-input" placeholder="Value"/>-->
							<!--                  <v-input class="product-create__key-features-input" placeholder="Value"/>-->
							<!--                  <v-input class="product-create__key-features-input" placeholder="Value"/>-->
							<!--                </div>-->
							<!--              </v-label-box>-->
						</div>
					</template>
				</v-box>
				<v-box class="product-create__card">
					<template #head>
						<v-widget-title title="Images & CTA" color="blue" />
					</template>
					<template #body>
						<v-label-box
							label="Cover images"
							tooltip-message="Maximum 100 characters. No HTML or emoji allowed"
						>
							<v-upload-input
								label-button="Click or drop image"
								:is-error="v$.form.pictures.$invalid && v$.form.pictures.$error"
								:error-message="v$.form.pictures?.$errors[0]?.$message"
								@change="uploadFilesHandler($event, 'pictures')"
							/>
						</v-label-box>
					</template>
				</v-box>
				<v-box class="product-create__card">
					<template #head>
						<v-widget-title title="Price" color="orange" />
					</template>
					<template #body>
						<div class="product-create__fieldset">
							<v-label-box
								label="Amount"
								tooltip-message="Maximum 100 characters. No HTML or emoji allowed"
							>
								<v-input-icon
									v-model="form.price"
									:is-error="v$.form.price.$invalid && v$.form.price.$error"
									:error-message="v$.form.price?.$errors[0]?.$message"
									svg-name-component="VIconDollar"
									type="number"
									@blur="v$.form.price.$touch()"
								></v-input-icon>
							</v-label-box>
							<!--              <div>-->
							<!--                <v-toggle label="Allow customers to pay they want" :useDivider="true" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">-->
							<!--                  <v-switch :checked="true"/>-->
							<!--                </v-toggle>-->
							<!--                <div>-->
							<!--                  <v-input-icon label-text="Minimum amount" svg-name-component="VIconDollar"></v-input-icon>-->
							<!--                  <v-input-icon label-text="Suggested amount" svg-name-component="VIconDollar"></v-input-icon>-->
							<!--                </div>-->
							<!--              </div>-->
						</div>
					</template>
				</v-box>
				<!--				<v-box class="product-create__card">-->
				<!--					<template #head><v-widget-title title="Category & attributes" color="purple" /></template>-->
				<!--					<template #body>-->
				<!--						<v-label-box-->
				<!--							label="Compatability"-->
				<!--							tooltip-message="Maximum 100 characters. No HTML or emoji allowed"-->
				<!--						>-->
				<!--							<div class="product-create__compatability">-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Sketch" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Figma" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Adobe XD" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Photoshop" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Cinema 4D" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Wordpress" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="HTML" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Keynote" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Maya" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Blender" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Procreate" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Illustrator" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="Framer" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="In Design" />-->
				<!--								<v-checkbox class="product-create__compatability-checkbox" label="After Effect" />-->
				<!--							</div>-->
				<!--						</v-label-box>-->
				<!--					</template>-->
				<!--				</v-box>-->
				<v-box class="product-create__card">
					<template #head>
						<v-widget-title title="Product files" color="yellow" />
					</template>
					<template #body>
						<div class="product-create__fieldset">
							<v-label-box
								label="Content"
								tooltip-message="Maximum 100 characters. No HTML or emoji allowed"
							>
								<v-upload-input
									label-button="Click or drop files"
									:is-error="v$.form.content.$invalid && v$.form.content.$error"
									:error-message="v$.form.content?.$errors[0]?.$message"
									@change="uploadFilesHandler($event, 'content')"
								></v-upload-input>
							</v-label-box>
							<!--							<v-label-box-->
							<!--								label="Fonts"-->
							<!--								tooltip-message="Maximum 100 characters. No HTML or emoji allowed"-->
							<!--							>-->
							<!--								<v-upload-input label-button="Click or drop files"></v-upload-input>-->
							<!--							</v-label-box>-->
						</div>
					</template>
				</v-box>
				<!--        <v-box class="product-create__card">-->
				<!--          <template #head><v-widget-title title="Discussion" color="blue"/></template>-->
				<!--          <template #body>-->
				<!--            <v-label-box label="Message to reviewer" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">-->
				<!--              <v-textarea/>-->
				<!--            </v-label-box>-->
				<!--          </template>-->
				<!--        </v-box>-->
			</div>
			<div class="v-column product-create__column">
				<v-box class="product-create__card product-create__preview">
					<template #head>
						<v-widget-title title="Preview" color="blue" />
						<v-button
							before-svg-component-name="VIconExpand"
							color="transparent"
							size="square"
						></v-button>
					</template>
					<template #body>
						<div class="product-create__widget">
							<div class="product-create__widget-img">
								<img src="@/assets/images/no-photo.png" alt="" />
							</div>
							<div class="product-create__widget-body">
								<div class="product-create__widget-content">
									<div class="product-create__widget-name">{{ form.name }}</div>
									<div class="product-create__widget-by">
										<v-avatar class="product-create__widget-by-avatar" :src="imagePath" size="sm" />
										<div class="product-create__widget-by-name">
											by <span>{{ displayName }}</span>
										</div>
									</div>
								</div>
								<div class="product-create__widget-price">${{ form.price }}</div>
							</div>
						</div>
					</template>
				</v-box>
			</div>
		</div>
	</div>
	<the-bottom-product-bar>
<!--		<template #leftHand>-->
<!--			<div class="product-create__panel-info">-->
<!--				<v-icon-check-all />-->
<!--				Last saved-->
<!--				<span>Oct 4, 2021 - 23:32</span>-->
<!--			</div>-->
<!--		</template>-->
		<template #rightHand>
			<div class="product-create__panel-buttons">
				<v-button
					class="product-create__panel-button"
					label="Save Draft"
					color="secondary"
					@click="submitDraftHandler"
				/>
				<v-button
					v-scroll-to="{ parentSelector: '.main__view', targetSelector: '#product-create' }"
					class="product-create__panel-button"
					label="Publish now"
					@click="submitPublishNowHandler"
				/>
			</div>
		</template>
	</the-bottom-product-bar>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import {
	required,
	helpers,
	minLength,
	maxLength,
	numeric,
	minValue,
	maxValue
} from '@vuelidate/validators';
import UserProductsService from '@/service/UserProductsService';
import TheBottomProductBar from '@/components/VBottomProductBar.vue';
import toastificationMixin from '@/mixins/toastification.mixin';
import { mapGetters, mapState } from 'vuex';

export default {
	name: 'VProductCreateView',
	components: { TheBottomProductBar },
	mixins: [toastificationMixin],
	data() {
		return {
			v$: useVuelidate(),
			selectedFiles: [],
			form: {
				name: '',
				description: '',
				price: '',
				pictures: [],
				content: []
			},
			vuelidateExternalResults: {
				form: {
					name: '',
					description: '',
					price: null,
					pictures: null,
					content: null
				}
			}
		};
	},
	validations() {
		return {
			form: {
				name: {
					required: helpers.withMessage('Поле обязательно для заполнения', required),
					minLength: helpers.withMessage('Поле должно быть больше 5 символов', minLength(6)),
					maxLength: helpers.withMessage('Поле должно быть меньше 48 символов', maxLength(48))
				},
				description: {
					required: helpers.withMessage('Поле обязательно для заполнения', required),
					maxLength: helpers.withMessage('Поле должно быть меньше 250 символов', maxLength(250))
				},
				price: {
					required: helpers.withMessage('Поле обязательно для заполнения', required),
					numeric: helpers.withMessage('Поле должно быть числовым', numeric),
					minValue: helpers.withMessage('Поле должно быть больше 10$', minValue(10)),
					maxValue: helpers.withMessage('Поле должно быть меньше 99999$', maxValue(99999))
				},
				pictures: {
					required: helpers.withMessage('Поле обязательно для заполнения', required),
					maxLength: helpers.withMessage('Количество картинок не должно превышать 3', maxLength(3))
				},
				content: {
					required: helpers.withMessage('Поле обязательно для заполнения', required),
					maxLength: helpers.withMessage('Количество файлов не должно превышать 3', maxLength(3))
				}
			}
		};
	},
	computed: {
		...mapState({
			imagePath: (s) => s.userModule.user.imagePath,
			displayName: (s) => s.userModule.user.displayName
		}),
		...mapGetters({
			user: 'userModule/user'
		})
	},
	methods: {
		submitPublishNowHandler() {
			if (this.v$.form.$invalid) {
				this.v$.form.$touch();
				this.showErrorNotification('Не все поля заполнены верно!');
				return;
			}

			//TODO Сделать запрос на создание
		},
		submitDraftHandler() {
			if (this.v$.form.$invalid) {
				this.v$.form.$touch();
				this.showErrorNotification('Не все поля заполнены верно!');
				return;
			}

			const data = this.prepareFormData();
			UserProductsService.createDraftProduct(this.user.id, data)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					const errors = error?.response?.data?.errors;

					if (errors) {
						this.showErrorNotification('Не все поля заполнены верно!');
						errors.forEach((error) => {
							this.vuelidateExternalResults[error.param] = error.msg;
						});
					}
				});
		},
		uploadFilesHandler(images, param) {
			this.v$.form[param].$touch();
			this.form[param] = images;
		},
		prepareFormData() {
			const data = new FormData();

			for (const [key, value] of Object.entries(this.form)) {
				if (Array.isArray(value)) {
					value.forEach((file) => {
						data.append(key, file);
					});
				} else {
					data.append(key, value);
				}
			}

			return data;
		}
	}
};
</script>

<style scoped lang="scss">
.product-create {
	&__card {
		padding: 24px;
		border-radius: 8px;
		background-color: var(--neutral-light-black-background-color);
		transition: background-color 0.3s;

		@media screen and (max-width: 1250px) {
			padding: 12px;
		}
	}

	&__row {
		display: flex;
		gap: 8px;
	}

	&__column {
		display: flex;
		flex-direction: column;
		gap: 8px;

		&:first-child {
			flex: 0 0 calc(100% - 340px);
			width: calc(100% - 340px);
		}

		&:last-child {
			flex-shrink: 0;
			width: 340px;
		}

		@media screen and (max-width: 1250px) {
			&:first-child {
				flex: 0 0 calc(100% - 296px);
				width: calc(100% - 296px);
			}

			&:last-child {
				flex-shrink: 0;
				width: 296px;
			}
		}

		@media screen and (max-width: 1024px) {
			&:first-child {
				width: 100%;
				flex: initial;
			}

			&:last-child {
				display: none;
			}
		}
	}

	&__fieldset {
		display: flex;
		flex-direction: column;
		gap: 32px;

		@media screen and (max-width: 768px) {
			gap: 24px;
		}
	}

	&__fieldset-box {
		display: grid;
		gap: 16px;
		grid-template-columns: 1fr 1fr;

		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr;
			gap: 24px;
		}
	}

	&__key-features {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;

		&-input {
			flex: 0 0 calc(50% - 12px);
			width: calc(50% - 12px);

			@media screen and (max-width: 768px) {
				flex: 0 0 100%;
				width: calc(50% - 12px);
			}
		}
	}

	&__compatability {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;

		&-checkbox {
			flex: 0 0 calc(33.33% - 16px);
			width: calc(33.333% - 16px);

			@media screen and (max-width: 768px) {
				flex: 0 0 calc(50% - 16px);
				width: calc(50% - 16px);
			}
		}
	}

	&__preview {
		position: sticky;
		top: -16px;
	}

	&__widget {
		display: flex;
		flex-direction: column;
		gap: 16px;

		&-img {
			height: 200px;
			width: 100%;
			border-radius: 12px;
			overflow: hidden;
			background-color: var(--secondary-purple-color);

			img {
				display: block;
				height: auto;
				width: 100%;
				object-fit: cover;
			}
		}

		&-body {
			display: flex;
			gap: 8px;
		}

		&-content {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}

		&-name {
			font-style: normal;
			font-weight: 600;
			font-size: 20px;
			line-height: 32px;
			letter-spacing: -0.02em;
			color: var(--neutral-champagne-color);
			min-height: 32px;
			word-wrap: break-word;
			max-width: 230px;
		}

		&-by {
			display: flex;
			align-items: center;
			gap: 12px;

			&-name {
				font-style: normal;
				font-weight: 500;
				font-size: 15px;
				line-height: 24px;
				letter-spacing: -0.015em;
				color: var(--primary-dark-white-color);

				span {
					font-weight: 600;
					letter-spacing: -0.01em;
					color: var(--neutral-champagne-background-color);
				}
			}
		}

		&-price {
			align-self: flex-start;
			font-style: normal;
			font-weight: 700;
			font-size: 15px;
			line-height: 24px;
			text-align: center;
			letter-spacing: -0.01em;
			min-width: 46px;
			min-height: 32px;
			color: var(--neutral-light-black-background-color);
			margin-left: auto;
			padding: 4px 8px;
			background-color: var(--secondary-green-color);
			border-radius: 6px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			max-width: 100px;
		}
	}

	&__panel {
		&-info {
			display: flex;
			align-items: center;
			gap: 12px;
			font-style: normal;
			font-weight: 600;
			font-size: 13px;
			line-height: 16px;
			letter-spacing: -0.01em;
			color: var(--primary-dark-white-color);

			span {
				color: var(--neutral-champagne-color);
				transition: color 0.3s;
			}
		}

		&-buttons {
			display: flex;
			gap: 8px;
		}

		@media screen and (max-width: 768px) {
			&-buttons {
				width: 100%;
			}

			&-button {
				flex-grow: 1;
			}
		}
	}
}
</style>
