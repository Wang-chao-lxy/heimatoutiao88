<template>
  <div class="hello">
   我是一个哈喽
   <!-- 匿名插槽 -->
   <slot></slot>
   <!-- 具名插槽 -->
   <slot name='aaa'></slot>
   <slot name='bbb'></slot>
   <!-- 后备内容 -->
   <slot name='ccc'>我是第三个剧名插槽</slot>
   <!-- 具名作用域插槽 -->
   <slot name='ddd' :list='bl' :jjj=db ></slot>
   <!-- 匿名作用域插槽 -->
   <slot money='10000'></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bl: ['姓名', '年龄', '学号'],
      db: '春娇'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
