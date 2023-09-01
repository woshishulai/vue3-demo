<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
import { useCategory } from "@/store/module/category"
const cateStore = useCategory()
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='home-category'>
    <div class="menu">
      <div class="nav-item" v-for="item in cateStore.cateList" :key="item.id">
        <h5>{{ item.name }}</h5>
        <span v-for="op in item.children.slice(0, 2)">{{ op.name }}</span>
        <div class="layer">
          <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
          <div class="card-list">
            <div class="card-item" v-for="i in item.goods" :key="i.name">
              <img :src="i.picture" alt="">
              <div class="text-wrap">
                <div class="title">{{ i.name }}</div>
                <p class="label">{{ i.desc }}</p>
                <p class="price">¥{{ i.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
.home-category {
  position: relative;
  z-index: 99;

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    height: 500px;
    width: 250px;

    color: #fff;


    .nav-item {
      padding-left: 40px;
      .flex-row;
      justify-content: flex-start;
      gap: 4px;
      height: 56px;

      &:hover {
        background-color: var(--font-color-link);

        .layer {
          display: block;
        }
      }

      h5 {
        font-size: 16px;
      }

      span {
        margin-top: 3px;
        font-size: 14px;
      }
    }

    .layer {
      position: absolute;
      top: 0;
      left: 250px;
      width: 960px;
      padding: 0 15px;
      background: rgba(255, 255, 255, 0.8);
      color: #000;
      display: none;

      h3 {
        font-size: 22px;
        line-height: 80px;
        color: #000;

        span {
          font-size: 18px;
          color: #666;
        }
      }

      .card-list {
        .flex-row;
        flex-wrap: wrap;
        gap: 15px;

        .card-item {
          .flex-row;
          justify-content: flex-start;
          padding: 10px;
          width: 30%;
          gap: 10px;
          background-color: #fff;

          img {
            height: 95px;
            width: 95px;
          }

          .text-wrap {
            .title {
              font-size: 16px;
              color: #666;
              .ellipsis2;
            }

            .label {
              color: #999;
              margin: 10px 0;
              .ellipsis2;
            }

            .price {
              color: red;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>