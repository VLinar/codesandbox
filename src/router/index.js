import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/child1",
      name: "Hello",
      component: () => import("@/view/main.vue"),
      children: [
        {
          path: "child1",
          component: () => import("@/view/childmain1.vue")
        },
        {
          path: "child2",
          component: () => import("@/view/childmain2.vue")
        }
      ]
    }
  ],
  mode: "history"
});
