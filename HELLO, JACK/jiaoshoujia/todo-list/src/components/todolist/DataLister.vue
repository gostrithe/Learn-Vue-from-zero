<template>
    <div>
        <ul class="items">
            <TodoItem v-for="(todo, index) in todos" :todo="todo" @userDelete="onUserDelete(index)" />
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    components: { TodoItem },
    props: ['todos'],
    emits: ['deleteTodo'],
    methods: {
        onUserDelete(index) {
            this.$emit('deleteTodo', index);
        }
    },
};
</script>

<style lang="scss" scoped>
.items {
    padding: 0 1.5rem 1.5rem;
}
</style>