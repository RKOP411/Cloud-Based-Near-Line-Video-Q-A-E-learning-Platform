import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Teacher/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Teacher/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Question_List_Stu from "../views/Student/Question_List_Stu.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import UserList from "../views/Admin/UserList.vue";
import MediaList from "../views/Admin/MediaList.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Chat Room",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Question List",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/question-list",
    name: "Question List",
    component: Question_List_Stu,
  }
  ,
  {
    path: "/forgetpassword",
    name: "Forget Password",
    component: ForgetPassword,
  },
  {
    path: "/userList",
    name: "UserList",
    component: UserList,
  },
  {
    path: "/mediaList",
    name: "MediaList",
    component: MediaList,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
