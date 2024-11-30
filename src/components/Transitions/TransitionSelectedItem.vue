<script setup lang="ts"></script>

<template>
	<Transition
		:enter-active-class="$style.transitionActive"
		:leave-active-class="$style.transitionActive"
		:enter-from-class="$style.transition"
		:leave-to-class="$style.transition"
	>
		<slot />
	</Transition>
</template>

<style lang="scss" module>
.transitionActive {
	transition: all 0.5s ease;
}

.transition {
	opacity: 0;
}
</style>
