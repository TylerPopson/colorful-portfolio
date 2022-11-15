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
  <div class="static w-screen h-screen">
  <div class="flex bg-black">
    <div
      id="top"
      class="flex flex-none w-1/2 h-screen bg-spiral-background fixed top-0 left-0 z-10 overflow-hidden place-items-center bg-fixed"
    >
      <!-- <div class="w-screen text-center absolute overflow-hidden">top</div> -->
    </div>
    <div
      id="bottom"
      class="flex w-screen h-screen bg-spiral-background grayscale fixed top-0 right-0 z-0 items-center justify-center bg-fixed"
    >
      <!-- <div>bottom</div> -->
    </div>
  </div>
  </div>
  <div class=" h-screen bg-black">
  </div>
</template>
