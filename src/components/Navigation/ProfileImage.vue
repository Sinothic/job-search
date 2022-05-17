<template>
  <img :src="imageLink" alt="" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "https://avatars.githubusercontent.com/u/19940628?v=4",
    };
  },
};
</script>

<style></style>
