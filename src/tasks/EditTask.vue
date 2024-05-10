<template>
    <div>
        <v-header />

        <v-form class="mt-10" @formSubmit="updateTasksById(taskForm)">
            <v-input v-model="taskForm.id" type="text" placeholder="id" />
            <v-input v-model="taskForm.params.title" type="text" placeholder="title" />
            <v-input v-model="taskForm.params.description" type="text" placeholder="description" />
            <v-button text="Save" />
        </v-form>
    </div>
</template>
  
  
<script>
import VForm from "../components/UI/vForm.vue";
import VInput from "../components/UI/vInput.vue";
import VButton from "../components/UI/vButton.vue";
import { mapActions, mapGetters } from 'vuex';
import VHeader from '../components/vHeader.vue'

export default {
    name: "Tasks",
    components: { VButton, VInput, VForm, VHeader },
    computed: {
        ...mapGetters(["getCurrentUser", "getTasks"])
    },
    methods: {
        ...mapActions(["loadTasks", 'updateTasksById']),
    },
    created() {
        this.loadTasks(this.taskRequest);
    },
    data() {
        return {
            taskRequest: {
                page: 1,
                limit: 50
            },
            taskForm: {
                page: 1,
                limit: 50,
                id: '',
                params: {
                    title: '',
                    description: '',
                }
            }
        };
    },
    watch: {
        "taskRequest.limit"(newVal, oldVal) {
            this.taskRequest.limit = newVal;
            this.loadTasks(this.taskRequest);
        },
        "taskRequest.page"(newVal, oldVal) {
            this.taskRequest.page = newVal;
            this.loadTasks(this.taskRequest);
        }
    }
};
</script>
  
<style scoped></style>
  