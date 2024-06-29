
import { MotionConfig } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

//Modules below are regarded to shader
export default function() {
    let theme = useTheme();
    const refContainer = useRef(null);

    useEffect(() => {
      // === THREE.JS CODE START ===
      var scene = new THREE.Scene();
      var renderer = new THREE.WebGLRenderer( { antialias: true });
      renderer.setPixelRatio( window.devicePixelRatio );
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
          const light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
          scene.add( light );
          
          scene.background = new THREE.Color( 0xbfe3dd );
          
          const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
          camera.position.set( 5, 2, 8 );


          const outlinePass = new OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), scene, camera );
          outlinePass.renderToScreen = true;
          composer.addPass( outlinePass );
          
          const renderPass = new RenderPass( gltf.scene, camera );
          composer.addPass( renderPass );

          scene.add( gltf.scene );
          outlinePass.selectedObjects = scene;
          scene.traverse( function( node: any ) {
            if ( node instanceof THREE.Mesh ) {
              console.log("Setting new material")
              // insert your code here, for example:
              node.material = new THREE.MeshToonMaterial({ color: node.material.color });
            }
          });
    
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
