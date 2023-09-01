<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getNewsList } from '@/request/api';
import Item1 from './Item1.vue';
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
const about = {
  list: [],
  title: '新鲜好物',
  label: '新鲜出炉+品质靠谱',
  show: false,
  price: true
}
const getNewsApi = async () => {
  let res = await getNewsList()
  about.list = res.result
  console.log(about.list);
}
getNewsApi()
</script>
<template>
  <div class='home-news'>
    <Item1 :about="about"></Item1>
  </div>
</template>
<style scoped lang='less'></style>