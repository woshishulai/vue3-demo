import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useHomeCount = defineStore('category', () => {
  //定义state的数据 
  const count =ref(0)
  //action
  const addCount=async()=>{
    console.log(1111);
    count.value=count.value+1
  }
  //gertters


  return {
    count,addCount
  }
})
