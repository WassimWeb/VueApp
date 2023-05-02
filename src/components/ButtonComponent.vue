<template>
    <button class="inline-flex 
    items-center white 
    text-black text-sm rounded min-h-[32px] px-3 
    py-0.5 font-semibold hover:bg-gray-800" style="width: 10vw; font-weight: 700; height: 7vh; cursor: pointer;" color="black">
      {{ props.buttonName}}
    </button>
</template>
<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  buttonName: String
});
</script>