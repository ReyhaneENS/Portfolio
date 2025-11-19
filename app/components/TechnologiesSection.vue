<template>
  <section ref="techRef" class="px-4 py-10" id="technologies">
    <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">
      Technologies
    </h2>

    <div class="flex flex-col gap-6">
      <div
        v-for="(category, index) in techCategories"
        :key="index"
        ref="categoryRefs"
        class="opacity-0 -translate-y-6 transition-all duration-700"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <h3 class="text-sm text-[#9ca3af] font-semibold pb-2">{{ category.title }}</h3>
        <div class="flex flex-wrap gap-4">
          <span v-for="(tag, tIndex) in category.tags" :key="tIndex" class="tag-item">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const techCategories = [
  {
    title: "Languages & Frameworks",
    tags: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Vue.js (Options API)",
      "Vue.js (Composition API)",
      "Nuxt.js",
    ],
  },
  {
    title: "Styling & UI Libraries",
    tags: ["Tailwind CSS", "Bootstrap Vue", "Vuetify", "Shadcn", "UiThing"],
  },
  {
    title: "Web Technologies",
    tags: ["HTML5", "CSS3", "SASS", "PWA", "RESTful APIs"],
  },
  {
    title: "Libraries",
    tags: ["Pinia", "Vuex", "Axios", "Ofetch", "Moment", "I18n", "Chart.js", "ApexCharts"],
  },
];

const categoryRefs = ref([]);

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

    categoryRefs.value.forEach((el) => observer.observe(el));
  });
});
</script>

<style scoped>
.tag-item {
  color: #d1d5db;
  background: #292348;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
}
</style>
