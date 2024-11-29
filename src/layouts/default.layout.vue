<script setup lang="ts"></script>

<template>
	<div :class="$style.defaultLayout">
		<slot />
	</div>
</template>

<style lang="scss" module>
.defaultLayout {
	height: 100%;
	width: 100%;
}
</style>
