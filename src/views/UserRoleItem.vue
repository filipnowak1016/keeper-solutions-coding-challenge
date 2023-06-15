<template>
  <div>
    <v-card outlined>
      <div class="text-right inactive-container">
        <v-chip
          v-if="!item.active"
          class="mt-4 mr-4"
          color="error"
          label
          text-color="white"
          small
        >
          Inactive
        </v-chip>
      </div>
      <v-card-title class="pt-0">
        {{ item.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ item.type }}
      </v-card-subtitle>
      <v-card-text class="mb-6">
        <div class="text--secondary mb-2">
          {{ item.description }}
        </div>
        <v-avatar
          v-for="(user, i) in item.users.slice(0, 6)"
          class="mr-1"
          size="40"
          :key="i"
        >
          <img :src="user.photo_url">
        </v-avatar>
        <v-avatar
          v-if="item.users.length > 6"
          color="grey"
          class="white--text"
          size="40"
        >
          +{{item.users.length - 6}}
        </v-avatar>
      </v-card-text>
      <v-card-actions class="grey lighten-3 actions-container pl-4">
        <small
          class="text--disabled">
          <span v-if="item.lastUpdate">Last update: {{ updatedAt }}</span>
          <span v-else>Date created: {{ createdAt }}</span>
        </small>
        <v-spacer></v-spacer>
        <div v-if="item.editable">
          <v-btn @click="editRole">
            Edit
          </v-btn>
          <v-btn color="error" @click="removeRole(item.id)">
            Delete
          </v-btn>
        </div>
        <div v-else>
          <v-icon color="grey" icon="mdi-lock"></v-icon>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import moment from 'moment'
export default {
  methods: {
    editRole() {
      this.$router.push({ name: 'UserRoleEdit', params: { id: this.item.id } })
    },
    ...mapMutations(['removeRole'])
  },
  computed: {
    createdAt() {
      return moment(this.item.created_on).format("DD/MM/YYYY")
    },
    updatedAt() {
      return moment(this.item.created_on).format("DD/MM/YYYY")
    }
  },
  props: {
    item: Object
  }
}
</script>

<style>
.actions-container {
  height: 48px;
}
.inactive-container {
  height: 40px;
}
</style>