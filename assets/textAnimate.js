// const textArray = ["Youtuber", "Freelancer", "Graphics Designer", "Web Designer", "Web Developer"];
// let textIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// function typeText() {
//     const target = document.getElementById("animationTarget");
//     const currentText = textArray[textIndex];

//     if (!isDeleting) {
//         target.innerHTML = currentText.substring(0, charIndex + 1);
//         charIndex++;

//         if (charIndex === currentText.length) {
//             isDeleting = true;
//             setTimeout(typeText, 1000);
//         }
//     } else {
//         target.innerHTML = currentText.substring(0, charIndex - 1);
//         charIndex--;

//         if (charIndex === 0) {
//             isDeleting = false;
//             textIndex++;
//             if (textIndex === textArray.length) {
//                 textIndex = 0;
//             }
//             setTimeout(typeText, 500);
//         }
//     }
// }

// typeText();