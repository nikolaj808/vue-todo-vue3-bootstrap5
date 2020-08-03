<template>
    <div class="my-5 px-5">
        <input type="text" class="form-control-lg" placeholder="Enter a todo item.." aria-label="Todo item" aria-describedby="addTodo" v-on:keyup.enter="addTodo" v-model="todoInput">
        <br>
        <button class="btn btn-primary bg-gradient mt-2" type="button" id="addTodo" @click="addTodo">Add todo</button>
        <br>
        <button v-if="!allDone" class="btn btn-success bg-gradient mx-1 mt-2" @click="markAllDone">Mark all done</button>
        <button v-if="allDone" class="btn btn-dark bg-gradient mx-1 mt-2" @click="markAllUndone">Mark all undone</button>
        <div class="btn-group dropright">
            <button type="button" class="btn btn-info bg-gradient dropdown-toggle mx-1 mt-2" data-toggle="dropdown" aria-expanded="false">
                Filter
            </button>
            <ul class="dropdown-menu">
                <li><h6 class="dropdown-header">Filter by done status</h6></li>
                <li><button class="dropdown-item">Done</button></li>
                <li><button class="dropdown-item">Undone</button></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoInput: '',
        }
    },
    computed: {
        allDone() {
            let todos = this.$store.state.todos;
            if (todos.length === 0) {
                return false;
            }
            let result = true;
            for (let i = 0; i < todos.length; i++) {
                if (!todos[i].done) {
                    result = false;
                    break;
                }
            }
            return result;
        },
    },
    methods: {
        addTodo() {
            if (this.todoInput) {
                this.$store.commit('addTodo', this.todoInput);
            }
            this.todoInput = '';
        },
        markAllDone() {
            this.$store.commit('markAllDone');
        },
        markAllUndone() {
            this.$store.commit('markAllUndone');
        },
    },
}
</script>

<style scoped>
::-webkit-input-placeholder {
   text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;  
}

:-ms-input-placeholder {  
   text-align: center; 
}
</style>