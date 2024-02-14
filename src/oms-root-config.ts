import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@oms/oms-fe-employee-management",
  app: () =>
    System.import<LifeCycles>(
      "http://localhost:8080/oms-oms-fe-employee-management.js"
    ),
  activeWhen: ["/employee-management"],
});

// registerApplication({
//   name: "@oms/navbar",
//   app: () => System.import("@oms/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
