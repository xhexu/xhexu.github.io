<template>
  <el-row>
    <div class="nav-bar">
        <!-- <el-col :span="6">易笔记</el-col>
        <el-col :span="12" :offset="6">写笔记</el-col> -->
    </div>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    }
  }
</script>
<style>
.nav-bar{
  height: 60px;
  border-bottom: 1px solid rgba(64, 158, 255,.9);
  background-color: #ffffff;
}
</style>