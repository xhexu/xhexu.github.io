<template>
  <div class="home">
    <el-row style="height:25%"></el-row>
    <el-row style="height:75%">
      <el-col :span='6' :offset="6" style="height:100%">
          <router-link to="/read">
            <div class="left-div">浏览模式 </div>
          </router-link>
      </el-col>
      <el-col :span='6' style="height:100%">
        <router-link to="/edit">
          <div class="right-div">编辑模式 </div>
        </router-link>
      </el-col>
    </el-row> 
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    }
  }
}
</script>


<style scoped lang="scss">
.home{
  height: 100%;
  width: 100%;
  background: url('/static/bg.jpg') no-repeat;
  background-size: cover;
  .left-div{
    color: blue;
    width: 200px;
    height: 250px;
    line-height: 250px;
    background-color: #e0e0e0;
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
    background-color: #e0e0e0;
    margin: 0 auto;
    cursor: pointer;
    text-align: center;
  }
  .right-div:hover{
    box-shadow: 0 0px 10px 3px rgba(64, 158, 255,.9);
  }
}
</style>