<template>
    <div>
        <Navbar class="mb-3" />
        <nuxt class="mb-12" />
        <Footer />
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
Vue.component("Navbar", Navbar);
export default {
    components: {
        Navbar,
        Footer,
    },
};
</script>
