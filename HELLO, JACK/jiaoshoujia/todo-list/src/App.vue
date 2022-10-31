<script>
  import TodoList from './components/TodoList.vue'

  export default {
    // 注册局部组件
    components: {
      TodoList
    }
  }
</script>

<template>
  <TodoList>
    <!-- 插槽入口（组件双标签之间） -->
    <h2>TODO-LIST</h2>
    <h3><span>今天要完成什么事情0.0</span></h3>
  </TodoList>
</template>

<!-- scoped, 样式被作用（限制在）于当前文件的内容，不会穿透到内部组件 -->
<style lang="scss" scoped>
  h2 {
    font-size: 2rem;
    font-weight: 700;
    border-bottom: 1px solid #000;
  }
  h3 {
    display: flex;
    padding: 4px;
    span {
      border-bottom: 2px solid darkred;
    }
  }
</style>
