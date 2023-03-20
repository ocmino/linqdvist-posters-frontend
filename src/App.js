import { Fragment, useState, useTransition } from "react";
import { useControls } from "leva";
import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import { Gallery } from "./Components/3DGallery";
import Footer from "./Components/Footer";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";

export default function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div className="App">
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <group position={[0, -0.65, 0]}>
          <AccumulativeShadows
            temporal
            frames={200}
            color="purple"
            colorBlend={0.5}
            opacity={1}
            scale={10}
            alphaTest={0.85}
          >
            <RandomizedLight
              amount={8}
              radius={5}
              ambient={0.5}
              position={[5, 3, 2]}
              bias={0.001}
            />
          </AccumulativeShadows>
        </group>
        <Env />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.4}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
      <Fragment>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
      </Fragment>
      <Footer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

function Env() {
  return (
    <Environment
      className="App"
      /*files="/Pictures/HDR/snow_field_2_puresky_2k.hdr"*/
      preset="sunset"
      background
      blur={1}
    />
  );
}
