import { clothesUser as mockClothesUser, clothesChoise as mockClothesChoise } from '@/mock/clothes';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useClothesStore = defineStore('clothes-store', () => {
	const clothesUser = ref<Clothes[]>([...mockClothesUser]);
	const clothesChoise = ref<Clothes[]>([...mockClothesChoise]);

	return {
		clothesUser,
		clothesChoise,
	};
});
