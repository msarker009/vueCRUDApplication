<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>
          Employee Details
          <RouterLink to="/employees" class="btn btn-primary float-end">Go Back</RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <h5>Employee ID &nbsp &nbsp &nbsp: &nbsp &nbsp<span>{{employees?.employee_id}}</span></h5>
          <h5>Employee Name: &nbsp &nbsp<span>{{employees?.employee_name}}</span></h5>
          <h5>Phone Number &nbsp: &nbsp &nbsp<span>{{employees?.phone_number}}</span></h5>
          <h5>Department &nbsp &nbsp &nbsp   : &nbsp &nbsp<span>{{employees?.department}}</span></h5>
          <h5>Designation &nbsp &nbsp &nbsp  : &nbsp &nbsp<span>{{employees?.designation}}</span></h5>
          <h5>Joining Date &nbsp &nbsp &nbsp: &nbsp &nbsp<span>{{employees?.joining_date}}</span></h5>
          <h5>Address &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp: &nbsp &nbsp<span>{{employees?.address}}</span></h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {BasedUrl} from "@/baseURL";
import {useRoute} from "vue-router";

const employees = ref([]);
const employeeId = ref();
const route = useRoute();

const getEmployees = () => {
  BasedUrl.get(`${employeeId.value}`)
      .then((res) =>{
        employees.value = res.data.employee;
      });
};
onMounted(() => {
  employeeId.value = route.params.id;
  getEmployees();
})
</script>