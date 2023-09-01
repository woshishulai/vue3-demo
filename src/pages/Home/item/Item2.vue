<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: []
  }
})
console.log(props.list, '我是item2');


onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='con-main-wrap'>
    <div class="cate-item" v-for="item in props.list">
      <div class="title">
        <h5>
          {{ item.name }}
        </h5>
        <!-- 查看全部 -->
        <div class="info-next">
          <span>查看全部<i class="iconfont icon-angle-right "></i></span>
        </div>
      </div>
      <div class="cen-wrap">
        <div class="left">
          <img :src="item.picture" alt="">
          <p class="label">
            <span>{{ item.name }}馆</span>
            <span>{{ item.saleInfo }}</span>
          </p>
        </div>
        <div class="right-wrap">
          <div class="card-list">
            <div class="card-item" v-for="i in item.goods">
              <img :src="i.picture" alt="">
              <div class="title">{{ i.name }}</div>
              <p class="label">{{ i.desc }}</p>
              <span>${{ i.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
.con-main-wrap {
  .title {
    .flex-row;
    justify-content: space-between;
    padding: 40px 0;

    h5 {
      font-size: 32px;
    }

    .info-next {
      span {
        color: #999;

      }
    }
  }

  .cen-wrap {
    .flex-row;
    gap: 10px;

    .left {
      position: relative;

      img {
        width: 240px;
        height: 610px;
        object-fit: cover;
      }

      .label {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        color: #fff;

        span {
          background: rgba(0, 0, 0, .9);
          font-size: 14px;
          padding: 16px 20px;

          &:last-child {
            background: rgba(0, 0, 0, .7);
          }
        }
      }
    }

    .right-wrap {
      .card-list {
        .flex-row;
        flex-wrap: wrap;
        gap: 30px;
        height: 610px;

        .card-item {
          width: 16%;
          padding: 10px 30px;
          .flex-col;
          gap: 10px;


          img {
            width: 160px;
            height: 160px;
          }

          .title {
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            word-break: break-all;
            -webkit-box-orient: vertical;
            line-height: 20px;
            padding: 0;

          }

          .label {
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 1;
            text-overflow: ellipsis;
            word-break: break-all;
            -webkit-box-orient: vertical;

            color: #999;
          }

          span {

            color: red;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>