<template>
  <ButtonComponent :button-name="'Zurück'" @click="moveToWelcomePage" />
  <div class="center">
    <button-component :button-name="'Build a Ship'" style="margin-right: 1vw;" @click="showDialogBuild = true"/>
  <button-component :button-name="'Get Ship with Id'" style="margin-right: 1vw;" @click="showDialogShipId = true"/>
  <button-component :button-name="'Get All Ships'" style="margin-right: 1vw;" @click="getAllShips"/>
  <button-component :button-name="'Edit a Ship'" style="margin-right: 1vw;" @click="showEditShip = true"/>
  <button-component :button-name="'Delete a Ship'" style="margin-top: 1vh; margin-left: 35%;" @click="showDeleteShip = true"/>
  </div>
  <build-ship :show="showDialogBuild" @update:show="handleDialogUpdate"></build-ship>
  <get-ship-id :show="showDialogShipId" @update:show="getShipById"></get-ship-id>
  <get-all-ships :show="showDialogShips" :ships="ships" @update:show="closeDialogAllShips"></get-all-ships>
  <edit-ship :show="showEditShip" @update:show="editShip"></edit-ship>
  <delete-ship :show="showDeleteShip" @update:show="deleteShip"></delete-ship>
  </template>
  <script>
  import Button from '../components/ButtonComponent.vue';
  import axios from 'axios'; 
  import { useRouter } from 'vue-router';
  import BuildShip from '@/components/ships/BuildShip.vue';
  import DeleteShip from '@/components/ships/DeleteShip.vue';
  import EditShip from '@/components/ships/EditShip.vue';
  import GetAllShips from '@/components/ships/GetAllShips.vue';
  import GetShipId from '@/components/ships/GetShipId.vue';
  
  export default {
    components:{
      ButtonComponent: Button,
      BuildShip,
      DeleteShip,
      EditShip,
      GetAllShips,
      GetShipId
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
      showDialogShips: false,
      showDialogShipId: false,
      showEditShip: false,
      showDeleteShip: false,
      ships: [{}]
    }
  },
  methods: {
    handleDialogUpdate(value) {
      this.showDialogBuild = value;
    },
    async getAllShips() {
        this.showDialogShips = true
      await axios.get('http://localhost:8080/ships').then(response => {
          console.log(response);
          this.ships = response.data;
        })
    },
    closeDialogAllShips(value) {
      this.showDialogShips = value
    },
    getShipById(value) {
      this.showDialogShipId = value
    },
    editShip(value) {
      this.showEditShip = value
    },
    deleteShip(value) {
      this.showDeleteShip = value
    }
  },
    
  }
  </script>
  
  <style>
  body{
    background-image: url("../../images/ship.jpg");
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
  