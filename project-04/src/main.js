// fecthing the canvas
const canvas = document.querySelector(".canvas");

import './style.css'
import * as Three from "three";
import gsap from 'gsap';

// creating the scene
const scene = new Three.Scene();
// creating the mesh
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
const camera = new Three.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 4;
// add the mesh and camera
scene.add(mesh);
scene.add(camera);
// render
const renderer = new Three.WebGLRenderer({
  canvas : canvas
});
renderer.setSize(size.width, size.height)
// use gsap as initial loader

// animate the mesh
const clock = new Three.Clock();
const animate = ()=>{
  gsap.to(mesh.position,{
    x : 2,
    duration : 1,
    delay : 0.5,
  })
  camera.position.y = Math.sin(clock.getElapsedTime() * 2);
  camera.position.x = Math.cos(clock.getElapsedTime() * 2);
  camera.position.z = 3
  camera.lookAt(mesh.position)
  renderer.render(scene,camera);
  window.requestAnimationFrame(animate);
}
animate();