<template>
  <div class="home">
    <Form />
    <hr>
    <Todos />
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import Todos from '@/components/Todos.vue';

export default {
  name: 'Home',
  components: {
    Form,
    Todos,
  },
}
</script>