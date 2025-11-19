<template>
  <section ref="projectsRef" class="px-4 py-10" id="projects">
    <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">
      Projects
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        ref="projectRefs"
        class="group relative flex flex-col rounded-xl bg-[#1c1833] border border-solid border-[#292348] overflow-hidden opacity-0 -translate-y-6 transition-all duration-700 hover:border-(--primary)"
      >
        <div
          class="w-full bg-center bg-no-repeat aspect-video bg-cover"
          :style="`background-image: url('${project.image}')`"
          :aria-label="project.alt"
        ></div>
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-xl font-bold text-white">{{ project.title }}</h3>
          <p class="text-[#9b92c9] text-base font-normal leading-normal mt-2 mb-4 flex-grow">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="(tag, tIndex) in project.tags"
              :key="tIndex"
              class="text-xs font-semibold text-(--primary) bg-(--primary)/20 py-1 px-3 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
          <div class="flex gap-4 mt-auto">
            <a
              class="flex items-center gap-2 text-white text-sm font-medium leading-normal hover:text-(--primary) transition-colors"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="material-symbols-outlined text-lg">link</span> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const projects = [
  {
    title: "Majara Coworking space and cafe",
    description:
      "Majara.io coworking space website, built with Nuxt.js and Bootstrap Vue featuring responsive design, interactive booking, and dynamic content.",
    image: "/images/majara.jpg",
    tags: ["Nuxt.js", "Bootstrap Vue", "Vuex"],
    link: "https://www.majara.io",
    alt: "Screenshot of Majara Coworking space",
  },
  {
    title: "IranHealth International Exhibition",
    description:
      "IranHealth International Exhibition website, built with Nuxt 3 and Tailwind CSS, featuring responsive layouts, dynamic content, and interactive event information.",
    image: "/images/iranhealth.jpg",
    tags: ["Nuxt.js", "Tailwind CSS", "Pinia"],
    link: "https://www.iranhealthonline.com/",
    alt: "Screenshot of IranHealth International Exhibition",
  },
  {
    title: "T-Learning",
    description:
      "T-Learning, an online medical events platform, built with Nuxt.js and Bootstrap Vue, featuring responsive design, interactive event management, and live streaming capabilities.",
    image: "/images/learning.jpg",
    tags: ["Nuxt.js", "Bootstrap Vue", "Pinia"],
    link: "https://learning.tritapp.net/",
    alt: "Screenshot of T-Learning",
  },
  {
    title: "B2B Meeting",
    description:
      "B2B Meeting website, built with Nuxt 4, Tailwind CSS, UiThing, and Pinia, featuring responsive layouts, interactive scheduling, and dynamic business networking tools.",
    image: "/images/b2b.jpg",
    tags: ["Nuxt.js 4", "UiThing", "Tailwind CSS", "Pinia"],
    link: "https://b2b-meeting.tritapp.net/",
    alt: "Screenshot of B2B Meeting",
  },
];

const projectRefs = ref([]);

onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "-translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.value.forEach((el) => observer.observe(el));
  });
});
</script>
