import React, { Component } from 'react'
import {TweenMax, Power2} from "gsap"
import 'babylonjs-loaders';
import * as BABYLON from 'babylonjs';


// Destructuring really helps clean up babylon projects
import  {
  Scene,
  Engine,
  AssetsManager,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  Mesh,
  Color4,
  Tools,
  MeshBuilder,
  Texture,
  StandardMaterial,
  Axis,
  SceneLoader
} from 'babylonjs'
// Here we extend Reacts component class
class Scene3D extends Component {




  constructor(props) {
    super(props);
    // We bind our events to keep the proper "this" context.
    this.moveCamera = this.moveCamera.bind(this)
       this.state={
           meshes:[{name:"buildings/"},{name:"solar/"},{name:"grue/"} ],
           remove: "ok"
       }
  }

  moveCamera = (e) => {
    TweenMax.to(this.camera, 1, {
        radius: this.regions[e.detail].radius,
        alpha: this.regions[e.detail].alpha,
        beta: this.regions[e.detail].beta,
        ease: Power2.easeOut,
    })
  }


  onResizeWindow = () => {
      if (this.engine) {
        this.engine.resize();
      }
  }
  // Sets up our canvas tag for webGL scene
  setEngine = () => {
    this.stage.style.width = '100%'
    this.stage.style.height = '100%'
    this.engine = new Engine(
      this.stage
    )
    this.stage.style.width = '100%'
    this.stage.style.height = '100%'
  }
  // Creates the scene graph
  setScene = () => {
    this.scene = new Scene(this.engine)

    this.scene.clearColor = new Color4(0,0,0,0.0000000000000001);
  }
  /*
     Adds camera to our scene. A scene needs a camera for anything to
     be visible. Also sets up rotation Controls
  */
  setCamera = () => {
     this.camera = new ArcRotateCamera("Camera", Math.PI * 2, Tools.ToRadians(180), 50, new Vector3( 0, 5, -5 ), this.scene);
     this.camera.attachControl(this.stage, true);
     this.camera.lowerRadiusLimit = 0;
     this.camera.upperRadiusLimit = 80;
     this.camera.lowerBetaLimit = this.camera.beta - Tools.ToRadians(180)
     this.camera.upperBetaLimit = this.camera.beta + Tools.ToRadians(180);
     this.camera.lowerAlphaLimit = this.camera.alpha - Tools.ToRadians(180)
     this.camera.upperAlphaLimit = this.camera.alpha + Tools.ToRadians(180);

  }

  //loadModels = () => {


  //  for (var index = 0; index < this.state.meshes.length; index++) {
  //       console.log(this.state.meshes[index].name)
  //      // The first parameter can be used to specify which mesh to import. Here we import all meshes
  //      BABYLON.SceneLoader.ImportMesh("",this.state.meshes[index].name, "scene.gltf", this.scene, function (scene) {
  //          scene.createDefaultCameraOrLight(true, true, true);
  //          console.log("ok")
  //      });
  //  }


  //    // The model came in a little dark so lets add some extra light
  //    new HemisphericLight('light1', new Vector3(0,1,0), this.scene)
  //}


  loadModels2 = () => {


       BABYLON.SceneLoader.ImportMesh("",this.state.meshes[0].name, "buildings.obj", this.scene, function(mesh) {
             console.log(mesh);
             this.setState({remove:mesh}, ()=>{console.log(this.sate.remove)});
             mesh.scaling.x=.01;
             mesh.scaling.y=.01;
             mesh.scaling.z=.01
      });


      // The model came in a little dark so lets add some extra light
      new HemisphericLight('light1', new Vector3(0,2,0), this.scene);

  }


  loadModels3 = () => {

    var sphere = BABYLON.SceneLoader.ImportMesh("",this.state.meshes[2].name, "scene.gltf", this.scene, function(scene) {
        console.log("ok")
      });

       sphere.setEnabled(false);

      // The model came in a little dark so lets add some extra light
      new HemisphericLight('light1', new Vector3(0,1,0), this.scene)
  }


    RemoveModel(test) {
       test.setEnabled(false);
    }


  //Build the scene when the component has been loaded.
  componentDidMount() {
    this.setEngine()
    this.setScene()
    this.setCamera()

    //this.loadModels();
    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
    window.addEventListener('resize', this.onResizeWindow)
    // We can add our custom events just like any other DOM event
    window.addEventListener('move-camera', this.moveCamera)
    window.addEventListener('change-color', this.changeColor)
  }
  //Renderes our Canvas tag and saves a reference to it.
  render() {
    return (<div>
      <canvas className="scene" ref={ el => this.stage = el}>
      </canvas>
      <button onClick={this.loadModels2.bind(this)}>Change model</button>
      <button onClick={this.loadModels3.bind(this)}>Change model</button>
      <button onClick={this.RemoveModel.bind(this)}>Remove model</button>
      </div>
    )
  }
}

//returns the scene to be used by other components
export default Scene3D
