
import { MotionConfig } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
//Modules below are regarded to shader
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";

export default function() {
    let theme = useTheme();
    const refContainer = useRef(null);

    useEffect(() => {
      // === THREE.JS CODE START ===
      var scene = new THREE.Scene();
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      refContainer.current && (refContainer.current as any).appendChild( renderer.domElement );

      const loader = new GLTFLoader();
      const composer = new EffectComposer(renderer);

      console.log("Loading gltf")
      // Load a glTF resource
      loader.load(
        // resource URL
        '/models/vending_machine.glb',
        // called when the resource is loaded
        function ( gltf: any ) {
          console.log(gltf);
          scene.add( gltf.scene );
          const light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
          scene.add( light );
          
          scene.background = new THREE.Color( 0xbfe3dd );
          
          const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
          camera.position.set( 5, 2, 8 );

          const renderPass = new RenderPass( gltf.scene, camera );
        composer.addPass( renderPass );

        const outlinePass= new OutlinePass(
              new THREE.Vector2(window.innerWidth, window.innerHeight), //resolution parameter
              gltf.scene,
              camera)
        ;
        composer.addPass( outlinePass );
    
          const controls = new OrbitControls( camera, renderer.domElement );
          controls.target.set( 0, 0.5, 0 );
          controls.update();
          controls.enablePan = false;
          controls.enableDamping = true;

          scene.add(camera);

          var animate = function () {
            requestAnimationFrame(animate);
            composer.render(); //If you don't put delta time to render function, it use default delta time parameter.

            renderer.render(scene, camera);
          };
          animate();

        },
        // called while loading is progressing
        function ( xhr: any ) {

          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error: any ) {

          console.log( 'An error happened' );

        }
      );
    }, []);
    return (
      <div ref={refContainer}></div>
  
    );
}
