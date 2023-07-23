// Create a file called barba.config.js in the root of your project
import barba from "@barba/core";

barba.init({
  transitions: [
    {
      async leave(data) {
        // Your GSAP animations for leaving the current page
        await gsap
          .to(data.current.container, { opacity: 0, duration: 5 })
          .promise();
      },
      async enter(data) {
        // Your GSAP animations for entering the new page
        await gsap
          .from(data.next.container, { opacity: 0, duration: 5 })
          .promise();
      },
    },
  ],
});
// barba.init({
//   transitions: [{
//     name: 'opacity-transition',
//     leave(data) {
//       return gsap.to(data.current.container, {
//         opacity: 0
//       });
//     },
//     enter(data) {
//       return gsap.from(data.next.container, {
//         opacity: 0
//       });
//     }
//   }]
// });
