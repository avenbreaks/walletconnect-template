<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<script setup lang="ts">
  import { useWeb3Modal } from '@web3modal/ethers/vue'
  // 4. Use modal composable
  const modal = useWeb3Modal()
</script>

<template>
  <button @click="modal.open()">Open Connect Modal</button>
  <button @click="modal.open({ view: 'Networks' })">Open Network Modal</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
