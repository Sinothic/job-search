<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <li class="mb-7">
        <router-link
          to="/jobs/results/1"
          class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray transition-shadow"
        >
          <div class="pt-5 pb-2 mx-8 border border-solid border-brand-gray-2">
            <h2 class="mb-2 text-2xl">
              Strategic Partnerships Development Manager, Ad-Supported Services
              and Monetization
            </h2>
            <div class="flex flex-row align-middle">
              <div class="mr-5">
                <font-awesome-icon
                  :icon="['fas', 'building']"
                  class="mr-2 text-brand-gray-400"
                />
                <span>Bobo</span>
              </div>

              <div>
                <font-awesome-icon
                  :icon="['fas', 'location-dot']"
                  class="mr-2 text-brand-gray-400"
                />
                <span>San Francisco, CA, USA</span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ol>
  </main>
</template>

<script>
export default {
  name: "JobListing",
};
</script>

<style></style>
