<template>
    <dialog :open="show" @close="closeDialog" class="form-dialog">
  <div>
    <h1>Ships List</h1>
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
        <tr v-for="ship in ships" :key="ship.id">
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
    <div class="button-container">
        <button type="button" @click="closeDialog" class="cancel-button">Cancel</button>
      </div>
</dialog>
</template>

<script>

export default {
    props: {
    show: {type: Boolean,
    defaul: false},
    ships: {
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