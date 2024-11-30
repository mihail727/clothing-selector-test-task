<script setup lang="ts"></script>

<template>
	<section :class="$style.clothingSelected">
		<slot name="main" />

		<footer v-if="'footer' in $slots" :class="$style.footer">
			<slot name="footer" />
		</footer>
	</section>
</template>

<style lang="scss" module>
.clothingSelected {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;
	border: 1px solid rgba(white, 0.4);
	padding: 10px;
	border-radius: 5px;
	width: 315px;
	height: 196px;
}

.footer {
	place-self: center;
}
</style>
