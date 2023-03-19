import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCursor, Image, Text } from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing } from "maath";
import getUuid from "uuid-by-string";
import { useMediaQuery } from "@mantine/hooks";

const GOLDENRATIO = 1.61803398875;

const textStyleVisible = {
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "black",
};

const textStyleHidden = {
  ...textStyleVisible,
  color: "transparent",
};

export const Gallery = () => {
  const [visibleStyle, setVisibleStyle] = useState(textStyleVisible);
  const [hiddenStyle, setHiddenStyle] = useState(textStyleHidden);

  //toggle between visible and hidden styles
  const toggleText = () => {
    if (visibleStyle.color === "black") {
      setVisibleStyle(hiddenStyle);
      setHiddenStyle({ ...hiddenStyle, color: "black" });
    } else {
      setVisibleStyle({ ...visibleStyle, color: "black" });
      setHiddenStyle({ ...hiddenStyle, color: "transparent" });
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50vh",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        <Frames images={images} />
      </Canvas>
      <div style={visibleStyle}>
        <h1>Välkommen till det virtuella galleriet!</h1>
        <p>
          Ett smidigt och roligt sätt att få en känsla för hur en bild ser ut i
          verkligheten.
          <button onClick={toggleText}>Klicka här för att visa texten</button>
        </p>
      </div>
    </div>
  );
};
const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
const images = [
  // Front
  {
    position: [0, -0.5, 1.5],
    rotation: [0, 0, 0],
    url: pexel(1103970),
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/the-mountain-1_540x.jpg?v=1541006626",
  },
  // Back
  {
    position: [-0.8, -0.5, -0.6],
    rotation: [0, 0, 0],
    url: pexel(416430),
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/vinterns-magi-1_540x.jpg?v=1568752238",
  },
  {
    position: [0.8, -0.5, -0.6],
    rotation: [0, 0, 0],
    url: pexel(310452),
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/dalahast-if-1_540x.jpg?v=1564661546",
  },
  // Left
  {
    position: [-1.75, -0.5, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/imagination-loa-1_540x.jpg?v=1574715772",
  },
  {
    position: [-2.15, -0.5, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/under-korsbarstradet-host-1_540x.jpg?v=1517500648",
  },
  {
    position: [-2, -0.5, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/styckningsschema-alg-1_540x.jpg?v=1517500102",
  },
  // Right
  {
    position: [1.75, -0.5, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/stad-i-ljus-1_540x.jpg?v=1533906540",
  },
  {
    position: [2.15, -0.5, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/iceland-2-1_540x.jpg?v=1520528278",
  },
  {
    position: [2, -0.5, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/skogsra-1_540x.jpg?v=1519238821",
  },
];

function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });
  return (
    <group
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(),
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        )
      )}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map(
        (props) => <Frame key={props.url} {...props} /> /* prettier-ignore */
      )}
    </group>
  );
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef();
  const frame = useRef();
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  const isActive = params?.id === name;
  useCursor(hovered);
  useFrame((state, dt) => {
    image.current.material.zoom =
      2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    easing.damp3(
      image.current.scale,
      [
        0.85 * (!isActive && hovered ? 0.85 : 1),
        0.9 * (!isActive && hovered ? 0.905 : 1),
        1,
      ],
      0.1,
      dt
    );
    easing.dampC(
      frame.current.material.color,
      hovered ? "white" : "white",
      0.1,
      dt
    );
  });
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={url}
        />
      </mesh>
      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.55, GOLDENRATIO, 0]}
        fontSize={0.025}
      >
        {name.split("-").join(" ")}
      </Text>
    </group>
  );
}
