<template>
  <form class='add-form' @submit="onSubmit">
      <div class='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          v-model="text"
        />
      </div>
      <div class='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          v-model="day"
        />
      </div>
      <div class='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          v-model="reminder"
        />
      </div>

      <input type='submit' value='Save Task' class='btn btn-block' />
    </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    ...mapActions(["addTask"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTask({text: this.text, day: this.day, reminder: this.reminder});
      this.text= "";
      this.day= "";
      this.reminder= false;
    }
  },
};
</script>

<style scoped>
</style>