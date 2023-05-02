<template>
    <dialog :open="show" @close="closeDialog" class="form-dialog">
      <form @submit.prevent="submitForm">
        <label for="id">ID:</label>
        <input type="number" id="id" v-model="id" required>
        <br>
        <div class="button-container">
          <button type="button" @click="closeDialog" class="cancel-button">Cancel</button>
          <button type="submit" class="submit-button">Get</button>
        </div>
      </form>
      <div>
        <br>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Draft</th>
          <th>Type</th>
          <th>Max Speed in KmH</th>
          <th>Max Speed in Knots</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ ship.id }}</td>
          <td>{{ ship.name }}</td>
          <td>{{ ship.draft }}</td>
          <td>{{ ship.type }}</td>
          <td>{{ ship.maxSpeedInKmH }}</td>
          <td>{{ ship.maxSpeedInKnots }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </dialog>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  export default {
    props: {
      show: {type: Boolean,
      default: false}
    },
    setup(props, {emit}) {
      const id = ref(0);
      const ship = ref({});
      const submitForm = async () => {
        await axios.get(`http://localhost:8080/ship/${id.value}`)
        .then(response => {
          ship.value = response.data;
          console.log(ship.value);
        })
        .catch(error => {
          console.log(error);
        });
      }
  
      const closeDialog = () => {
        id.value = 0;
        emit('update:show', false);
      }
  
      return {
        id,
        ship,
        prompt,
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
    