import Vue from "vue";
import Router from "vue-router";

import SampleIndex from "@/views/SampleIndex";
import ModalSample from "@/views/ModalSample";
import LoadingSample from "@/views/LoadingSample";
import TextAnimation from "@/views/TextAnimation";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "sample-index",
      component: SampleIndex,
    },
    {
      path: "/modal-sample",
      name: "modal-sample",
      component: ModalSample,
    },
    {
      path: "/loading-sample",
      name: "loading-sample",
      component: LoadingSample,
    },
    {
      path: "/text-animation",
      name: "text-animation",
      component: TextAnimation,
    },
  ]
})