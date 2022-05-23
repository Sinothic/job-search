<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-flow justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <job-filter-sidebar-organizations />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import JobFilterSidebarOrganizations from "./JobFilterSidebarOrganizations.vue";
export default {
  name: "JobFiltersSidebar",
  components: { ActionButton, JobFilterSidebarOrganizations },
};
</script>

<style></style>
