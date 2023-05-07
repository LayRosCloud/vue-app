<template>
  <div class="app">
    <component :is="this.layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import AuthLayout from "@/layout/AuthLayout.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";

export default {
  components: {DefaultLayout, AuthLayout},
  computed:{
    layout(){
      return this.$route.meta.layout || 'default' + '-layout';
    }
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .app{
    padding: 20px;
  }
</style>