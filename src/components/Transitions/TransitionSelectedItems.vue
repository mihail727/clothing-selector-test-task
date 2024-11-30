<script setup lang="ts"></script>

<template>
	<TransitionGroup
		:enter-active-class="$style.transitionActive"
		:leave-active-class="$style.transitionActiveLeave"
		:move-class="$style.transitionActive"
		:enter-from-class="$style.transition"
		:leave-to-class="$style.transition"
	>
		<slot />
	</TransitionGroup>
</template>

<style lang="scss" module>
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
