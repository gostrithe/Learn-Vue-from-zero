<template>
  <div class="docker">
    <!-- CSS编码 BEM命名规则 -->
    <!-- block__element--modifier -->
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe608;</div> 
      <div class="docker__tittle">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xeb34;</div> 
      <div class="docker__tittle">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe645;</div> 
      <div class="docker__tittle">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe8a0;</div> 
      <div class="docker__tittle">我的</div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .docker {
    display: flex;
    position: absolute;
    box-sizing: border-box;
    padding: 0 .18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .49rem;
    border-top: 1px solid #F1F1F1;
    &__item {
      flex: 1;
      text-align: center;
      .iconfont {
        margin-top: .05rem;
        margin-bottom: -0.04rem;
        font-size: .18rem;
      }
      &--active {
        color: #1FA4FC;
      }
    }
    &__tittle {
    // 浏览器最小字体大小为12px，巧用缩放达到10px
      font-size: 20px;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
  }
  
  
</style>
