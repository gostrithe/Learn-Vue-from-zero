<template>
    <div class="inputer">
        <input v-model="inputValue" type="text" placeholder="敢不敢立下你的小flag!">
        <button @click="onBtnClick">Add</button>
    </div>
</template>

<script>
export default {
    emits: ['userSubmit'],
    data() {
        return {
            inputValue: ''
        };
    },
    methods: {
        onBtnClick() {
            this.$emit('userSubmit', this.inputValue);
            this.inputValue = ''
        }
    },
};
</script>

<style lang="scss" scoped>
.inputer {
    display: flex;
    padding: 0.5vw 1vw 0.5vw 4vw;
    border-bottom: 1px solid #000;

    input {
        flex: 1;
        padding: 2px 8px;
    }

    button {
        flex: 0;
        margin-left: 1vw;
        padding: 0 1vw;
    }
}
</style>