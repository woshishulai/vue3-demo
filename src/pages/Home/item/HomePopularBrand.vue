<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getPopularBrand } from '@/request/api';
import Item1 from './Item1.vue';
const props = defineProps({})
let queryParams = computed(() => { })
const about = {
  list: [],
  title: '热门品牌',
  label: '国际经典+品质保证',
  show: true,
  price: false
}
const getList = async () => {
  let res = await getPopularBrand()
  about.list = res.result
  console.log(about.list, '我是热门品牌');
}
getList()
onMounted(() => { })
</script>
<template>
  <div class='home-popular-brand'>
    <Item1 :about="about"></Item1>
  </div>
</template>
<style scoped lang='less'></style>