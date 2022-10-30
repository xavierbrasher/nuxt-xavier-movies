<template>
    <div>
        <form v-if="!nameInputed" @submit="submitName">
            <input
                class="input input-bordered w-full max-w-xs"
                v-model="newName"
                placeholder="Your Name"
            />
            <button type="submit" class="btn">Submit</button>
        </form>
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
