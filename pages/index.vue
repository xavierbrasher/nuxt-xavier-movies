<template>
    <div class="mx-36">
        <h1 class="text-3xl font-bold mb-2">Learning Vue</h1>
        <h2 class="text-2xl">Handling Clicks And State</h2>
        <CountButton class="mb-2" />
        <h2 class="text-2xl">Handling Input</h2>
        <Language />
        <Language />
    </div>
</template>

<script>
import Vue from "vue";
import Language from "~/components/Language.vue";
import CountButton from "~/components/CountButton.vue";

export default Vue.extend({
    components: {
        Language,
        CountButton,
    },
    head: {
        title: "XMOVIES Home",
    },
});
</script>
