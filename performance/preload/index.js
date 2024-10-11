// // import { addition } from "./util";

function importMe() {
  import("./normal");
  import(/* webpackChunkName: "util", webpackPreload: true */ "./util");
  console.log("jeyy");
}
window.importMe = importMe;
// // console.log(addition(1, 3));

// src/index.js
console.log("Entry point loaded");

// A dynamic import with preload
// import(/* webpackChunkName: "util", webpackPreload: true */ "./util").then(
//   (module) => {
//     console.log("Preloaded component loaded");
//   }
// );

// // A regular dynamic import
// import(/* webpackChunkName: "normal" */ "./normal").then((module) => {
//   console.log("Regular component loaded");
// });
