<script setup lang="ts">
import ClothingSelectedItem from './ClothingSelectedItem.vue';

defineProps<{
	clothesList: Clothes[];
	classItem?: string;
}>();
</script>

<template>
	<section :class="$style.clothingSelected">
		<TransitionGroup
			:enter-active-class="$style.transitionActive"
			:leave-active-class="$style.transitionActiveLeave"
			:move-class="$style.transitionActive"
			:enter-from-class="$style.transition"
			:leave-to-class="$style.transition"
		>
			<ClothingSelectedItem
				v-for="clothes in clothesList"
				:key="clothes.id"
				:clothes="clothes"
				:class="classItem"
			/>
		</TransitionGroup>
	</section>
</template>

<style lang="scss" module>
.clothingSelected {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	align-content: flex-start;
	border: 1px solid rgba(white, 0.4);
	padding: 10px;
	border-radius: 5px;
	overflow: auto;
}

.transitionActive {
	transition: all 0.5s ease;
}

.transitionActiveLeave {
	transition: all 0.5s ease;
	position: absolute;
}

.transition {
	opacity: 0;
}
</style>
