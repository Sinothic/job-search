<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray transition-shadow"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-1">
        <h2 class="mb-2 text-2xl">
          {{ job.title }}
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <font-awesome-icon
              :icon="['fas', 'building']"
              class="mr-2 text-brand-gray-400"
            />
            <span>{{ job.organization }}</span>
          </div>

          <div class="flex flex-row">
            <font-awesome-icon
              :icon="['fas', 'location-dot']"
              class="mr-2 text-brand-gray-400"
            />
            <ul class="flex flex-row">
              <li
                v-for="(location, index) in job.locations"
                :key="index"
                class="inline-block mr-5"
              >
                {{ location }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="pl-8 list-none">
              <li
                v-for="(qualification, index) in job.minimumQualifications"
                :key="index"
                class="before:content-['•'] before:text-brand-gray-400 before:mr-3"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-t text-center">
          <router-link :to="jobPageLink" class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  computed: {
    jobPageLink() {
      return `/jobs/results/${this.job.id}`;
    },
  },
};
</script>

<style></style>
