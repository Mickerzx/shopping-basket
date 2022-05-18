<template>
  <div class="card-container">
    <div class="card" v-for="product in productState.products" :key="product.id">
      <a-card hoverable style="width: 250px">
        <template #cover>
          <img
              alt="example"
              :src="product.cover"
          />
        </template>
        <a-card-meta>
          <template #title>
            <span class="title">{{ product.title }}</span>
          </template>
          <template #description>
            <span class="description">{{ product.description }}</span>
          </template>
        </a-card-meta>
        <span class="price">{{ product.price }} p</span>
        <div class="footer">
          <div class="controls">
            <a-button style="width: 30px" class="button" size="small" type="primary" @click.stop="addHandler(product)">
              <template #icon>
                <plus-outlined/>
              </template>
            </a-button>
            <div class="quantity">{{product.quantity}}
            </div>
            <a-button style="width: 30px" size="small" type="primary" @click.stop="removeHandler(product)">
              <minus-outlined/>
            </a-button>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {MinusOutlined, PlusOutlined} from '@ant-design/icons-vue';
import {defineEmits, defineProps, onMounted, reactive} from "vue";
import {mockProductsData} from "@/mock/mockProducts";


const productState = reactive<any>({
  products: [],
})

const emit = defineEmits([
  'add-handler',
  'delete-handler',
]);

const addHandler = (product: any) => {
  let count = product.quantity
  productState.products = productState.products.map((item: any) => {
    if (item.id === product.id && product.quantity !== 5) {
      count++
      return {...item, quantity: count}
    } else {
      return item
    }
  })
  emit("add-handler", {...product,quantity:count})
}

const removeHandler = (product: any) => {
  let count = product.quantity
  productState.products = productState.products.map((item: any) => {
    if (item.id === product.id && product.quantity !== 0) {
      count--
      return {...item, quantity: count}
    } else {
      return item
    }
  })
  emit("delete-handler",{...product,quantity:count})
}

onMounted(() => {
  productState.products = mockProductsData
})


</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  margin: 10px 0;
}

.title {
  color: var(--blue);
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 15px;
}

.price {
  display: inline-block;
  margin-bottom: 15px;
}

.footer {
  display: flex;
}

.controls {
  display: flex;
  align-items: center;
  margin: auto;
}

.quantity {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 30px;
  margin: 0 5px;
}

.button {
  width: 30px;
}
</style>
