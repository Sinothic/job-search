<template>
  <div>
    <h1 class="text-6xl font-bold">This is an about page</h1>
    <button @click="$router.push({ name: 'Home' })">Go to Home Page</button>
  </div>
</template>
<script>
export default {
  name: "JobResultsView",
};
</script>
