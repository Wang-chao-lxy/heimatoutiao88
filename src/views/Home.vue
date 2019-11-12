<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld>默认<template slot="aaa">我是具名插槽内容</template></HelloWorld>
    <HelloWorld><div slot="bbb" style="height:200px;background-color:red">剧名插槽二</div></HelloWorld>
    <HelloWorld>
    <ul slot="ddd" slot-scope="obj">
      {{obj.jjj}}
      <li v-for="(item,index) in obj.list" :key='index'>{{item}}</li>
    </ul>
    <span slot-scope="aaa">{{aaa.money}}</span>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
