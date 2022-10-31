<template>
    <div class="wrapper">
        <!-- 进入插槽之后，插槽内容替代slot标签的位置 -->
        <slot></slot>

        <UserInputer @user-submit="onUserSubmit"></UserInputer>
        <DataLister :todos="todos" @deleteTodo="onDeleteTodo"></DataLister>
    </div>
</template>

<script>
import UserInputer from './todolist/UserInputer.vue';
import DataLister from './todolist/DataLister.vue';

export default {
    components: {
        UserInputer,
        DataLister
    },
    data() {
        return {
            todos: []
        };
    },
    methods: {
        onUserSubmit(inputValue) {
            this.todos.push(inputValue);
        },
        onDeleteTodo(whichOne) {
            this.todos = this.todos.filter((todo, index) => index !== whichOne);
        }
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    width: 30vw;
    min-width: min-content;
    border: 1px solid #000;
    text-align: center;
}
</style>