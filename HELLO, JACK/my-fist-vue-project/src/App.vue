<template>
  <div>
    <div class="wrapper">
      <div class="position">
        <span class="iconfont position__icon">&#xe637;</span>
        海大路1号广东海洋大学东区海安b116宿舍
        <span class="iconfont icon-bell-l"></span>
      </div>

      <div class="search">
        <span class="iconfont">&#xe741;</span>
        我的圆珠笔，比猪圆的我
      </div>

      <div class="banner">
        <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg">
      </div>

      <div class="icons">
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png">
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/菜市场.png">
          <p class="icons__item__desc">菜市场</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/水果店.png">
          <p class="icons__item__desc">水果店</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/鲜花.png">
          <p class="icons__item__desc">鲜花绿植</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/医药健康.png">
          <p class="icons__item__desc">医药健康</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/家居.png">
          <p class="icons__item__desc">家居时尚</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/蛋糕.png">
          <p class="icons__item__desc">烘焙蛋糕</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/签到.png">
          <p class="icons__item__desc">签到</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/大牌免运.png">
          <p class="icons__item__desc">大牌免运</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/红包.png">
          <p class="icons__item__desc">红包套餐</p>
        </div>
      </div> 

      <div class="gap"></div>
    </div>
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
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import './style/variables.scss';

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 .18rem;
  width: 100%;

  .position {
    position: relative;
    padding: .16rem 0;
    padding-right: .2rem;
    line-height: .22rem;
    font-size: .16rem;

    // 文本缩略三连击
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: $content-fontcolor;

    .position__icon {
      position: relative;
      top: .01rem;
      font-size: .2rem;
    }

    .icon-bell-l {
      position: absolute;
      right: 0;
      top: .17rem;
      font-size: .2rem;
    }
  }
  .search {
    margin-bottom: .12rem;
    line-height: .32rem;
    background: #f5f5f5;
    color: #B7B7B7;
    border-radius: .16rem;
    font-size: .14rem;
    .iconfont {
      display: inline-block;
      padding: 0 .04rem 0 .16rem;
      font-size: .16rem;
    }
  }
  .banner {
    // 因为banner没有高度，在网速慢的情况下，图片没加载出来，下面的内容会出现抖动现象
    // css hack技巧
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;  // 图片的宽高比 padding/width = 高/宽

    &__img {
      width: 100%;
    }
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: .16rem;
    &__item {
      width: 20%;  // 每行刚好五个
      &__img {
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto;  // item是刚好占满的，图片比item小，在里面水平居中
      }
      &__desc {
        margin: .06rem 0 .16rem;
        text-align: center;
        color: $content-fontcolor;
      }
    }
  }
  .gap {
    // 由于父盒子的padding限制了gap的通栏。
    // 可以设置负的margin来向外拓展
    margin: 0 -.18rem;
    height: .1rem;
    background: $content-bgColor;
  }
}

.docker {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: 1px solid $content-bgColor;
  color: $content-fontcolor;

  &__item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin-top: .05rem;
      margin-bottom: .05rem;
      font-size: .18rem;
    }

    &--active {
      color: #1FA4FC;
    }
  }

  &__tittle {
    // 浏览器最小字体大小为12px，巧用缩放达到10px
    font-size: .2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
