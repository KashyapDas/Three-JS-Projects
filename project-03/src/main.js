import './style.css';
import * as Three from "three";

// creating a scene
const scene = new Three.Scene();
// creating a mesh
const mesh = new Three.Mesh(
  new Three.BoxGeometry(1,1,1),
  new Three.MeshBasicMaterial({
    color : "yellow",
    wireframe : true
  })
);
// creating the camera
const size = {
  width : 1000,
  height : 700
}
const camera = new Three.PerspectiveCamera(75, size.width / size.height );
camera.position.z = 2
// adding the mesh and camera to the scene
scene.add(mesh);
scene.add(camera);
// render the scene
const canvas = document.querySelector(".canvas");
const renderer = new Three.WebGLRenderer({
  canvas : canvas
});
renderer.setSize(size.width, size.height );
// creating the clock for equivalent speed on the user device
const clock = new Three.Clock();
// animate the mesh when rendering
const animate = ()=>{
  // rotation will be set as the animation
  mesh.rotation.y = clock.getElapsedTime();
  // render the scene again and again
  renderer.render(scene,camera);
  // request the browser to run the function recursively
  window.requestAnimationFrame(animate);
}
// call the function at least once
animate();