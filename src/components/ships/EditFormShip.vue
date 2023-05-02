<template>
    <dialog :open="show" @close="closeDialog" class="form-dialog">
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
        <br>
        <label for="draft">Draft:</label>
        <input type="number" id="draft" v-model="draft" required>
        <br>
        <label for="maxSpeedInKmH">Max Speed in KmH:</label>
        <input type="number" id="maxSpeedInKmH" v-model="maxSpeedInKmH" required>
        <br>
        <label for="maxSpeedInKnots">Max Speed in Knots:</label>
        <input type="number" id="maxSpeedInKnots" v-model="maxSpeedInKnots" required>
        <br>
        <br>
        <div class="button-container">
          <button type="button" @click="closeDialog" class="cancel-button">Cancel</button>
          <button type="submit" class="submit-button">Build</button>
        </div>
      </form>
    </dialog>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  export default {
    props: {
      showForm: {type: Boolean,
      defaul: false},
      car: {
      type: Object,
      default: () => {}
    }
    },
    async setup(props, {emit}) {
      const name = ref(props.ship.name);
      const draft = ref(props.ship.draft);
      const maxSpeedInKmH = ref(props.ship.maxSpeedInKmH);
      const maxSpeedInKnots = ref(props.ship.maxSpeedInKnots);
  
      const submitForm = async () => {
        await axios.put(`http://localhost:8080/ship/${props.shipId}`, {name: name.value, draft: draft.value, maxSpeedInKmH: maxSpeedInKmH.value, maxSpeedInKnots: maxSpeedInKnots.value})
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
        closeDialog();
      }
  
      const closeDialog = () => {
        name.value = '';
        draft.value = 0.0;
        maxSpeedInKmH.value = 0.0;
        maxSpeedInKnots.value = 0.0;
        emit('update:show', false);
      }
  
      return {
        name,
        draft,
        maxSpeedInKmH,
        maxSpeedInKnots,
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
    