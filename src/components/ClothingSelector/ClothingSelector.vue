<script setup lang="ts">
import { computed } from 'vue';
import ClothingSelectorItem from '@/components/ClothingSelector/ClothingSelectorItem.vue';

const selectedClothesList = defineModel<Clothes[]>('selectedClothesList', {
	default: [],
});

const props = withDefaults(
	defineProps<{
		clothesList: Clothes[];
		theme?: ClothingSelectorItemTheme;
		maxSelections?: number;
	}>(),
	{
		theme: 'green',
	},
);

const selectedClothesIds = computed(() => selectedClothesList.value.map((item) => item.id));

function onClickItem(clickedClothes: Clothes) {
	const index = selectedClothesList.value.findIndex((item) => item.id === clickedClothes.id);

	if (index !== -1) {
		selectedClothesList.value.splice(index, 1);

		return;
	}

	if (!props.maxSelections || selectedClothesList.value.length < props.maxSelections) {
		const lastIndex = selectedClothesList.value.length;
		selectedClothesList.value.splice(lastIndex, 0, clickedClothes);
	}
}
</script>

<template>
	<section :class="$style.clothingSelector">
		<ClothingSelectorItem
			v-for="(clothes, index) in clothesList"
			:key="index"
			:clothes="clothes"
			:theme="theme"
			:is-selected="selectedClothesIds.includes(clothes.id)"
			@click="onClickItem(clothes)"
		/>
	</section>
</template>

<style lang="scss" module>
.clothingSelector {
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	border: 1px solid rgba(white, 0.4);
	padding: 10px;
	border-radius: 5px;

	& > * {
		flex: 1 1 175px;
	}
}
</style>
