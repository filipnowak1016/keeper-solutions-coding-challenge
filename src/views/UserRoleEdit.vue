<template>
  <v-container class="user-roles-container">
    <h1 class="font-weight-regular text--disabled mb-6">User Role</h1>
    <v-snackbar
      top
      v-model="snackbar"
    >
      Role saved succesfully
      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          small
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-form ref="userRoleForm" v-model="valid">
      <v-text-field
        v-model="item.name"
        label="Role name"
        required
        :rules="rules"
      ></v-text-field>
      <v-text-field
        v-model="item.type"
        label="Role type"
        required
        :rules="rules"
      ></v-text-field>
      <v-textarea
        v-model="item.description"
        label="Role description"
        required
        :rules="rules"
      ></v-textarea>
      <div class="d-flex">
        <v-switch
          v-model="item.editable"
          class="mr-8"
          inset
          label="Editable"
        ></v-switch>
        <v-switch
          v-model="item.active"
          inset
          label="Active"
        ></v-switch>
      </div>
      <div class="text-right">
        <v-btn
          class="mr-2"
          text
          @click="back"
        >
          Back
        </v-btn>
        <v-btn
          depressed
          color="primary"
          @click="submit"
        >
          Save
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  computed: {
    ...mapGetters(['getAllRoles'])
  },
  data() {
    return {
      item: {
        users: [],
        dateCreated: moment().format('DD/MM/YYYY')
      },
      valid: false,
      rules: [
        v => !!v || 'This field is required'
      ],
      snackbar: false
    }
  },
  methods: {
    back() {
      this.$router.push({ name: 'UserRoleManagement' })
    },
    submit() {
      this.$refs.userRoleForm.validate()
      if (this.valid) {
        if (this.item.id) {
          this.item.lastUpdate = moment().format('DD/MM/YYYY')
          this.updateRole(this.item)
        } else {
          const id = Math.max(...this.getAllRoles.map(item => item.id)) + 1
          this.addRole({ ...this.item, id })
        }
        this.snackbar = true
      }
    },
    ...mapMutations(['addRole', 'updateRole'])
  },
  mounted() {
    const { id } = this.$route.params
    if (id) {
      this.item = this.getAllRoles.find(item => item.id == id)
    }
  }
}
</script>
