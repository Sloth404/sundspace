<template>
  <div ref="rocketContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick, onUnmounted } from 'vue';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import rocketObjUrl from '../../../src/assets/models/brand_new_rocket.obj';

const rocketContainer = ref<HTMLDivElement | null>(null);

onMounted(async () => {
  await nextTick();

  if (!rocketContainer.value) return;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    rocketContainer.value.clientWidth / rocketContainer.value.clientHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(rocketContainer.value.clientWidth, rocketContainer.value.clientHeight);
  rocketContainer.value.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);

  const loader = new OBJLoader();

  loader.load(
    rocketObjUrl,
    (object) => {
      object.scale.set(1, 1, 1);
      scene.add(object);

      const animate = () => {
        requestAnimationFrame(animate);
        object.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();
    },
    (xhr) => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`),
    (error) => console.error('An error occurred:', error)
  );

  camera.position.set(0, 0, 200);
  camera.lookAt(0, 0, 0);

  const resizeObserver = new ResizeObserver(() => {
    if (!rocketContainer.value) return;

    const { clientWidth, clientHeight } = rocketContainer.value;
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(clientWidth, clientHeight);
  });

  resizeObserver.observe(rocketContainer.value);

  onUnmounted(() => {
    resizeObserver.disconnect();
    renderer.dispose();
  });
});
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
