<script setup>
import Item1 from './Item1.vue';
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getHotList } from '@/request/api';
const about = {
  list: [],//渲染要的数据
  title: '人气推荐',//组件的标题
  label: '人气爆款+不容错过',//标题旁边两个浅色的介绍
  show: 'none',//上一页还是下一页 ture==上一页下一页 false展示查看更多 ‘none’等于不展示
  price: false//展示文字还是价格
}
const getHotApi = async () => {
  let res = await getHotList()
  about.list = res.result
  console.log(about.list);
}
const props = defineProps({})
getHotApi()
onMounted(() => {
})
let queryParams = computed(() => { })
</script>
<template>
  <Item1 :about="about"></Item1>
</template>
<style scoped lang='less'></style>