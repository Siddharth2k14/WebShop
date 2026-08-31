import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  RoundedBox,
  Text,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const WebsiteModel = () => {
  const group = useRef();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Normalize page scroll.
    const scrollProgress = Math.min(
      scrollY / window.innerHeight,
      2
    );

    // Smooth floating movement.
    const floatingY =
      Math.sin(time * 0.8) * 0.08;

    // Move upward as user scrolls.
    const targetY =
      floatingY + scrollProgress * 0.8;

    // Rotate with scroll.
    const targetRotationY =
      Math.sin(time * 0.35) * 0.08 +
      scrollProgress * Math.PI * 0.65;

    const targetRotationX =
      Math.sin(time * 0.3) * 0.025 +
      scrollProgress * 0.12;

    // Smooth interpolation.
    group.current.position.y +=
      (targetY - group.current.position.y) * 0.08;

    group.current.rotation.y +=
      (targetRotationY - group.current.rotation.y) * 0.08;

    group.current.rotation.x +=
      (targetRotationX - group.current.rotation.x) * 0.08;

    // Slight zoom.
    const scale =
      1 + Math.min(scrollProgress, 1) * 0.08;

    group.current.scale.lerp(
      {
        x: scale,
        y: scale,
        z: scale,
      },
      0.05
    );
  });

  return (
    <group ref={group}>

      {/* Main website */}
      <RoundedBox
        args={[4.8, 3.1, 0.18]}
        radius={0.15}
        smoothness={5}
      >
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.6}
          roughness={0.25}
        />
      </RoundedBox>

      {/* Screen */}
      <RoundedBox
        args={[4.35, 2.65, 0.05]}
        radius={0.08}
        smoothness={4}
        position={[0, 0, 0.12]}
      >
        <meshStandardMaterial
          color="#020617"
          emissive="#082f49"
          emissiveIntensity={0.35}
        />
      </RoundedBox>

      {/* Cyan header */}
      <mesh position={[0, 1.05, 0.16]}>
        <boxGeometry args={[3.9, 0.04, 0.02]} />

        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Browser dots */}
      <mesh position={[-1.75, 1.05, 0.17]}>
        <sphereGeometry args={[0.06, 16, 16]} />

        <meshStandardMaterial color="#ef4444" />
      </mesh>

      <mesh position={[-1.55, 1.05, 0.17]}>
        <sphereGeometry args={[0.06, 16, 16]} />

        <meshStandardMaterial color="#facc15" />
      </mesh>

      <mesh position={[-1.35, 1.05, 0.17]}>
        <sphereGeometry args={[0.06, 16, 16]} />

        <meshStandardMaterial color="#22c55e" />
      </mesh>

      {/* Title */}
      <Text
        position={[0, 0.55, 0.17]}
        fontSize={0.28}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        YOUR SHOP
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, 0.2, 0.17]}
        fontSize={0.15}
        color="#94a3b8"
        anchorX="center"
      >
        Your business, online
      </Text>

      {/* CTA */}
      <RoundedBox
        args={[1.5, 0.42, 0.04]}
        radius={0.08}
        smoothness={4}
        position={[0, -0.35, 0.18]}
      >
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.5}
        />
      </RoundedBox>

      <Text
        position={[0, -0.35, 0.22]}
        fontSize={0.13}
        color="white"
        anchorX="center"
      >
        GET STARTED
      </Text>

      {/* Product cards */}
      <RoundedBox
        args={[0.8, 0.55, 0.04]}
        radius={0.06}
        smoothness={4}
        position={[-1.25, -0.95, 0.18]}
      >
        <meshStandardMaterial color="#164e63" />
      </RoundedBox>

      <RoundedBox
        args={[0.8, 0.55, 0.04]}
        radius={0.06}
        smoothness={4}
        position={[0, -0.95, 0.18]}
      >
        <meshStandardMaterial color="#312e81" />
      </RoundedBox>

      <RoundedBox
        args={[0.8, 0.55, 0.04]}
        radius={0.06}
        smoothness={4}
        position={[1.25, -0.95, 0.18]}
      >
        <meshStandardMaterial color="#4c1d95" />
      </RoundedBox>
    </group>
  );
};

const WebsiteScene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 45,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[-4, 2, 3]}
        intensity={15}
        distance={10}
        color="#22d3ee"
      />

      <pointLight
        position={[4, -2, 2]}
        intensity={12}
        distance={10}
        color="#8b5cf6"
      />

      <WebsiteModel />

      <Environment preset="city" />
    </Canvas>
  );
};

export default WebsiteScene;