<script setup lang="ts">
import ClothingSelectedItem from './ClothingSelectedItem.vue';

defineProps<{
	clothesList: Clothes[];
	classItem?: string;
}>();
</script>

<template>
	<section :class="$style.clothingSelected">
		<section :class="$style.list">
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

		<footer v-if="'footer' in $slots" :class="$style.footer">
			<slot name="footer" />
		</footer>
	</section>
</template>

<style lang="scss" module>
.clothingSelected {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;
	border: 1px solid rgba(white, 0.4);
	padding: 10px;
	border-radius: 5px;
}

.list {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	align-content: flex-start;
	overflow: auto;
}

.footer {
	place-self: center;
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
