<template>
  <div class="edit">
    <nav-bar/>
    <el-row style="height:100%;padding: 0 20px;">
      <el-col :span="18" class="edit-left-col">
        <mark-down/>
      </el-col>
      <el-col :span="6">
        <div class="edit-right">
          <tree class="item" :model="treeData"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MarkDown from 'vue-meditor';
import NavBar from '../../components/navBar.vue'
// import Tree from '../../components/tree.vue'
export default {
  components: {
    MarkDown,
    NavBar
  },
  data () {
    return {
      treeData:[{
          name: 'My Tree',
          children: [
            { name: 'hello',
              children: [
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            },
            { name: 'wat' },
            {
              name: 'child folder',
              children: [
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            }
          ]
      },{
        name: "My Tree Two",
        children:[]
      }]
    }
  },
  methods:{
    doRouter(f){
      
    }
  }
}
</script>


<style scoped lang="scss">
.edit{
  height: 100%;
  width: 100%;
  background-color: #fff;
  .edit-left-col{
    border-left:1px solid rgba(64, 158, 255,.2);
    border-right:1px solid rgba(64, 158, 255,.2);
  }
  .edit-right{
    background-color: #ffffff;
    height: 100%;
    padding: 10px;
  }
}
</style>