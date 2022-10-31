<template>
    <li class="item">
        <span>{{ todo }}</span>
        <button v-on:click="onBtnClick">Delete</button>
    </li>
</template>

<script>
export default {
    props: ['todo'],
    emits: ['userDelete'],
    methods: {
        onBtnClick() {
            this.$emit('userDelete');
        }
    },
};
</script>

<style lang="scss" scoped>
li.item {
    padding: 0.5vw 0;
    list-style: decimal;
    border-bottom: 1px dashed #000;

    button {
        float: right;
    }
}
</style>