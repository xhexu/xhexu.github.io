<template>
  <li>
    <div v-for="(item,index) in model" :key="index">
      <div
        :class="{bold: isFolder(item)}"
        @click="toggle(item)"
        @dblclick="changeType(item)">
        <i v-if="isFolder(item)" class="iconfont icon-color icon-wenjianjia"></i>
        <i v-if="!isFolder(item)" class="iconfont icon-color icon-ruanjiankaifabao"></i>
        <i v-if="isFolder(item)" class="iconfont icon-color" :class="{'icon-add':!open}"></i>
        {{ item.name }}
      </div>
      <ul v-show="open" v-if="isFolder(item)">
        <tree
          class="item"
          v-for="(model, index) in item.children"
          :key="index"
          :model="[model]"/>
          <li class="add" @click="addChild(item)">
            <i class="iconfont icon-add icon-color">新增栏目</i>
          </li>
      </ul>
    </div>
  </li>
</template>
<script>
  export default {
    name: 'tree',
    componentName: 'tree',
    props: {
      model: Array
    },
    data: function () {
      return {
        open: false
      }
    },
    computed: {
     
    },
    methods: {
      isFolder: function (item) {
        return item.children &&
          item.children.length>0
      },
      toggle: function (item) {
        if (this.isFolder(item)) {
          this.open = !this.open
        }
      },
      changeType: function (item) {
        if (!this.isFolder(item)) {
          Vue.set(this.model, 'children', [])
          this.addChild()
          this.open = true
        }
      },
      addChild: function (item,model) {
        if(item.children){
          item.children.push({
            name:"新栏目",
            children:[]
          })
        }else{
          item.children.push({
            name:"新文件"
          })
        }
        
      }
    }
  }
</script>
<style scoped>
.item {
  cursor: pointer;
}
.icon-color{
  color: #409eff;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
  margin: 5px 0;
}
</style>