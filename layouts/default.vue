<template>
  <div class="relative min-h-screen">
    <NavBar />
    <nuxt class="mx-10 pb-14" />
    <BottomBar />
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue'
import BottomBar from '~/components/BottomBar.vue'

export default {
  components: { NavBar, BottomBar },
  head: {
    title: 'Xavier Movies, default title',
  },
}
</script>
