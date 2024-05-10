<template>
    <div class="min-h-screen">
        <div class="max-w-[400px] rounded-2xl bg-orange-600 p-8 mx-auto mt-10">
            <h2 class="text-3xl text-center font-semibold text-white mb-6">Search by Date</h2>
            <form class="flex flex-col gap-4" @submit.prevent="getByDate(taskRequest, date)">
                <input v-model="date" type="text" placeholder="search by Date"
                    class="limit px-4 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white text-gray-900">
                <input v-model="taskRequest.limit" type="number" placeholder="Limit"
                    class="limit px-4 py-2 text-center border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white text-gray-900">
                <button type="submit"
                    class="bg-white text-gray-900 font-semibold py-2 px-4 rounded-md transition-colors hover:bg-gray-200">Click</button>
            </form>
        </div>
        <div class="mx auto flex flex-col gap-3 mt-5">
            <router-link class="mx-auto border-2 rounded-lg bg-orange-700 text-white p-3" :to="{ name: 'addTask_page' }">Add
                Task</router-link>
            <router-link class="mx-auto border-2 rounded-lg bg-orange-700 text-white p-3"
                :to="{ name: 'editTask_page' }">Edit
                Task</router-link>
        </div>
        <div class="max-w-[600px] mx-auto mt-10 wrapper bg-gradient-to-r from-purple-400 to-blue-500 p-6 rounded-lg">
            <h1 class="text-3xl text-center font-semibold text-white mb-6">All tasks</h1>
            <div class="allTasks">
                <div v-for="task in getTasks" :key="task.id"
                    class="task flex mt-5 items-center justify-between w-full max-w-xl px-4 py-2 border border-gray-300 rounded-lg shadow-md bg-white">
                    <div class="task__title bg-blue-200 px-4 py-2 rounded-lg">{{ task.title }}</div>
                    <div class="task__desc w-3/5 px-4">{{ task.description }}</div>
                    <div class="task__checkbox flex gap-4 items-center">
                        <input @input="isChecked(taskRequest, task.id)" type="checkbox" :checked="task.done"
                            class="form-checkbox h-4 w-4 text-indigo-600">
                        <button @click="deleteTask(task.id)"
                            class="button-24 p-3 text-white bg-red-500 border rounded-md">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            taskRequest: {
                page: 1,
                limit: 50,
            },
            date: "",
        };
    },
    name: "Tasks",
    created() {
        this.loadTasks(this.taskRequest);
    },
    computed: {
        ...mapGetters(["getTasks"]),
    },
    methods: {
        ...mapActions(["loadTasks", "deleteTask", "doneTask", "getTaskByDate"]),
        getByDate(taskRequest, Date) {
            let newTaskRequest = {
                page: taskRequest.page,
                limit: taskRequest.limit,
                date: Date,
            };
            this.getTaskByDate(newTaskRequest);
        },
        isChecked(taskRequest, Id) {
            let isDoneTaskRequest = {
                page: taskRequest.page,
                limit: taskRequest.limit,
                id: Id,
            };
            this.doneTask(isDoneTaskRequest);
        },
        deleteTask(Id) {
            let taskRequest = {
                page: this.taskRequest.page,
                limit: this.taskRequest.limit,
                id: Id,
            };
            this.$store.dispatch('deleteTask', taskRequest);
        }
    },
};
</script>
  
<style scoped></style>