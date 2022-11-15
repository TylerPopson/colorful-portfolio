<script setup lang="ts">
import { onMounted } from "vue";
let topDiv: HTMLElement | null = null;

onMounted(() => {
  topDiv = document.getElementById("top");
});

function mouse(event: MouseEvent | TouchEvent) {
  if (topDiv != null) {
    if (event instanceof MouseEvent) {
      topDiv.style.width = event.x.toString() + "px";
    } else {
      if (event.touches.item(0) != null) {
        topDiv.style.width = event.touches.item(0).clientX.toString() + "px";
      }
    }
  }
}

document.addEventListener("mousemove", mouse);
document.addEventListener("touchmove", mouse);
</script>
<template>
  <div class="flex fixed">
    <div
      id="top"
      class="flex flex-none w-1/2 h-screen bg-purple-600 fixed top-0 left-0 z-10 overflow-hidden place-items-center"
    >
      <p class="w-screen text-center absolute overflow-hidden">top</p>
    </div>
    <div
      id="bottom"
      class="flex w-screen h-screen bg-white fixed top-0 right-0 z-0 items-center justify-center"
    >
      <p>bottom</p>
    </div>
  </div>
</template>
