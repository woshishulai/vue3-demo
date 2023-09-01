<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
import { getSpecialList } from '@/request/api';
const list = ref([])
const getList = async () => {
  let res = await getSpecialList()
  console.log(res);
  list.value = res.result;
}
getList()
console.log(list);

</script>
<template>
  <div class='home-special'>
    <div class="title">
      <h5>
        最新专题
      </h5>
      <!-- 查看全部 -->
      <div class="info-next">
        <span>查看全部<i class="iconfont icon-angle-right "></i></span>
      </div>
    </div>
    <div class="card-list">
      <div class="card-item" v-for="item in  list " :key="item.id">
        <div class="img-bg" :style="{ backgroundImage: `url(${item.detailsUrl})` }">
          <span></span>
          <div class="text-wrap">
            <p>
              <span class="item-title">{{ item.title }}</span>
              <span class="item-label">{{ item.summary }}</span>
            </p>
            <button>¥{{ item.lowestPrice }}起</button>
          </div>
        </div>
        <div class="text-wrap">
          <div>
            <span><i class="iconfont icon-hart1"></i>{{ item.collectNum }}</span>
            <span><i class="iconfont icon-see"></i>{{ item.viewNum }}</span>
          </div>
          <span><i class="iconfont icon-message"></i>{{ item.replyNum }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
.home-special {
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

  .card-list {
    .flex-row;
    gap: 5px;
    justify-content: space-between;

    .card-item {
      width: 33%;

      transition: all .5s;

      .img-bg {
        width: 100%;
        height: 288px;
        background-size: 100% 100%;
        .flex-col;
        justify-content: space-between;

        .text-wrap {
          padding: 16px 10px;
          .flex-row;
          justify-content: space-between;
          color: #fff;

          p {
            width: 80%;

            .item-title {
              font-size: 22px;
              width: 80%;
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 1;
              text-overflow: ellipsis;
              word-break: break-all;
              -webkit-box-orient: vertical;

            }

            .item-label {
              width: 60%;
              font-size: 18px;
              color: #eee;
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 1;
              text-overflow: ellipsis;
              word-break: break-all;
              -webkit-box-orient: vertical;
              margin-top: 10px;
            }
          }

          button {
            color: red;
            font-size: 14px;
            padding: 5px 10px;
            background: transparent;
            background-color: #fff;
            border: none;
          }
        }
      }

      .text-wrap {
        padding: 20px 10px;
        .flex-row;
        justify-content: space-between;

        i {
          color: #999;
          margin-right: 5px;
        }

        div {
          .flex-row;
          gap: 30px;
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