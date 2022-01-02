const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({material: 0x0000ff})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.postion.z = 5


function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}