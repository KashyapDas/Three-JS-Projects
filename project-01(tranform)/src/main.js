import './style.css'
import * as Three from "three"

// creating the scene
const scene = new Three.Scene();
// creating the object
const gemotry = new Three.BoxGeometry(1,1,1);
const material = new Three.MeshBasicMaterial({
  color : "yellow",
  wireframe : true
});
const mesh = new Three.Mesh(gemotry,material);
// creating the camera 
const size = {
  width : 1000,
  height : 700
}
const camera = new Three.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
camera.position.x = 1
camera.scale.x = 0.8
// adding the mesh and camera to scene
scene.add(mesh);
scene.add(camera);
// do the render
const canvas = document.querySelector(".canvas");
const renderer = new Three.WebGLRenderer({
  canvas : canvas
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);


