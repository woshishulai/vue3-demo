import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryList} from "@/request/api"
export const useCategory = defineStore('category', () => {
  //定义state的数据 
  const cateList = ref([])
  //action
  const getCateList=async()=>{
    let res = await getCategoryList()
    cateList.value=res.result;
    console.log(cateList.value);
  }
  //gertters


  return {
    cateList,getCateList
  }
})