import axios from 'axios';

const state = {
    tasks: [],
    idCount: 3,
};

const getters = {
    allTasks: state => state.tasks,
    currentId: state => state.idCount,
};

const actions = {
    async fetchTasks({ commit }) {
        const response = await axios.get(
            'https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks'
        );

        commit('setTasks', response.data);
    },
    async addTask({ commit, getters }, allInput) {
        const response = await axios.post(
            'https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks',
            allInput
        );

        commit('newTask', { ...response.data, id: getters.currentId });
        commit('increaseId');
    },
    async deleteTask({ commit }, id) {
        if (id > 2) alert("Sorry, it's not possible to update/delete your added data as the API server is fake. You may try on the default data");
        await axios.delete(`https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks/${id}`);

        commit('removeTask', id);
    },
    async updateTask({ commit }, updTask) {
        if (updTask.id > 2) alert("Sorry, it's not possible to update/delete your added data as the API server is fake. You may try on the default data");
        const response = await axios.put(
            `https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks/${updTask.id}`,
            updTask
        );

        console.log(response.data);

        commit('updateTask', response.data);
    }
};

const mutations = {
    setTasks: (state, tasks) => (state.tasks = tasks),
    increaseId: (state) => (state.idCount++),
    newTask: (state, task) => state.tasks.unshift(task),
    removeTask: (state, id) =>
        (state.tasks = state.tasks.filter(task => task.id !== id)),
    updateTask: (state, updTask) => {
        const index = state.tasks.findIndex(task => task.id === updTask.id);
        if (index !== -1) {
            state.tasks.splice(index, 1, updTask);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};