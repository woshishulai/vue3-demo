<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getBannerList } from "@/request/api"
const props = defineProps({})
const bannerList = ref([])
const getBanner = async () => {
  const res = await getBannerList()
  console.log(res)
  bannerList.value = res.result
}
onMounted(() => getBanner())
let queryParams = computed(() => { })
</script>
<template>
  <div class='home-banner'>
    <a-carousel autoplay>
      <img v-for="item in bannerList" :src="item.imgUrl" alt="">
    </a-carousel>
  </div>
</template>
<style scoped lang='less'>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 500px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}

.home-banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
</style>