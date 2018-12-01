<template>
  <div class="home">
   1243456
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods:{
    doRouter(f){
      
    }
  }
}
</script>


<style scoped lang="scss">
.home{
  height: 100%;
  width: 100%;
  .left-div{
    color: blue;
    width: 200px;
    height: 250px;
    line-height: 250px;
    background-color: #fff;
    margin: 0 auto;
    cursor: pointer;
    text-align: center;
  }
  .left-div:hover{
    box-shadow: 0 0px 10px 3px rgba(64, 158, 255,.9);
  }
  .right-div{
    color: blue;
    width: 200px;
    height: 250px;
    line-height: 250px;
    background-color: #fff;
    margin: 0 auto;
    cursor: pointer;
    text-align: center;
  }
  .right-div:hover{
    box-shadow: 0 0px 10px 3px rgba(64, 158, 255,.9);
  }
}
</style>