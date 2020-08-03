<template>
    <div class="card h-100" :style="doneStyleBackground">
        <div class="card-body">
            <h5 v-if="!todo.editing" class="card-title" :style="doneStyleText">{{ todo.title }}</h5>
            <input v-if="todo.editing" class="card-title form-control" placeholder="Todo title" v-on:keyup.enter="doneEditing" v-model="todo.title">
            <p v-if="!todo.editing" class="card-text" :style="doneStyleText">{{ todo.description }}</p>
            <input v-if="todo.editing" class="card-title form-control" placeholder="Todo description" v-on:keyup.enter="doneEditing" v-model="todo.description">
            <button v-if="!todo.editing && !todo.done" class="btn btn-success mx-1" @click="markAsDone">
                <img src="@/assets/done_icon.png" alt="Mark todo as done">
            </button>
            <button v-if="!todo.editing && todo.done" class="btn btn-danger mx-1" @click="markAsUndone">
                <img src="@/assets/undone_icon.png" alt="Mark todo as undone">
            </button>
            <button v-if="!todo.editing" class="btn btn-secondary mx-1" @click="editTodo">
                <img src="@/assets/edit_icon.png" alt="Edit todo">
            </button>
            <button v-if="!todo.editing" class="btn btn-danger mx-1" @click="deleteTodo">
                <img src="@/assets/delete_icon.png" alt="Delete todo">
            </button>
            <button v-if="todo.editing" class="btn btn-success mx-1" @click="doneEditing">
                <img src="@/assets/done_icon.png" alt="Done editing">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        doneStyleBackground() {
            return [ this.todo.done ? { 'background-color': '#8B9299' } : { 'background-color': 'inherit' } ]
        },
        doneStyleText() {
            return [ this.todo.done ? { 'text-decoration': 'line-through' } : { 'text-decoration': 'none' } ]
        },
    },
    methods: {
        markAsDone() {
            this.$store.commit('markAsDone', this.todo.id);
        },
        markAsUndone() {
            this.$store.commit('markAsUndone', this.todo.id);
        },
        editTodo() {
            this.$store.commit('editTodo', this.todo.id);
        },
        doneEditing() {
            this.$store.commit('doneEditing', this.todo);
        },
        deleteTodo() {
            this.$store.commit('deleteTodo', this.todo.id);
        },
    },
    props: {
        todo: Object,
    },
};
</script>