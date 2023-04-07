const vm = Vue.createApp({
  data() {
    return {
      todos: ['Task One', 'Task Two', 'Task Three'],
    };
  },

  methods: {
    inverser() {
      this.todos.reverse();
    },
    ajouterNote(message) {
      this.todos.push(message);
    },
  },
});

vm.component('note', {
  props: ['content'],
  template: `
  <div class="overflow">
    <p class="new_entry"> {{ content }}</p>
  </div>`,
});

vm.component('ajout', {
  props: [],
  emits: ['nouvellenote'],
  data() {
    return {
      interne: 'Add something...',
    };
  },
  methods: {
    enregistrementNote() {
      this.$emit('nouvellenote', this.interne);
      this.interne = '';
    },
  },
  template: `
        <input type="text" v-model="interne" />
        <a href="#" @click="enregistrementNote" v-if="interne != '' ">Add to List</a>
        <p class="result">Result: {{ interne }}</p>
    `,
});

vm.mount('#app');
