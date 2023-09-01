<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
const list = [
  {
    text: '请先登陆',
    icon: '',
    path: '/login'
  },
  {
    text: '免费注册',
    icon: '',
    path: ''
  },
  {
    text: '我的订单',
    icon: '',
    path: ''
  },
  {
    text: 'demo',
    icon: '',
    path: ''
  },
  {
    text: '退出登陆',
    icon: '',
    path: ''
  },
  {
    text: '我的订单',
    icon: '',
    path: ''
  },
]
const token = false
</script>
<template>
  <div class='layout-nav'>
    <div class="con-main-wrap">
      <div></div>
      <div v-if="token" class="nav-list">
        <RouterLink v-for="item in list.slice(0, 3)" :key="item.text" :to="item.path">
          <img :src="item.icon" alt="">
          <span>
            {{ item.text }}
          </span>
        </RouterLink>
      </div>
      <div v-else class="nav-list">
        <RouterLink v-for="item in list.slice(3, 6)" :key="item.text" :to="item.path">
          <img :src="item.icon" alt="">
          <span>
            {{ item.text }}
          </span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
.layout-nav {
  padding: 15px 0;
  background-color: var(--bg);

  .con-main-wrap {
    .flex-row;
    justify-content: space-between;

    .nav-list {
      .flex-row;

      a {
        padding: 0 15px;
        color: #cdcdcd;
        font-size: 14px;
        border-right: 2px solid #cdcdcd;

        &:last-child {
          border: none;
          padding-right: 0;
        }
      }
    }
  }
}
</style>