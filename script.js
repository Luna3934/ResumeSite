// // // script.js
// // document.addEventListener("DOMContentLoaded", () => {
// //     const pages = document.querySelectorAll(".page");
// //     const links = document.querySelectorAll(".nav-link");

// //     links.forEach(link => {
// //         link.addEventListener("click", function(e) {
// //             e.preventDefault(); // Prevent default link behavior
// //             const targetId = this.getAttribute("data-target"); // Get the target page

// //             // Fade out current content
// //             gsap.to("#content", { opacity: 0, duration: 0.5, onComplete: () => {
// //                 // Hide all pages
// //                 pages.forEach(page => {
// //                     page.style.display = "none"; // Hide all pages
// //                 });
                
// //                 // Show the targeted page
// //                 const targetPage = document.getElementById(targetId);
// //                 targetPage.style.display = "block"; // Display the target page

// //                 // Fade in the target content
// //                 gsap.fromTo("#content", { opacity: 0 }, { opacity: 1, duration: 0.5 });
// //             }});
// //         });
// //     });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".nav-link");
//     const pages = document.querySelectorAll(".page");

//     navLinks.forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault(); // Prevents page reload
//             const target = link.getAttribute("data-target");

//             // Hide all pages
//             pages.forEach(page => {
//                 page.style.display = "none";
//                 page.classList.remove("active");
//             });

//             // Show the selected page
//             const targetPage = document.getElementById(target);
//             targetPage.style.display = "block";
//             targetPage.classList.add("active");
//         });
//     });
// });