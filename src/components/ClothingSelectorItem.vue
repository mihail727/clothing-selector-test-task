<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		clothes: Clothes;
		isSelected?: boolean;
		theme?: ClothingSelectorItemTheme;
	}>(),
	{
		theme: 'green',
	},
);

const computedHeader = computed(() => `Предмет #${props.clothes.id}`);
</script>

<template>
	<article
		:class="[
			$style.clothingSelectorItem,
			$style[`theme-${theme}`],
			isSelected && $style.selected,
		]"
	>
		<header :class="[$style.header, $style.textBold]">{{ computedHeader }}</header>
		<p :class="$style.description">
			<span :class="$style.textBold">Название:</span>
			<span>{{ clothes.name }}</span>
		</p>
	</article>
</template>

<style lang="scss" module>
.clothingSelectorItem {
	display: flex;
	flex-direction: column;
	cursor: pointer;
	border: 1px solid white;
	padding: 10px;
	border-radius: 5px;
	transition: all 0.3s ease;
}

.theme-green {
	&.clothingSelectorItem {
		$hoverColor: rgb(130, 197, 130);
		$selectedColor: rgb(51, 187, 51);

		&:hover {
			border-color: $hoverColor;
			color: $hoverColor;
		}

		&.selected {
			border-color: $selectedColor;
			color: $selectedColor;
		}
	}
}

.theme-blue {
	&.clothingSelectorItem {
		$hoverColor: rgb(130, 187, 197);
		$selectedColor: rgb(51, 171, 187);

		&:hover {
			border-color: $hoverColor;
			color: $hoverColor;
		}

		&.selected {
			border-color: $selectedColor;
			color: $selectedColor;
		}
	}
}

.header {
	font-size: 14px;
}

.description {
	display: flex;
	gap: 4px;
}

.textBold {
	font-weight: 600;
}
</style>
