<template>
    <div>
        <button class="rounded bg-slate-200 px-1" @click="() => count++">
            Add 1 to count: {{ count }}
        </button>
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
