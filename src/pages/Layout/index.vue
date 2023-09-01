<script setup>
import LayoutNav from "@/pages/Layout/item/LayoutNav.vue"
import LayoutHeader from "@/pages/Layout/item/LayoutHeader.vue"
import LayoutFooter from "./item/LayoutFooter.vue"
import LayoutFixed from "./item/LayoutFixed.vue"
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='layout'>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <LayoutFixed></LayoutFixed>
    <RouterView></RouterView>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
<style scoped lang='less'></style>