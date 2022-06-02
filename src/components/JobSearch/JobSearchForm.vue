<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <text-input
          v-model="role"
          placeholder="Software Engineer"
          data-test="input-role"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-bran-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where</label>
        <text-input
          v-model="location"
          placeholder="Los Angeles"
          data-test="input-location"
        />
      </div>
    </div>

    <action-button
      text="Search"
      type="secondary"
      class="rounded-r-3xl"
      data-test="button-submit"
    />
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  setup() {
    const router = useRouter();

    const role = ref("");
    const location = ref("");

    const searchForJobs = () => {
      router.push({
        name: "JobResults",
        query: {
          role: role.value,
          location: location.value,
        },
      });
    };

    return { role, location, searchForJobs };
  },
};
</script>

<style></style>
