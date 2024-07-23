import { MeshTransmissionMaterial, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useRef } from "react";

function Scene() {
  const { viewport } = useThree();
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.02;
    ref.current.rotation.y += 0.02;
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <>
      <group scale={viewport.width / 10}>
        <Text fontSize={1.5} position={[0, 0, -1]}>
          Hello World!
        </Text>
        <mesh ref={ref}>
          <torusGeometry />
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>
    </>
  );
}

export default Scene;
