<template>
  <header
    ref="headerRef"
    class="sticky mx-3 top-5 z-50 flex items-center justify-between whitespace-nowrap border border-solid border-[#292348]/50 bg-(--color-background-dark)/80 px-10 py-3 rounded-xl backdrop-blur-md transform opacity-0 -translate-y-6 transition-all duration-700 ease-out"
  >
    <div class="flex items-center gap-4 text-white">
      <div class="size-6 text-(--primary) transition-transform duration-300 hover:scale-110">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path
            clip-rule="evenodd"
            d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
      <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
        Reyhane Ebrahiminasab
      </h2>
    </div>

    <nav class="hidden md:flex items-center gap-9">
      <a
        v-for="(link, idx) in navLinks"
        :key="idx"
        :href="link.href"
        class="text-white text-sm font-medium leading-normal hover:text-(--primary) transition-colors duration-300"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Technologies", href: "#technologies" },
  { label: "Social", href: "#social" },
];

const headerRef = ref(null);

onMounted(() => {
  requestAnimationFrame(() => {
    if (headerRef.value) {
      headerRef.value.classList.remove("opacity-0", "-translate-y-6");
      headerRef.value.classList.add("opacity-100", "translate-y-0");
    }
  });
});
</script>
