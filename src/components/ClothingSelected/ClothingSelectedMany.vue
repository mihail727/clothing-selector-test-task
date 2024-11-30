<script setup lang="ts">
import ClothingSelectedItem from './ClothingSelectedItem.vue';
import TransitionSelectedItems from '@/components/Transitions/TransitionSelectedItems.vue';

defineProps<{
	clothesList: Clothes[];
}>();
</script>

<template>
	<section :class="$style.clothingSelectedMany">
		<TransitionSelectedItems>
			<ClothingSelectedItem
				v-for="clothes in clothesList"
				:key="clothes.id"
				:clothes="clothes"
				:class="$style.item"
			/>
		</TransitionSelectedItems>
	</section>
</template>

<style lang="scss" module>
.clothingSelectedMany {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
	gap: 10px;
	align-content: flex-start;
	overflow: auto;
}

.item {
	width: 141px;
}
</style>
