import React, { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber'
import GUIWindow from '../GUIWindow/GUIWindow';
import Brighthouse from '../../models/Brighthouse/Brighthouse';
import { PointerLockControls } from '@react-three/drei/core';
import { FlyControls } from '@react-three/drei/web';
import { CubeTextureLoader } from "three";
import './World.scss';

function SkyBox() {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        "img/textures/daylight_left.bmp",
        "img/textures/daylight_right.bmp",
        "img/textures/daylight_top.bmp",
        "img/textures/daylight_bottom.bmp",
        "img/textures/daylight_back.bmp",
        "img/textures/daylight_front.bmp",
    ]);
    scene.background = texture;
    return null;
}

function World(props) {
    return (
        <GUIWindow width="800px" height="800px" onClose={props.onClose}>
            <div className="world_container">
                <Canvas shadows camera={{ position: [0, 5, 10] }}>
                    <Suspense>
                        <PointerLockControls />
                        <FlyControls movementSpeed="5"/>
                        <SkyBox />
                        <ambientLight intensity={0.2}/>
                        <pointLight position={[10, 10, 10]} />
                        <Brighthouse></Brighthouse>
                    </Suspense>
                </Canvas>
            </div>
        </GUIWindow>
    );
}

export default World;