<template>
  <div class="container">
    <Header />
    <AddTask />
    <Tasks />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      name: "Malcolm",
      thisYear: new Date().getFullYear(),
    };
  },
  // async created() {
  //   const getTasks = async () => {
  //     const tasksFromServer = await this.fetchTasks();
  //     this.setTasks(tasksFromServer);
  //   };

  //   getTasks(); //run function
  // },
  // computed: {
  //   name() {
  //     return this.data
  //   }
  // },
  methods: {
    //Fetch Task
    // fetchTasks: async () => {
    //   //async function
    //   // local json server
    //   // const res = await fetch('http://localhost:5000/tasks');
    //   // myjsonserver after uploading to github
    //   const res = await fetch(
    //     "https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks"
    //   );
    //   const data = await res.json();
    //   return data;
    // },
    //Add Task
    // addTask: async (task) => {
    //   //array return from addtask component as task
    //   const res = await fetch(
    //     `https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks/`,
    //     {
    //       //onAdd post data to httpreq
    //       method: "POST",
    //       headers: {
    //         "Content-type": "application/json", //in json mode
    //       },
    //       body: JSON.stringify(task), //in json
    //     }
    //   );
    //   const data = await res.json(); //need await or else frontend wont update data
    //   setTasks([...tasks, data]);
    //   // const id = Math.floor(Math.random() * 10000) + 1;
    //   // const newTask = { id, ...task };
    //   // setTasks([...tasks, newTask]); //return new array of task
    // },
    // //Delete Task
    // deleteTask: async (id) => {
    //   await fetch(
    //     `https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks/${id}`,
    //     {
    //       method: "DELETE",
    //     }
    //   );
    //   setTasks(
    //     tasks.filter((task) => {
    //       //every press, one item filtered (array)
    //       return task.id !== id;
    //     })
    //   );
    // },
    // //Toggle Reminder
    // toggleReminder: async (id) => {
    //   const taskToToggle = await fetchTask(id); //get that one task from API
    //   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }; //change it, with full content for later update
    //   const res = await fetch(
    //     `https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks/${id}`,
    //     {
    //       method: "PUT", //update it
    //       header: {
    //         "Content-type": "application/json",
    //       },
    //       body: JSON.stringify(updTask),
    //     }
    //   );
    //   const data = await res.json(); //get it's new updated data
    //   setTasks(
    //     tasks.map((task) => {
    //       //change state if id (updated task) if match
    //       return task.id === id ? { ...task, reminder: !data.reminder } : task;
    //     })
    //   );
    // },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}

.form-control-check label {
  /* flex: 1; */
}

.form-control-check input {
  /* flex: 2; */
  height: 20px;
  width: 20px;
  margin-left: 1rem;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>
