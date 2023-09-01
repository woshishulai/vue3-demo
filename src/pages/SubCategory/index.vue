<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getSubCateList } from "@/request/api"
const props = defineProps({})
const router = useRoute()
console.log(router.params.id);
const data = ref({
  categoryId: router.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const list = ref([])
const getList = async () => {
  let res = await getSubCateList(data.value)
  list.value = res.result

}

getList()
onMounted(() => { })

</script>
<template>
  <div class='wrap'>
    <div class="con-main-wrap">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <RouterLink to="/">首页</RouterLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <RouterLink active-class="active" to="/category/1005000">居家</RouterLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <RouterLink active-class="active" to="">艺术藏品</RouterLink>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="最新商品">
          <div class="goods-list">
            <div v-for="i in list.items" :key="i.id" class="goods-item">
              <img :src="i.picture" alt="">
              <div class="title">{{ i.name }}</div>
              <div class="label">{{ i.desc }}</div>
              <span>¥{{ i.price }}</span>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="最高人气" force-render>最高人气</a-tab-pane>
        <a-tab-pane key="3" tab="评论最多">评论最多</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<style scoped lang='less'>
.wrap {
  .con-main-wrap {
    :deep(.ant-breadcrumb) {
      padding: 10px 0;

      .active {
        color: red;
      }
    }

    .goods-list {
      .flex-row;
      justify-content: space-between;
      flex-wrap: wrap;

      .goods-item {
        width: 160px;
        padding: 20px 30px;
        .flex-col;
        transition: all .5s;

        img {
          width: 160px;
          height: 160px
        }

        .title {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
          word-break: break-all;
          -webkit-box-orient: vertical;
        }

        .label {
          color: #999;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
          word-break: break-all;
          -webkit-box-orient: vertical;
          margin: 10px 0;
        }

        span {
          color: red;
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }

}
</style>