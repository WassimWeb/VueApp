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
  //import axios from 'axios';
  export default {
    props: {
      show: {type: Boolean,
      defaul: false}
    },
    setup(props, {emit}) {
      const name = ref('');
      const draft = ref(0.0);
      const maxSpeedInKmH = ref(0.0);
      const maxSpeedInKnots = ref(0.0);
  
      const submitForm = async () => {
        /*await axios.post('http://localhost:8080/ship', {name: name.value, draft: draft.value, maxSpeedInKmH: maxSpeedInKmH.value, maxSpeedInKnots: maxSpeedInKnots.value})
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });*/
        try {
        const response = await fetch('http://localhost:8080/ship', {
          method: 'POST',
          body: JSON.stringify({name: name.value, draft: draft.value, maxSpeedInKmH: maxSpeedInKmH.value, maxSpeedInKnots: maxSpeedInKnots.value}),
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })

        const responseData = await response.json()

        console.log(responseData)
      } catch (error) {
        console.error(error)
      }
        closeDialog();
      }
  
      const closeDialog = () => {
        name.value = '';
        draft.value = 0.0;
        maxSpeedInKmH.value = '';
        maxSpeedInKnots.value = '';
        emit('update:show', false);
      }
  
      return {
        name,
        draft,
        maxSpeedInKmH,
        maxSpeedInKnots,
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
      position: absolute;
  top: 50%;
  left: 15%; 
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
    