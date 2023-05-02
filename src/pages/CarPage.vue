<template>
  <ButtonComponent :button-name="'Zurück'" @click="moveToWelcomePage" />
  <div class="center">
    <button-component :button-name="'Build a Car'" style="margin-right: 1vw;" @click="showDialogBuild = true"/>
  <button-component :button-name="'Get Car with Id'" style="margin-right: 1vw;" @click="showDialogCarId = true"/>
  <button-component :button-name="'Get All Cars'" style="margin-right: 1vw;" @click="getAllCars"/>
  <button-component :button-name="'Edit a Car'" style="margin-right: 1vw;" @click="showEditCar = true"/>
  <button-component :button-name="'Delete a Car'" style="margin-top: 1vh; margin-left: 35%;" @click="showDeleteCar = true"/>
  </div>
  <build-car :show="showDialogBuild" @update:show="handleDialogUpdate" ></build-car>
  <get-car-id :show="showDialogCarId" @update:show="getCarId"></get-car-id>
  <get-all-cars :show="showDialogCars" :cars="cars" @update:show="closeDialogAllCars"></get-all-cars>
  <edit-car :show="showEditCar" @update:show="editCar"></edit-car>
  <delete-car :show="showDeleteCar" @update:show="deleteCar"></delete-car>
</template>
  <script>
  import axios from 'axios';
  import Button from '../components/ButtonComponent.vue';
  import BuildCar from '../components/cars/BuildCar.vue';
  import { useRouter } from 'vue-router';
  import GetAllCars from '@/components/cars/GetAllCars.vue';
  import GetCarId from '@/components/cars/GetCarId.vue';
  import EditCar from '@/components/cars/EditCar.vue';
  import DeleteCar from '@/components/cars/DeleteCar.vue';
  
  export default {
    components:{
      ButtonComponent: Button,
      BuildCar,
      GetAllCars,
      GetCarId,
      EditCar,
      DeleteCar
    },
    setup() {
      const router = useRouter();
      function moveToWelcomePage () {
        router.push('/')
      }

      return{
        moveToWelcomePage
      }
    },
  data() {
    return {
      showDialogBuild: false,
      showDialogCars: false,
      showDialogCarId: false,
      showEditCar: false,
      showDeleteCar: false,
      cars: [{}]
    }
  },
  methods: {
    handleDialogUpdate(value) {
      this.showDialogBuild = value;
    },
    async getAllCars() {
        this.showDialogCars = true
      await axios.get('http://localhost:8080/cars').then(response => {
          console.log(response);
          this.cars = response.data;
        })
        console.log(this.cars)
    },
    closeDialogAllCars(value) {
      this.showDialogCars = value
    },
    getCarId(value) {
      this.showDialogCarId = value
    },
    editCar(value) {
      this.showEditCar = value
    },
    deleteCar(value) {
      this.showDeleteCar = value
    }
  },
    
  }
  </script>
  <style >
  body{
    background-image: url("../../images/car.jpg");
    background-size: cover;
  }
  .center {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  </style>
  