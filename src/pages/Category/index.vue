<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
const router = useRoute()
console.log(router.params.id);
import { getBannerList, getCateList } from "@/request/api"
const categoryList = ref([])
const props = defineProps({})
const bannerList = ref([])
const route = useRouter()
const getBanner = async () => {
  const res = await getBannerList()
  const ress = await getCateList(`${router.params.id}`)
  console.log(res, 1111111, ress)
  bannerList.value = res.result
  categoryList.value = ress.result
}
//监听路由变化 刷新页面 1
// 监听路由变化，在路由变化前刷新页面
// 

// 监听路由变化 发起请求 此页面不刷新
watch(() => router.params.id, (newId, oldId) => {
  if (newId !== oldId) {
    getBanner()
  }
})



onMounted(() => getBanner())
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
      </a-breadcrumb>
      <a-carousel autoplay>
        <img v-for="item in bannerList" :src="item.imgUrl" alt="">
      </a-carousel>
      <div class="cate-gory">
        <h3>全部分类</h3>
        <div class="cate-list">
          <div class="cate-item" @click="route.push(`/sub/category/${item.id}`)" v-for="item in categoryList.children"
            :key="item">
            <img :src="item.picture" alt="">
            <p class="label">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class="info-wrap">
        <div class="info-list" v-for="item in categoryList.children" :key="item">
          <h5>{{ item.name }}</h5>
          <div class="info">
            <div class="info-item" v-for="i in item.goods" :key="i">
              <img :src="i.picture" alt="">
              <div class="title">{{ i.name }}</div>
              <div class="label">{{ i.desc }}</div>
              <span>¥{{ i.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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

:deep(.ant-breadcrumb) {
  padding: 10px 0;
}

.wrap {
  .con-main-wrap {
    .cate-gory {
      padding: 30px 0;

      h3 {
        text-align: center;
        font-size: 30px;
      }

      .cate-list {
        margin-top: 30px;
        .flex-row;
        justify-content: space-around;

        .cate-item {
          text-align: center;

          &:hover {
            color: red;
          }

          img {
            width: 100px;
            height: 100px;
            margin: 0 0 20px 0;
          }
        }
      }
    }

    .info-wrap {


      .info-list {
        h5 {
          font-size: 30px;
          margin: 30px 0;
        }

        .flex-col;

        .info {
          .flex-row;
          gap: 4px;
        }

        .info-item {
          .flex-col;
          gap: 10px;
          flex: 1;
          text-align: center;
          padding: 0 0 10px 0;

          img {
            width: 100%;
          }

          .title {
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 1;
            text-overflow: ellipsis;
            word-break: break-all;
            -webkit-box-orient: vertical;
            font-size: 18px;
            width: 80%;
          }

          .label {
            width: 80%;
            font-size: 14px;
            color: #999;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 1;
            text-overflow: ellipsis;
            word-break: break-all;
            -webkit-box-orient: vertical;
          }

          span {
            color: red;
            font-size: 22px;

          }
        }
      }
    }
  }

  .active {
    color: red;
  }
}
</style>