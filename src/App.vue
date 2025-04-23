<template>
<h1>Vue3 simple app</h1>
<MyComponent />
</template>

<script>

import MyComponent from './components/myComponent.vue'
import { getData } from './import.js'

export default {
  components: {
    MyComponent
  },
  data() {
    return {
    }
  },

  computed: {
    dataImport() {
      return this.$store.state.endImport
    },
  },

  watch:{
    dataImport:function(){
      
    }
  },
  
  created(){
    getData(this.$store)
  }
}
</script>

<style scoped lang="scss">

@use "../css/variables.scss";
@use "../css/overload-fonts.css";

</style>
