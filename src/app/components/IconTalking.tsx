"use client"
import Lottie from "lottie-react"; 
import animationData from "../../../animations/my-lottie-animation.json";

export default function MyAnimatedIcon() {
  return (
    <Lottie style={{ width: 500, height: 500 }} animationData={animationData}  />
  );
}
