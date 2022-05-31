<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="(jobType, index) in UNIQUE_JOB_TYPES"
            :key="index"
            class="w-1/2 h-8"
          >
            <input
              :id="index"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              :data-test="jobType"
              @change="selectJobType"
            />
            <label :for="index" data-test="job-type">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
import { mapGetters, mapMutations } from "vuex";
import { UNIQUE_JOB_TYPES, ADD_SELECTED_JOB_TYPES } from "@/store/constants";

export default {
  name: "JobFilterSidebarJobTypes",
  components: {
    Accordion,
  },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  methods: {
    selectJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
    },
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
  },
};
</script>

<style></style>
