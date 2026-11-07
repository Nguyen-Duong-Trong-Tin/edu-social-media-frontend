import { createStore } from "vuex";
import settingSidebarLinks from "./modules/settingSidebarLinks";
import users from "./modules/users";
import groupTopics from "./modules/groupTopics";
import groups from "./modules/groups";
import groupArticles from "./modules/groupArticles";
import userArticles from "./modules/userArticles";
import groupTasks from "./modules/groupTasks";
import groupTaskSubmissions from "./modules/groupTaskSubmissions";
import chatRooms from "./modules/chatRooms";
import chatMessages from "./modules/chatMessages";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    settingSidebarLinks,
    users,
    groupTopics,
    groups,
    groupArticles,
    userArticles,
    groupTasks,
    groupTaskSubmissions,
    chatRooms,
    chatMessages
  },
});
