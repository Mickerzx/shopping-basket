<template>
  <a-card class="container" title="title">
    <a-row>
      <a-col :span="15">
        <product-card @add-handler="addHandler" @delete-handler="removeHandler"/>
      </a-col>
      <a-col :offset="1" :span="8">
        <div v-for="product in basketState.basket" :key="product.id">
          <div>{{ product.title }}</div>
          <div>{{ product.total }}</div>
        </div>
        {{total}}
      </a-col>
    </a-row>


  </a-card>
</template>
<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import {reactive, ref, watch} from "vue";

const basketState = reactive<any>({
  basket: []
})

const total = ref(0)


const addHandler = (product: any) => {
  const findProduct = basketState.basket.find((item: any) => item.id === product.id)
  if (findProduct) {
    basketState.basket = basketState.basket.map((item: any) => {
      if (item.id === product.id) {
        const productTotalPrice = product.quantity * product.price
        return {
          ...product, total: productTotalPrice
        }
      } else {
        return item
      }
    })
  } else {
    basketState.basket.push({...product, total: product.price})
  }

}

const removeHandler = (product: any) => {
  const findProduct = basketState.basket.find((item: any) => item.id === product.id)
  if (findProduct) {
    basketState.basket = basketState.basket.map((item: any) => {
      if (item.id === product.id && product.quantity !== 0) {
        const productTotalPrice = product.quantity * product.price
        return {
          ...product, total: productTotalPrice - product.price
        }
      } else {
        return item
      }
    })
  } else {
    basketState.basket.push({...product, total: product.price})
  }
}

watch(()=>[basketState.basket,basketState.basket.length], ([products,count])=>{
  console.log(count)
  if (count ===1){
    products.map((item:any)=>{
      total.value = item.total
    })
  } else {
    products.map((item:any,index:number)=>{
      console.log(index)
      total.value = item.total * index
    })
  }

})


</script>
<style scoped>
.container {
  margin: 20px 0;
}
</style>