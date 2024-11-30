<script setup lang="ts">
import ClothingSelected from '@/components/ClothingSelected/ClothingSelected.vue';
import ClothingSelectedMany from '@/components/ClothingSelected/ClothingSelectedMany.vue';
import ClothingSelectedOne from '@/components/ClothingSelected/ClothingSelectedOne.vue';
import ClothingSelector from '@/components/ClothingSelector/ClothingSelector.vue';
import TransitionSelectedItem from '@/components/Transitions/TransitionSelectedItem.vue';
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
			<ClothingSelected>
				<template #main>
					<ClothingSelectedMany :clothes-list="selectedClothesUserList" />
				</template>
				<template #footer>
					{{ selectedCountLabel }}
				</template>
			</ClothingSelected>

			<ClothingSelected>
				<template #main>
					<TransitionSelectedItem>
						<ClothingSelectedOne
							v-if="selectedClothesChoiseList[0]"
							:clothes="selectedClothesChoiseList[0]"
						/>
					</TransitionSelectedItem>
				</template>
			</ClothingSelected>
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

.selectorsWrapper {
	display: flex;
	justify-content: space-between;
	gap: 26px;
}
</style>
