<template>
    <dialog :open="show" @close="closeDialog" class="form-dialog">
  <div>
    <h1>Cars List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
          <th>Type</th>
          <th>Max Speed in KmH</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car.id">
          <td>{{ car.id }}</td>
          <td>{{ car.name }}</td>
          <td>{{ car.color }}</td>
          <td>{{ car.type }}</td>
          <td>{{ car.maxSpeedInKmH }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    <div class="button-container">
        <button type="button" @click="closeDialog" class="cancel-button">Cancel</button>
      </div>
</dialog>
</template>

<script>

export default {
    props: {
    show: {type: Boolean,
    default: false},
    cars: {
      type: Array,
      default: () => [{}]
    }
  },
  setup(props, {emit}) {

    const closeDialog = () => {
      emit('update:show', false);
    }

    return {
      closeDialog,
    }
  }   
    
}
</script>

<style >
.form-dialog {
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
    padding: 1rem;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .cancel-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .cancel-button {
    background-color: #ccc;
    color: black;
    border: none;
  }
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid black;
  padding: 8px;
}

th {
  background-color: #ddd;
  font-weight: bold;
}
</style>