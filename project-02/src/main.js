import "./style.css";
import * as Three from "three";

// creating the scene
const scene = new Three.Scene();
// creating the 3 mesh in the group 
const meshPostion = [-2,0,2];
const meshColor = ["red","yellow","blue"]; 
const group = new Three.Group();
for(let i=0; i<3; i++)
{
  // creating each mesh
  const mesh = new Three.Mesh(
    new Three.BoxGeometry(1,1,1),
    new Three.MeshBasicMaterial({
      color : meshColor[i],
      wireframe : true
    })
  );
  mesh.position.x = meshPostion[i];
  group.add(mesh);
}
// creating the camera 
const size = {
  width : 1500,
  height : 700
}
const camera = new Three.PerspectiveCamera(75,size.width / size.height);
camera.position.z = 3;
// add the group and camera in the scene
scene.add(camera);
scene.add(group);
// render the scene
const canvas = document.querySelector(".canvas");
const renderer = new Three.WebGLRenderer({
  canvas : canvas
})
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);