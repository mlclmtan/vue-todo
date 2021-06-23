<template>
  <div>
    <div
      class="task"
      v-for="task in allTasks"
      :key="task.id"
      @dblclick="onDblClick(task)"
      :class="task.reminder ? 'reminder' : ''"
    >
      <h3>
        {{ task.text }}
        <font-awesome-icon
          icon="times"
          style="color: red; cursor: pointer"
          @click="deleteTask(task.id)"
        />
      </h3>
      <p>{{ task.day }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);

export default {
  components: {
    FontAwesomeIcon,
  },
  methods: {
    ...mapActions(["fetchTasks", "deleteTask", "updateTask"]),
    onDblClick(task) {
      const updTask = {
        id: task.id,
        text: task.text,
        day: task.day,
        reminder: !task.reminder,
      };
      this.updateTask(updTask);
    },
  },
  computed: mapGetters(["allTasks"]),
  created() {
    this.fetchTasks();
  },
};
</script>

<style scoped>
</style>