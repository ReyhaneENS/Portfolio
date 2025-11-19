<template>
  <section
    ref="aboutRef"
    class="px-4 py-10 opacity-0 -translate-y-6 transition-all duration-700 ease-out"
    id="about"
  >
    <div class="flex flex-col-reverse gap-6 @container md:flex-row md:items-center">
      <div
        ref="textRef"
        class="flex flex-col gap-6 text-center md:text-left @[480px]:gap-8 @[864px]:justify-center opacity-0 -translate-y-4 transition-all duration-700 delay-100"
      >
        <div class="flex flex-col gap-2">
          <h1
            class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
          >
            Front-End Developer
          </h1>
          <p class="text-[#9b92c9] text-base font-normal leading-relaxed @[480px]:text-lg">
            I'm a passionate front-end developer with a love for clean code and user-centric design.
            My journey in web development started with a curiosity for how things work, and it has
            evolved into a career where I can build intuitive and dynamic digital experiences.
          </p>
        </div>
        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            ref="buttonRef"
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-(--primary) text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:opacity-90 transition-opacity opacity-0 -translate-y-2"
            href="#projects"
          >
            <span class="truncate">View My Work</span>
          </a>
        </div>
      </div>

      <div
        ref="avatarRef"
        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-64 md:min-h-80 md:w-2/5 shrink-0 opacity-0 scale-95 transition-all duration-700 delay-200"
        style="background-image: url('/images/avatar.jpg'); background-position: center"
        aria-label="Portrait of Reyhane Ebrahiminasab"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const aboutRef = ref(null);
const textRef = ref(null);
const buttonRef = ref(null);
const avatarRef = ref(null);

onMounted(() => {
  requestAnimationFrame(() => {
    if (aboutRef.value) {
      aboutRef.value.classList.remove("opacity-0", "-translate-y-6");
      aboutRef.value.classList.add("opacity-100", "translate-y-0");
    }
    if (textRef.value) {
      textRef.value.classList.remove("opacity-0", "-translate-y-4");
      textRef.value.classList.add("opacity-100", "translate-y-0");
    }
    if (buttonRef.value) {
      buttonRef.value.classList.remove("opacity-0", "-translate-y-2");
      buttonRef.value.classList.add("opacity-100", "translate-y-0");
    }
    if (avatarRef.value) {
      avatarRef.value.classList.remove("opacity-0", "scale-95");
      avatarRef.value.classList.add("opacity-100", "scale-100");
    }
  });
});
</script>
