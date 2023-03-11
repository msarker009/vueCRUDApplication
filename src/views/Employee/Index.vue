<template>
<div class="container mt-5 mb-5">
  <div class="card employeeData">
    <div class="card-header">
      <h4>
        Employees
        <RouterLink to="/employees/create" class="btn btn-primary float-end">Add Employee</RouterLink>
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
        <tr class="text-center">
          <th style="width: 115px" class="tableHeader">Employee Id</th>
          <th class="tableHeader">Employee Name</th>
          <th style="width: 135px" class="tableHeader">Phone Number</th>
          <th class="tableHeader">Department</th>
          <th class="tableHeader">Designation</th>
          <th style="width: 115px" class="tableHeader">Joining Date</th>
          <th style="width: 210px" class="tableHeader">Action</th>
        </tr>
        </thead>
        <tbody v-if="employees.length > 0">
        <tr v-for="(employee, index) in employees" :key="index">
          <td>{{employee?.employee_id}}</td>
          <td>{{employee?.employee_name}}</td>
          <td>{{employee?.phone_number}}</td>
          <td>{{employee?.department}}</td>
          <td>{{employee?.designation}}</td>
          <td>{{employee?.joining_date}}</td>
          <td>
            <RouterLink :to="`/employees/${employee?.id}`" class="btn btn-secondary">View</RouterLink>
            <RouterLink :to="`/employees/${employee?.id}/edit`" class="btn btn-success m-1">Edit</RouterLink>
            <button type="button" @click="deleteEmployee(employee?.id)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
        </tbody>
        <tbody v-else>
        <tr>
          <td colspan="8">Loading...</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2';
import {onMounted, ref} from "vue";
import {BasedUrl} from "@/baseURL";

const employees = ref([]);

const getEmployees = () => {
  BasedUrl.get("")
      .then((res) =>{
        employees.value = res.data.employees;
      });
};

const deleteEmployee = (employeeId: number) => {
  if (confirm('Are you sure, you want to delete this data?')) {
    BasedUrl.delete(`${employeeId}/delete`)
        .then((res)=> {
          Swal.fire(res.data.message);
          getEmployees();
        })
        .catch((error)=> {
          if (error.response) {
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          }
        });
  }
}

onMounted(() => {
  getEmployees();
})

</script>

<style scoped>
.tableHeader {
  font-weight: bold;
}
</style>