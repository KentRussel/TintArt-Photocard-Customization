import React from 'react';
import * as THREE from 'three';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame, useThree } from '@react-three/fiber';
import { Decal, useGLTF, useTexture, OrbitControls } from '@react-three/drei';

import state from '../../store';

const Photocard = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/photocard.glb');

  const modelNode = nodes.Photocard; 
  const modelMaterial = materials['Material.002']; 
  const logoTexture = useTexture(snap.frontLogoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  const backLogoTexture = useTexture(snap.backLogoDecal);

  useFrame((state, delta) => easing.dampC(modelMaterial.color, snap.color, 0.25, delta));
  
  const stateString = JSON.stringify(snap);

  const createTextTexture = (text, font, size, color) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = `${size}px ${font}`;
    const textWidth = ctx.measureText(text).width;
    canvas.width = textWidth;
    canvas.height = size;
    ctx.fillStyle = color;
    ctx.font = `${size}px ${font}`;
    ctx.fillText(text, 0, size);
    return new THREE.CanvasTexture(canvas);
  };

  return (
    <>
      <OrbitControls />
      <group key={stateString}>
        <mesh
          geometry={modelNode.geometry}
          material={modelMaterial}
          material-roughness={0}
          material-metalness={0.1}
          dispose={null}
        >
          {snap.isFullTexture && (
            <Decal
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
              map={fullTexture}
              depthTest={false}
              depthWrite={true}
            />
          )}

          {snap.isFrontLogoTexture && (
              <Decal
                position={snap.frontLogoPosition}
                rotation={[0, 0, 0]}
                scale={snap.frontLogoScale}
                map={logoTexture}
                map-anisotropy={16}
                depthTest={false}
                depthWrite={true}
              />
          )}
          {snap.isFrontText && (
          <Decal
            position={snap.frontTextPosition}
            rotation={snap.frontTextRotation}
            scale={snap.frontTextScale}
            map={createTextTexture(snap.frontText, snap.frontTextFont, snap.frontTextSize, snap.frontTextColor)}
          />
          )}

          {snap.isBackLogoTexture && (
            <Decal
              position={snap.backLogoPosition}
              rotation={snap.backLogoRotation}
              scale={snap.backLogoScale}
              map={backLogoTexture}
              map-anisotropy={16}
              depthTest={false}
              depthWrite={true}
            />
          )}
          {snap.isBackText && (
            <Decal
              position={snap.backTextPosition}
              rotation={snap.backTextRotation}
              scale={snap.backTextScale}
              map={createTextTexture(snap.backText, snap.backTextFont, snap.backTextSize, snap.backTextColor)}
            />
          )}
        </mesh>
      </group>
    </>
  );
};

export default Photocard;