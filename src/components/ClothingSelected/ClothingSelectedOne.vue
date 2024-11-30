<script setup lang="ts">
import ClothingSelectedItem from './ClothingSelectedItem.vue';

defineProps<{
	clothes: Clothes;
}>();
</script>

<template>
	<section :class="$style.clothingSelectedOne">
		<ClothingSelectedItem :clothes="clothes" :class="$style.item" />
	</section>
</template>

<style lang="scss" module>
.clothingSelectedOne {
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
}

.item {
	width: 100%;
	height: 100%;
}
</style>
