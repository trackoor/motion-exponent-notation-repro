import { mix, interpolate, transform } from "motion"

console.log(mix("translateX(1e-7px) rotate(10deg)", "translateX(100px) rotate(20deg)")(0.5))
console.log(interpolate([0, 1], ["blur(2.5e-7px)", "blur(4px)"])(0.5))
console.log(transform([0, 1], ["0px 1.6e-8px 3.2e-8px rgba(161, 0, 246, 6.4e-10)", "0px 10px 20px rgba(0, 0, 0, 0.4)"])(0.25))
