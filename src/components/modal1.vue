<template>
   <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
</template>

<script>
export default {
  name: 'modal1',
}
</script>

<style>
.close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}
button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
}
.modal-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
}
</style>