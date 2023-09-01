<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const props = defineProps({
  about: {
    list: {
      type: Array,
      required: true,
      default: [],
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    label: {
      type: String,
      required: true,
      default: ''
    },
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    price: {
      type: Boolean,
      required: true,
      default: false
    }
  }
});

console.log(props.about);
// const list = props.about.list
// const info = props.about.label.split('+')
// const price = props.about.price || undefined
let list = [];
let info = [];
let price;

watchEffect(() => {
  list = props.about.list;
  info = props.about.label.split('+');
  price = props.about.price || undefined;
});
console.log(list);
console.log('woshi item1');
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='con-main-wrap'>
    <div class="title">
      <h5>{{ props.about.title }} <span v-for="item in info" :key="item">{{ item }}</span></h5>
      <!-- 上一页下一页 -->
      <div class="right-next" v-if="props.about.show == true">
        <span><i class=" iconfont icon-angle-left"></i></span>
        <span><i class="iconfont icon-angle-right "></i></span>
      </div>
      <!-- 查看全部 -->
      <div class="info-next" v-if="props.about.show == false">
        <span>查看全部<i class="iconfont icon-angle-right "></i></span>
      </div>
    </div>
    <div class="goods-list">
      <div class="goods-item" v-for="item in list" :key="item" @click="router.push(`/details/${item.id}`)">

        <img :src="item.picture" alt="">
        <div class="text-wrap" v-if="!price">
          <div class="title">{{ item.title }}</div>
          <span>{{ item.alt }}</span>
        </div>
        <div class="price-wrap" v-else>
          <div class="title">{{ item.name }}</div>
          <span>¥{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
.con-main-wrap {
  .title {
    .flex-row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 10px;
    padding: 40px 0;

    h5 {
      font-size: 32px;

      span {
        color: #999;
        font-size: 16px;
        margin: 0 10px;
      }
    }

    .right-next {
      width: 70px;
      .flex-row;
      justify-content: space-between;
      margin-right: 6px;

      span {
        padding: 2px 4px;
        background: #999;

        i {
          color: #fff;
          font-size: 12px;

        }

        &:last-child {
          background: var(--font-color-link);
        }
      }

    }

    .info-next {
      span {
        color: #999;

      }
    }
  }

  .goods-list {
    .flex-row;
    gap: 4px;

    .goods-item {
      flex: 1;
      .flex-col;
      transition: all .5s;

      img {
        width: 100%;
        height: 306px;
      }

      .text-wrap {
        .flex-col;

        .title {
          margin-top: 12px;
          padding: 0;
          font-size: 22px;
        }

        span {
          font-size: 18px;
          color: #999;
          margin: 12px 0;
        }
      }

      .price-wrap {
        .flex-col;
        background: #f0f9f4;

        .title {
          margin-top: 12px;
          padding: 0 10px;
          font-size: 20px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
          word-break: break-all;
          -webkit-box-orient: vertical;
        }

        span {
          margin: 12px 0;
          color: red;
          font-size: 22px;
          font-weight: 700;
        }
      }

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }
    }
  }
}
</style>
