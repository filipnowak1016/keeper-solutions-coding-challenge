<template>
  <v-container class="user-roles-container">
    <h1 class="font-weight-regular text--disabled mb-6">User Roles Management</h1>
    <v-row>
      <v-col>
        <v-text-field
          v-model="search"
          append-inner-icon="mdi-magnify"
          label="Search"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-select
          v-model="filter"
          :items="roleStatusOptions"
          label="Role Status"
        ></v-select>
      </v-col>
      <v-col class="text-right">
        <v-btn
          depressed
          color="primary"
          @click="createNewRole"
        >
          Create new role
        </v-btn>
      </v-col>
    </v-row>
    <div class="user-roles-items" v-if="items.length">
      <user-role-item
        v-for="role in items"
        :key="role.id"
        :item="role"
      />
    </div>
    <div v-else>
      No results
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import UserRoleItem from './UserRoleItem.vue'

export default {
  name: 'UserRoleManagement',
  components: {
    UserRoleItem
  },
  computed: {
    items() {
      let roles = this.getAllRoles
      if (this.search) {
        roles = roles.filter(role => role.name.toLowerCase().includes(this.search))
      }
      if (this.filter === 'Active') {
        roles = roles.filter(role => role.active)
      }
      if (this.filter === 'Inactive') {
        roles = roles.filter(role => !role.active)
      }
      return roles
    },
    ...mapGetters(['getAllRoles'])
  },
  data() {
    return {
      filter: null,
      roleStatusOptions: ['Active', 'Inactive', 'Active and Inactive'],
      search: null
    }
  },
  methods: {
    createNewRole() {
      this.$router.push({ name: 'UserRoleEdit' })
    }
  }
}
</script>

<style>
.user-roles-container {
  background: white;
  margin-top: 28px;
  padding: 40px;
}
.user-roles-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
</style>
