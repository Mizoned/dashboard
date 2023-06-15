<template>
	<div :class="['v-upload-input', { 'v-upload-input--error': isError }]">
		<div class="v-upload-input__content">
			<input ref="files" type="file" v-bind="$attrs" multiple @change="uploadFilesHandler" />
			<div v-if="!selectedFiles.length" class="v-upload-input__empty">
				<v-button
					label="Click or drop files"
					before-svg-component-name="VIconUpload"
					color="secondary"
					@click="$refs.files.click()"
				/>
			</div>
			<div v-else class="v-upload-input__list">
				<v-button
					v-for="(file, key) in selectedFiles"
					:key="key"
					:label="file.name"
					class="v-upload-input__item"
					after-svg-component-name="VIconClose"
					color="secondary"
					@click="deleteFileHandler(key)"
				/>
			</div>
		</div>
		<div v-if="isError" class="v-upload-input__error">{{ errorMessage }}</div>
	</div>
</template>

<script>
export default {
	name: 'VUploadInput',
	props: {
		labelButton: {
			type: String,
			default: 'String'
		},
		isError: {
			type: Boolean,
			default: false
		},
		errorMessage: {
			type: String,
			default: ''
		}
	},
	emits: ['change'],
	data() {
		return {
			selectedFiles: []
		};
	},
	watch: {
		selectedFiles(newArray) {
			this.$emit('change', newArray);
		}
	},
	methods: {
		uploadFilesHandler(event) {
			this.selectedFiles = Array.from(event.target.files);
		},
		deleteFileHandler(key) {
			this.selectedFiles = [...this.selectedFiles].filter((item, index) => index !== key);
		}
	}
};
</script>

<style scoped lang="scss">
.v-upload-input {
	&__content {
		position: relative;
		display: flex;
		padding: 10px;
		border: 2px solid transparent;
		width: 100%;
		background-color: var(--neutral-dark-gray-background-color);
		transition: background-color 0.3s, border-color 0.3s;
		border-radius: 12px;
		min-height: 200px;
	}

	&__error {
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 12px;
		padding: 12px 12px 0 12px;
		letter-spacing: -0.01em;
		color: var(--primary-orange-color);
	}

	&__empty {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	&__list {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: 10px;
		height: 100%;
	}

	&__item {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 150px;
	}

	input[type='file'] {
		position: absolute;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		opacity: 0;
	}

	&--error {
		.v-upload-input__content {
			background-color: var(--primary-orange-15-color);
			border: 2px solid var(--primary-orange-color);
			color: var(--primary-orange-color);
		}
	}
}
</style>
