<template>
    <div>
        <input
            v-if="!nameInputed"
            class="pl-1 mt-1 bg-slate-200 border-2 rounded-sm border-slate-300 w-28"
            v-model="newName"
            placeholder="Your Name"
        />
        <button
            @click="submitName"
            class="px-1 ml-1 border-2 rounded-xl bg-slate-200"
            v-if="!nameInputed"
        >
            Submit
        </button>
        <h1>
            Hello, your name is
            {{ name || "... wait you forgot what's your name" }}
        </h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nameInputed: false,
            newName: "",
            name: "",
        };
    },
    methods: {
        submitName() {
            if (this.newName == "") return;
            this.nameInputed = true;
            this.name = this.newName;
        },
    },
};
</script>
