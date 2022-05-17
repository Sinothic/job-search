<template>
  <div class="flex flex-col w-full h-full justify-start">
    <main-nav />
    <hero />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import Hero from "@/components/JobSearch/Hero.vue";

export default {
  name: "App",
  components: { MainNav, Hero },
};
</script>
