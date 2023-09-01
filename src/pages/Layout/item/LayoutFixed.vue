<script setup>
import { useScroll } from '@vueuse/core'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import LayoutHeaderUi from './LayoutHeaderUi.vue';
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
// 纵向滚动的距离
const { y } = useScroll(window)
</script>
<template>
  <div class='layout-fixed' :class="{ show: y > 78 }">
    <div class="con-main-wrap">
      <RouterLink class="logo" to="/">
      </RouterLink>
      <LayoutHeaderUi></LayoutHeaderUi>
      <div class="right-cate">
        <RouterLink to="">专题</RouterLink>
        <RouterLink to="">分类</RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
.layout-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 333;
  border-bottom: 1px solid #e4e4e4;
  background-color: #fff;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  // 透明度 0 => 全透明
  opacity: 0;

  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .con-main-wrap {
    .flex-row;
    justify-content: space-between;

    .logo {
      width: 200px;
      height: 80px;
      background: url('@/assets/img/logo.png')no-repeat right 2px;
      background-size: 160px auto;
    }

    .right-cate {
      border-left: 1px solid var(--font-color-link);
      width: 180px;
      padding: 0 0 0 40px;

      a {
        color: var(--bg);
        margin-right: 40px;
      }
    }
  }
}
</style>