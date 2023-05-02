<template>
    <div class="columns">
       <div class="column">
        <div class="center-button">
          <button-component @click="moveToShips" :button-name="'Ships'" />
        </div>
    </div>
    <div class="column1">
      <div class="center-button1">
        <button-component @click="moveToCars" :button-name="'Cars'"/>
      </div>
    </div>
</div>
    </template>
    <script>
    import Button from '../components/ButtonComponent.vue';
    import { useRouter } from 'vue-router';
    
    export default {
      components:{
        ButtonComponent: Button
      },
      setup() {
        const router = useRouter();
        function moveToShips () {
          router.push('/ships')
        }
        function moveToCars () {
          router.push('/cars')
        }
        return{
          moveToShips,
          moveToCars
        }
      }
      
    }
    </script>
    
    <style>
    .columns {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100vw;
      height: 100vh;
    }
    .column {
      flex: 49%;
      background-image: url("../../images/ship.jpg");
      background-size: cover;
    }
    .column1 {
      flex: 49%;
      border-left: 3px solid rgb(12, 12, 12);
      background-image: url("../../images/car.jpg");
      background-size: cover;
    }
    .center-button {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 25%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    .center-button1 {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 75%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    </style>
    