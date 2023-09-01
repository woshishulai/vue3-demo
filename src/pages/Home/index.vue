<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
import HomeBanner from "./item/HomeBanner.vue"
import HomeNews from "./item/HomeNews.vue"
import HomeHot from "./item/HomeHot.vue"
import HomeCategory from "./item/HomeCategory.vue"
import HomeProduct from './item/HomeProduct.vue';
import HomePopularBrand from './item/HomePopularBrand.vue';
import HomeSpecial from './item/HomeSpecial.vue';
</script>
<template>
  <div class='con-main-wrap'>
    <div class="fixed-banner">
      <HomeBanner></HomeBanner>
      <HomeCategory></HomeCategory>
    </div>
    <HomeNews></HomeNews>
    <HomeHot></HomeHot>
    <HomePopularBrand></HomePopularBrand>
    <HomeProduct></HomeProduct>
    <HomeSpecial></HomeSpecial>
  </div>
</template>
<style scoped lang='less'>
.fixed-banner {
  position: relative;
  height: 500px;
}
</style>