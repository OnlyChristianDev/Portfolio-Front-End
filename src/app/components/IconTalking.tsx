"use client"
import Lottie from "lottie-react"; 
import animationData from "../../../animations/my-lottie-animation.json"

export default function MyAnimatedIcon() {
  return (
    <Lottie animationData={animationData} className="max-sm:hidden w-[500px] max-lg:w-[35vw] max-2xl:w-[33vw]" />
  );
}
 