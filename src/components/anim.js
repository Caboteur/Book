import React, { Component } from 'react';
import * as THREE from 'three';
import styles from './anim.css'
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';
const OrbitControls = require('three-orbitcontrols')
import {TweenMax} from "gsap";

 export default class Anim extends Component {

   componentDidMount() {
     this.init();

   }

   init() {
     this.group = new THREE.Object3D();
     this.bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
     this.gridSize = 40;
     this.buildings = [];
     this.fogConfig = {
       color: '#112b4d',
       near: 100,
       far: 150
     };

     this.width = window.innerWidth;
     this.height = window.innerHeight;

     this.createScene();
     this.createCamera();
     this.addCameraControls();
     this.addAmbientLight();
     this.addSpotLight();
     this.addSpotLight2()
     this.addFloor();
     this.loadModels('https://raw.githubusercontent.com/iondrimba/images/master/buildings.obj', this.onLoadModelsComplete.bind(this));

     this.animate();








   }

   createScene() {
     this.scene = new THREE.Scene();

     this.renderer = new THREE.WebGLRenderer({ antialias: true , alpha:true});
     this.renderer.setSize(this.width, this.height);

     this.renderer.shadowMap.enabled = true;
     this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

     document.body.querySelector('.anch').appendChild(this.renderer.domElement);

     this.scene.fog = new THREE.Fog(this.fogConfig.color, this.fogConfig.near, this.fogConfig.far);

   }

   createCamera() {
     this.camera = new THREE.PerspectiveCamera(20, this.width / this.height, 1, 1000);
     this.camera.position.set(90, 50, 80);

     this.scene.add(this.camera);
   }

   addCameraControls() {
     this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
     this.controls.autoRotate = true;
     this.controls.enabled = true;
     this.controls.autoRotateSpeed = 0.3;
     this.controls.enableZoom = false;
     this.controls.minPolarAngle = 1.45;
    this.controls.maxPolarAngle = 1.45 ;

   }

   addSpotLight2() {
     const light = { color: '#ffffff', x: 0, y: -462, z: 509 };
     const spotLight = new THREE.SpotLight(light.color, 0.3);

     spotLight.position.set(light.x, light.y, light.z);
     spotLight.castShadow = true;

     this.scene.add(spotLight);
   }

   addSpotLight() {
     const light = { color: 'red', x: 6641, y: 462, z: 509 };
     const spotLight = new THREE.SpotLight(light.color, 0.5);

     spotLight.position.set(light.x, light.y, light.z);
     spotLight.castShadow = true;

     this.scene.add(spotLight);
   }

   addAmbientLight() {
     const light = { color: '#16345b' };
     const ambientLight = new THREE.AmbientLight(light.color);

     this.scene.add(ambientLight);
   }


   tilt() {
     this.lastMouseX = this.tiltFx.lerp(this.lastMouseX, this.tiltFx.lineEq(6,0,this.width,0,this.mouseX), 0.05);
     const newScrollingPos = window.pageYOffset;
     this.lastMouseY = this.tiltFx.lerp(this.lastMouseY, this.tiltFx.lineEq(0,65,this.docheight,0,newScrollingPos), 0.05);
     this.lastScale = this.tiltFx.lerp(this.lastScale, this.tiltFx.lineEq(0,158,this.docheight,0,newScrollingPos), 0.05);
     this.camera.position.set(this.lastMouseX, this.lastMouseY, this.lastScale);
     this.requestId = requestAnimationFrame(() => this.tilt());
   }

   addFloor() {
     const floor = { color: '#ffffff' };
     const planeGeometry = new THREE.PlaneGeometry(200, 200);
     const planeMaterial = new THREE.MeshStandardMaterial({
       color: floor.color,
       metalness: 0,
       emissive: '#000000',
       roughness: 0,
     });

     const plane = new THREE.Mesh(planeGeometry, planeMaterial);

     planeGeometry.rotateX(- Math.PI / 2);
     plane.position.y = 0;

     this.scene.add(plane);
   }

   addPointLight(params) {
     const pointLight = new THREE.PointLight(params.color, params.intensity);

     pointLight.position.set(params.position.x, params.position.y, params.position.z);

     this.scene.add(pointLight);
   }

   getRandomBuiding() {
     return this.models[Math.floor(Math.random() * Math.floor(this.models.length))];
   }

   onLoadModelsComplete(obj) {
     this.models = [...obj.children].map((model) => {
       const scale = .01;

       model.scale.set(scale, scale, scale);
       model.position.set(0, -14, 0);
       model.receiveShadow = true;
       model.castShadow = true;

       return model;
     });

     this.draw();

     setTimeout(() => {

       this.showBuildings();
     }, 500);




     window.addEventListener('resize', this.onResize.bind(this));
   }




   showBuildings() {
     this.sortBuildingsByDistance();

     this.buildings.forEach((building, index) => {
       TweenMax.to(building.position, .6 + (index / 4000), { y: 1, ease: Quint.easeOut, delay: index / 4000 });
     });
   }

   sortBuildingsByDistance() {
     this.buildings.sort((a, b) => {
       if (a.position.z > b.position.z) {
         return 1;
       }
       if (a.position.z < b.position.z) {
         return -1;
       }
       return 0;
     }).reverse();
   }

   loadModels(name, callback) {
     const objLoader = new THREE.OBJLoader();

     objLoader.load(name, callback);
   }

   draw() {
     const boxSize = 3;
     const meshParams = {
       color: '#ffffff',
       metalness: 0,
       emissive: '#000',
       roughness: .77,
     };

     const max = .009;
     const min = .001;
     const material = new THREE.MeshPhysicalMaterial(meshParams);

     for (let i = 0; i < this.gridSize; i++) {
       for (let j = 0; j < this.gridSize; j++) {
         const building = this.getRandomBuiding().clone();

         building.material = material;
         building.scale.y = Math.random() * (max - min + .01);
         building.position.x = (i * boxSize);
         building.position.z = (j * boxSize);

         this.group.add(building);

         this.buildings.push(building);
       }
     }

     this.scene.add(this.group);
     this.group.position.set(-this.gridSize - 10, 1, -this.gridSize - 10);
   }

   onResize() {
     this.width = window.innerWidth;
     this.height = window.innerHeight;

     this.camera.aspect = this.width / this.height;
     this.camera.updateProjectionMatrix();
     this.renderer.setSize(this.width, this.height);
   }

   animate() {
     this.controls.update();

     this.renderer.render(this.scene, this.camera);

     requestAnimationFrame(this.animate.bind(this));
   }



	render() {
		return(
			<div className="anch" ref={ref => (this.el = ref)} />

		)
	}

}
