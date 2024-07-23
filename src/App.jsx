import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Scene from "./Components/Scene";
import { Environment } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset="city" />
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
