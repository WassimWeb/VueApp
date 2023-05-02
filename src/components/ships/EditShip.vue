<template>
    <dialog :open="show" @close="closeDialog" class="form-dialog">
      <form @submit.prevent="submitForm">
        <label for="id">ID:</label>
        <input type="number" id="id" v-model="id" required>
        <br>
        <div class="button-container">
          <button type="button" @click="closeDialog" class="cancel-button">Cancel</button>
          <button type="submit" class="submit-button" @click="editShip">Edit</button>
        </div>
      </form>
      <edit-form-ship :showForm="showEdit" @update:show="showDialog" :ship="ship"></edit-form-ship>
    </dialog>
  </template>
  
  <script>
import EditFormShip from './EditFormShip.vue';
import axios from 'axios';
  export default {
    components: {
      EditFormShip
    },
    props: {
      show: {type: Boolean,
      defaul: false}
    },
    setup(props, {emit}) {

      const submitForm = () => {
        closeDialog();
      }
      const closeDialog = () => {
        emit('update:show', false);
      }
  
      return {
        submitForm,
        closeDialog
      }
    },
  data() {
    return {
      showEdit: false,
      id: 0,
      ship: {}
    }
  },
  methods: {
    async editShip(){
      this.showEdit = true
      await axios.get(`http://localhost:8080/ship/${this.id}`).then( response => {
            this.ship = response.data
        })
    },
    showDialog(value) {
      this.showEdit = value;
    }
  },
  
  }
  </script>
  
    <style >
      .register-button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
    }
  
    .form-dialog {
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
      padding: 1rem;
    }
  
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
  
    textarea,
    select {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      font-size: 1rem;
    }
  
    .button-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
    }
  
    .submit-button,
    .cancel-button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      cursor: pointer;
    }
  
    .submit-button {
      background-color: #4CAF50;
      color: white;
      border: none;
    }
  
    .cancel-button {
      background-color: #ccc;
      color: black;
      border: none;
    }
    </style>
    