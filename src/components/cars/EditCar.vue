<template>
    <dialog :open="show" @close="closeDialog" class="form-dialog">
      <form @submit.prevent="submitForm">
        <label for="id">ID:</label>
        <input type="number" id="id" v-model="id" required>
        <br>
        <div class="button-container">
          <button type="button" @click="closeDialog" class="cancel-button">Cancel</button>
          <button type="submit" class="submit-button" @click="editCar">Edit</button>
        </div>
      </form>
    </dialog>
    <edit-form :show="showEdit" :car="car" @update:show="showDialog" ></edit-form>
  </template>
  
  <script>
  import axios from 'axios'
  import EditForm from './EditForm.vue'
  export default {
    components: {
      EditForm
    },
    props: {
      show: {type: Boolean,
      default: false}
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
      car: {}
    }
  },
  methods: {
    async editCar(){
      this.showEdit = true
      await axios.get(`http://localhost:8080/car/${this.id}`).then( response => {
            this.car = response.data
        })
      console.log(this.showEdit)
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
      position: absolute;
  top: 50%;
  left: 20%; 
  transform: translate(-50%, -50%); 
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  padding: 20px;
  max-width: 100%; 
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
    