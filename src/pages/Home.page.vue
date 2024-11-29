<script setup lang="ts">
import ClothingSelected from '@/components/ClothingSelected.vue';
import ClothingSelector from '@/components/ClothingSelector.vue';
import { useClothesStore } from '@/stores';
import { computed, ref } from 'vue';

const MAX_SELECTED_CLOTHES_USER = 6;
const MAX_SELECTED_CLOTHES_CHOISE = 1;

const clothesStore = useClothesStore();

const selectedClothesUserList = ref<Clothes[]>([]);
const selectedClothesChoiseList = ref<Clothes[]>([]);

const selectedCountLabel = computed(
	() => `Выбрано: ${selectedClothesUserList.value.length} / ${MAX_SELECTED_CLOTHES_USER}`,
);
</script>

<template>
	<main :class="$style.homePage">
		<section :class="$style.selectedWrapper">
			<ClothingSelected
				:clothes-list="selectedClothesUserList"
				:class="$style.clothingSelected"
				:class-item="$style.clothingUserSelectedItem"
			>
				<template #footer>
					{{ selectedCountLabel }}
				</template>
			</ClothingSelected>

			<ClothingSelected
				:clothes-list="selectedClothesChoiseList"
				:class="$style.clothingSelected"
				:class-item="$style.clothingChoiseSelectedItem"
			/>
		</section>

		<section :class="$style.selectorsWrapper">
			<ClothingSelector
				v-model:selected-clothes-list="selectedClothesUserList"
				theme="green"
				:clothes-list="clothesStore.clothesUser"
				:max-selections="MAX_SELECTED_CLOTHES_USER"
			/>
			<ClothingSelector
				v-model:selected-clothes-list="selectedClothesChoiseList"
				theme="blue"
				:clothes-list="clothesStore.clothesChoise"
				:max-selections="MAX_SELECTED_CLOTHES_CHOISE"
			/>
		</section>
	</main>
</template>

<style lang="scss" module>
.homePage {
	width: 95%;
	max-width: 1300px;
	place-self: center;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 10px;
}

.selectedWrapper {
	display: flex;
	justify-content: space-between;
}

.clothingSelected {
	width: 315px;
	height: 196px;
}

// Можно так или можно было бы создать
// модификации ClothingSelected с зашитыми значениями для SelectedUser и SelectedChoise
// зависело бы от всего макета сайта
.clothingUserSelectedItem {
	width: 141px;
}

.clothingChoiseSelectedItem {
	width: 100%;
	height: 100%;
}

.selectorsWrapper {
	display: flex;
	justify-content: space-between;
	gap: 26px;
}
</style>
