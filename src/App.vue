<template>
  <div class="app"> 
   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family:"Microsoft Yahei";
}
li{
  list-style: none;
}
::-webkit-scrollbar {
  width: 5px;
  height: 4px;
  background-color: #fff;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background: #fff ;
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.3);
  background-color:red;
}
::-webkit-scrollbar-thumb:hover {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color:blue;
}

.app{
  height: 100%;
  width: 100%;
}
</style>
