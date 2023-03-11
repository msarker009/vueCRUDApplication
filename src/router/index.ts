import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EmployeeView from '../views/Employee/Index.vue'
import EmployeeCreate from '../views/Employee/Create.vue'
import EmployeeEdit from '../views/Employee/Edit.vue'
import EmployeeShow from '../views/Employee/View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/employees',
      name: 'employees',
      component: EmployeeView
    },
    {
      path: '/employees/create',
      name: 'employeeCreate',
      component: EmployeeCreate
    },
    {
      path: '/employees/:id/edit',
      name: 'employeeEdit',
      component: EmployeeEdit
    },
    {
      path: '/employees/:id',
      name: 'employeeView',
      component: EmployeeShow
    }
  ]
})

export default router
