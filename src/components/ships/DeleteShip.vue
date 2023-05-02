<template>
    <dialog :open="show" @close="closeDialog" class="form-dialog">
      <form @submit.prevent="submitForm">
        <label for="id">ID:</label>
        <input type="number" id="id" v-model="id" required>
        <br>
        <div class="button-container">
          <button type="button" @click="closeDialog" class="cancel-button">Cancel</button>
          <button type="submit" class="submit-button">Delete</button>
        </div>
      </form>
    </dialog>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  export default {
    props: {
      show: {type: Boolean,
      defaul: false}
    },
    setup(props, {emit}) {
      const id = ref(0);
  
      const submitForm = async () => {
        await axios.delete(`http://localhost:8080/ship/${id.value}`)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
        closeDialog();
      }
  
      const closeDialog = () => {
        id.value = 0;
        emit('update:show', false);
      }
  
      return {
        id,
        submitForm,
        closeDialog
      }
    }
  
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
    