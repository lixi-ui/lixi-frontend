<template>
  <div>
    <plan/>
  </div>
</template>

<script>
import Vue from 'vue'
import plan from './plan/index.md'

export default {
  name: 'docs',
  components: {
    plan: plan
  }
}
</script>

<style lang="scss" scoped>

</style>
