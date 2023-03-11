<template>
  <div class="container mt-5 mb-5">
    <div class="card">
      <div class="card-header">
        <h4>
          Edit Employee
          <RouterLink to="/employees" class="btn btn-primary float-end">Go Back</RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="">Employee Id<span style="color: red">*</span></label>
          <input type="text" v-model="employee.employee_id" class="form-control" disabled/>
          <span style="color: red" v-if="errors.employee_id">{{errors.employee_id[0]}}</span>
        </div>
        <div class="mb-3">
          <label for="">Employee Name<span style="color: red">*</span></label>
          <input type="text" v-model="employee.employee_name" class="form-control"/>
          <span style="color: red" v-if="errors.employee_name">{{errors.employee_name[0]}}</span>
        </div>
        <div class="mb-3">
          <label for="">Phone Number<span style="color: red">*</span></label>
          <input type="text" v-model="employee.phone_number" class="form-control"/>
          <span style="color: red" v-if="errors.phone_number">{{errors.phone_number[0]}}</span>
        </div>
        <div class="mb-3">
          <label for="">Department<span style="color: red">*</span></label>
          <input type="text" v-model="employee.department" class="form-control"/>
          <span style="color: red" v-if="errors.department">{{errors.department[0]}}</span>
        </div>
        <div class="mb-3">
          <label for="">Designation<span style="color: red">*</span></label>
          <input type="text" v-model="employee.designation" class="form-control"/>
          <span style="color: red" v-if="errors.designation">{{errors.designation[0]}}</span>
        </div>
        <div class="mb-3">
          <label for="">Joining Date<span style="color: red">*</span></label>
          <input type="date" v-model="employee.joining_date" class="form-control"/>
          <span style="color: red" v-if="errors.joining_date">{{errors.joining_date[0]}}</span>
        </div>
        <div class="mb-3">
          <textarea placeholder="Enter employee address" v-model="employee.address" class="form-control"></textarea>
          <span style="color: red" v-if="errors.address">{{errors.address[0]}}</span>
        </div>
        <div class="mb-3">
          <button type="button" @click="updateEmployee" class="btn btn-primary float-end">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2';
import {BasedUrl} from "@/baseURL";
import {onMounted, ref, watch} from "vue";
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();
const employeeId = ref();
const employee = ref({
  employee_id: '',
  employee_name: '',
  phone_number: '',
  department: '',
  designation: '',
  joining_date: '',
  address: ''
});
const errors = ref({});

const updateEmployee = () => {
  BasedUrl.put(`${employeeId.value}/edit`, employee.value)
      .then((res)=>{
        Swal.fire(res.data.message);
        resetField();
        router.push({ name: 'employees' })
      })
      .catch((error)=> {
        if (error.response) {
          if (error.response.status === 422) {
            errors.value = error.response.data.errors;
          }
        }
      });
}
const editEmployee = (employeeId: number) => {
  BasedUrl.get(`${employeeId}/edit`)
      .then((res)=>{
        employee.value = res.data.employee;
      })
      .catch((error)=> {
        if (error.response) {
          if (error.response.status === 404) {
            alert(error.response.data.message);
          }
        }
      });
}
//reset input field
const resetField = () => {
  employee.value ={
    employee_id: '',
    employee_name: '',
    phone_number: '',
    department: '',
    designation: '',
    joining_date: '',
    address: ''
  }
}
watch(employee.value, (val) => {
  if (val.employee_id){
    errors.value.employee_id = '';
  }
  if (val.employee_name){
    errors.value.employee_name = '';
  }
  if (val.phone_number){
    errors.value.phone_number = '';
  }
  if (val.department){
    errors.value.department = '';
  }
  if (val.designation){
    errors.value.designation = '';
  }
  if (val.joining_date){
    errors.value.joining_date = '';
  }
  if (val.address){
    errors.value.address = '';
  }
});

onMounted(()=> {
  employeeId.value = +route.params.id;
  editEmployee(+route.params.id);
})
</script>

<style scoped>

</style>