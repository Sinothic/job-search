<template>
  <div class="w-full min-h-64 bg-white">
    <div
      class="flex flex-nowrap items-center h-full py-2 px-8 mx-auto border-b border-solid border-brand-gray-1"
    >
      <router-link to="/" class="flex items-center h-full text-xl">{{
        company
      }}</router-link>
      <!-- <a :href="url" class="flex items-center h-full text-xl">{{ company }}</a> -->
      <nav class="h-full ml-12">
        <ul class="flex h-full p-0 m-0 list-none">
          <li
            v-for="(menuItem, index) in menuItems"
            :key="index"
            class="h-full ml-9 first:ml-0"
            data-test="main-nav-list-item"
          >
            <router-link
              :to="menuItem.link"
              class="flex items-center h-full py-2.5"
              >{{ menuItem.text }}</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="flex items-center h-full ml-auto">
        <profile-image v-if="isLoggedIn" data-test="profile-image" />
        <action-button
          v-else
          type="primary"
          text="Sign in"
          data-test="login-button"
          @click="loginUser"
        />
      </div>
    </div>

    <SubNav v-if="isLoggedIn" data-test="subnav" />
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      company: "Bobo Careers",
      url: "https://careers.google.com",
      menuItems: [
        { text: "Teams", link: "" },
        { text: "Locations", link: "" },
        { text: "Life at Bobo", link: "" },
        { text: "How we hire", link: "" },
        { text: "Students", link: "" },
        { text: "Jobs", link: "/jobs/results" },
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
