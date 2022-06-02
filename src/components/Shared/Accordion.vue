<template>
  <div class="py-5 border-b border-solid border-brand-gray-1">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer select-none"
      data-test="clickable-area"
      @click="toggleAccordion"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
  </div>

  <div v-if="isOpen" class="w-full mt-5">
    <slot>
      <p>Whoops, somebody forgot to populate me!</p>
    </slot>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);

    const caretIcon = computed(() =>
      isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
    );

    const toggleAccordion = () => {
      isOpen.value = !isOpen.value;
    };

    return { isOpen, caretIcon, toggleAccordion };
  },
};
</script>

<style></style>
