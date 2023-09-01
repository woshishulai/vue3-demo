<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import LayoutHeaderUi from './LayoutHeaderUi.vue';
import HeaderCart from './HeaderCart.vue';
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='layout-header'>
    <div class="con-main-wrap">
      <RouterLink class="logo" to="/">
      </RouterLink>
      <LayoutHeaderUi></LayoutHeaderUi>
      <div class="right-research">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <HeaderCart></HeaderCart>
    </div>
  </div>
</template>
<style scoped lang='less'>
.layout-header {

  .con-main-wrap {
    .flex-row;
    justify-content: space-between;

    .logo {
      width: 200px;
      height: 132px;
      background: url('@/assets/img/logo.png')no-repeat center 18px/contain;
    }

    .right-research {
      padding: 0 5px;
      height: 32px;
      border-bottom: 1px solid #e7e7e7;

      i {
        font-size: 18px;
        margin-right: 5px;
      }

      input {
        border: none;
        color: #666;
        height: 30px;
      }
    }
  }
}
</style>