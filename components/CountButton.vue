<template>
    <div>
        <h3 class="text-xl">Count: {{ count }}</h3>
        <button class="btn" @click="() => count++">Add 1 to count</button>
        <button class="btn" @click="() => count--">Remove 1 to count</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
};
</script>
