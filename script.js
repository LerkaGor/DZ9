var scene, camera, renderer, hlight;

init();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 400);
  camera.position.z = 150;
  hlight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(hlight);

  renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight ); // розтягування холсту до розміру вікна
	renderer.setClearColor (0x999999); // колір фону 
	renderer.clear(); // залити фоновим кольором
	document.body.appendChild( renderer.domElement ); // додавання холсту до тіла документа

  var loader = new THREE.GLTFLoader();
  loader.load('https://threejs.org/examples/models/gltf/Flamingo.glb', function(gltf) {
      scene.add(gltf.scene);
      scene.rotation.y=45;
      renderer.render(scene, camera);
    },
    undefined,
    function(error) {
      console.error(error);
    });

}
init();