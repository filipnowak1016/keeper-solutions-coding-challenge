import { createRouter, createWebHashHistory } from 'vue-router';
import UserRoleManagement from '../views/UserRoleManagement.vue'
import UserRoleEdit from '../views/UserRoleEdit.vue'

const routes = [
  {
    path: '/',
    redirect: '/user-roles'
  },
  {
    path: '/user-roles',
    name: 'UserRoleManagement',
    component: UserRoleManagement
  },
  {
    path: '/user-roles/form/:id?',
    name: 'UserRoleEdit',
    component: UserRoleEdit
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
