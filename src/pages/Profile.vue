<template>
  <div>
    <v-form class="mt-10 border-2 border-gray-800 bg-blue-300 pb-7 pt-7" @formSubmit="updateUsersData(profileData)">
      <v-input v-model="profileData.avatar" type="file" placeholder="Avatar" />
      <v-button class="bg-blue-500" text="Save" />
      <router-link class="mx-auto border-2 rounded-lg bg-orange-700 text-white p-3" :to="{ name: 'main_page' }">Return to
        Tasks</router-link>
    </v-form>

    <v-form class="mt-10 border-2 border-gray-800 bg-blue-300 pb-7 pt-7" @formSubmit="updateUsersPassword(profilePassword)">
      <v-input v-model="profilePassword.newPassword" type="text" placeholder="New password" />
      <v-button class="bg-blue-500 rounded" text="Save" />
      <router-link class="mx-auto border-2 rounded-lg bg-orange-700 text-white p-3" :to="{ name: 'main_page' }">Return to
        Tasks</router-link>
    </v-form>
  </div>
</template>

<script>
import VForm from "../components/UI/vForm.vue";
import VInput from "../components/UI/vInput.vue";
import VButton from "../components/UI/vButton.vue";
import { mapActions } from 'vuex';
export default {
  name: "Profile",
  components: { VButton, VInput, VForm },
  data() {
    return {
      profileData: {
        avatar: "",
      },
      profilePassword: {
        newPassword: ''
      }

    }
  },
  methods: {
    ...mapActions(['updateUsersData', 'updateUsersPassword']),
  },
}
</script>

<style scoped></style>
