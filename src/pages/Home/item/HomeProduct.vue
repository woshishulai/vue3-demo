<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Item2 from './Item2.vue';
import { getGoodsList } from "@/request/api"
const props = defineProps({})
const list = ref([])
const getGoodsApi = async () => {
  let res = await getGoodsList()
  console.log(res.result, '我是分类');
  list.value = res.result
}
getGoodsApi()
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='home-popular-brand'>
    <Item2 :list="list"></Item2>
  </div>
</template>
<style scoped lang='less'></style>