import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: "/",
      name: "home",
      component: () => import("./views/Homepage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue"),
    },
    {
      path: "/places",
      name: "places",
      component: () => import("./views/PlaceList.vue"),
    },
    {
      path: "/plans",
      name: "plans",
      component: () => import("./views/PlanList.vue"),
    },
    {
      path: "/hotels",
      name: "hotels",
      component: () => import("./views/HotelList.vue"),
    },
    {
      path: "/plans/:id",
      name: "plan",
      component: () => import("./views/Plan.vue"),
    },
    {
      path: "/bookings",
      name: "booking",
      component: () => import("./views/Booking.vue"),
    },
  ],
});

export default router;
