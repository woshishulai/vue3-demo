<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCategory } from "@/store/module/category"
const cateStore = useCategory()
const props = defineProps({})
onMounted(() => {
  cateStore.getCateList()
})
let queryParams = computed(() => { })
</script>
<template>
  <div class='layout-header-ui'>
    <RouterLink to="/">首页</RouterLink>
    <RouterLink active-class="active" v-for="item in cateStore.cateList" :key="item.id" :to="`/category/${item.id}`">{{
      item.name }}
    </RouterLink>
  </div>
</template>
<style scoped lang='less'>
.layout-header-ui {
  .flex-row;
  gap: 40px;
  margin: 0 40px;

  a {
    color: var(--bg);
    line-height: 32px;

    &:hover {
      color: var(--font-color-link);
      border-bottom: 1px solid var(--font-color-link);
    }
  }

  .active {
    color: var(--font-color-link);
    border-bottom: 1px solid var(--font-color-link);
  }
}
</style>