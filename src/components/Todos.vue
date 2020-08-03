<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5 py-5">
        <div class="col" v-for="todo in todos" :key="todo.id">
            <Todo :todo="todo" />
        </div>
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
    components: {
        Todo,
    },
    computed: {
        todos: {
            get() {
                return this.$store.state.todos;
            },
            set(value) {
                this.$store.commit('updateTodos', value);
            }
        },
    },
}
</script>