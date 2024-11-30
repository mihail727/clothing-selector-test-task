<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	clothes: Clothes;
}>();

const formattedName = computed(() => `#${props.clothes.id} | ${props.clothes.name}`);
</script>

<template>
	<article :class="$style.clothingSelectedItem">
		{{ formattedName }}
	</article>
</template>

<style lang="scss" module>
.clothingSelectedItem {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid white;
	padding: 10px;
	border-radius: 5px;
	text-wrap: nowrap;
}
</style>
