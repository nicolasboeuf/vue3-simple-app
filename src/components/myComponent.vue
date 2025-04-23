<template>
    <div id="myComponent">
       <span>Je suis un composant</span>
    </div>
  </template>
  
  <script>
  //import store from '@/store'
  
  export default {
    name: 'MyComponent',
    data(){
      return {
      }
    },
    props: {
    },
    computed: {
    },
    methods: {
    },
  
    watch:{
    },
  
    created(){
    }
  
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    
    @use "../../css/variables.scss";
    @use "../../css/overload-fonts.css";
  
    span{
      color:green;
      font-family:"Marianne-Light";
    }
  
    @media (max-width: 728px) {
      span{
        color:blue;
      }    
    }
  
  
  </style>
  