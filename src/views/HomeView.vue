<template>
  <div class="home">
    <a-card hoverable style="width: 250px">
      <template #cover>
        <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </template>
      <a-card-meta>
        <template #title>
          <span class="title">Apple Cinema 30</span>
        </template>
        <template #description>
          <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at eveniet natus neque praesentium quibusdam?</span>
        </template>
      </a-card-meta>
      <span class="price">110.00руб.</span>
      <div class="footer">
        <div class="controls">
          <a-button style="width: 30px" class="button" size="small" type="primary" @click.stop="addHandler">
            <template #icon>
              <plus-outlined/>
            </template>
          </a-button>
          <div class="quantity">
            {{ quantity }}
          </div>
          <a-button style="width: 30px" size="small" type="primary" @click.stop="removeHandler">
            <minus-outlined/>
          </a-button>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import {PlusOutlined, MinusOutlined} from '@ant-design/icons-vue';
import {ref} from "vue";

const quantity = ref(0)

const addHandler = () => {
  if (quantity.value !== 99) {
    quantity.value += 1;
  }
}

const removeHandler = () => {
  if (quantity.value !== 0) {
    quantity.value -= 1;
  }
}

</script>

<style scoped>
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
