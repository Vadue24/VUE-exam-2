import {createStore} from "vuex";
import axios from "axios";
import users from "./users.js";
import tasks from './tasks.js'

export default createStore({
        modules: {
            users,
            tasks
        }
    }
)

