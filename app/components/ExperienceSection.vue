<template>
  <section ref="experienceRef" class="px-4 py-10" id="experience">
    <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">
      Work Experience
    </h2>
    <div class="relative pl-6 border-l-2 border-solid border-[#292348]">
      <div
        v-for="(job, idx) in experiences"
        :key="idx"
        ref="jobRefs"
        class="mb-10 ml-4 opacity-0 -translate-x-8 transition-all duration-700"
        :style="{ transitionDelay: `${idx * 150}ms` }"
      >
        <div
          class="absolute w-4 h-4 bg-(--primary) rounded-full mt-1.5 -left-[49px] border-2 border-solid border-[#131022]"
        ></div>
        <time class="mb-1 text-sm font-normal leading-none text-[#9b92c9]">{{ job.date }}</time>
        <h3 class="text-lg font-semibold text-white mt-1">{{ job.title }}</h3>
        <p class="mt-2 text-base font-normal text-[#9b92c9]">{{ job.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const experiences = [
  {
    date: "Aug 2023 - Present",
    title: "Front-End Developer at TritApp",
    description:
      "Migrated a large project to Nuxt 3 (TypeScript) with a 30% performance boost, built two scalable Nuxt applications, contributed to multiple mid-scale projects including CRM feature optimization, and collaborated with UX/UI teams to deliver interfaces that improved user satisfaction by 15%.",
  },
  {
    date: "Dec 2021 - Jul 2022",
    title: "Front-End Developer at Tarsim Dade Afzar",
    description:
      "Developed a CMMS that increased maintenance productivity by 25% and reduced costs by 20%, contributed to an HSE management system improving compliance and reducing incidents, enhanced real-time tracking accuracy by 20% in a beacon panel project, and collaborated with UX/UI teams to deliver user-friendly interfaces that boosted adoption by 20% and satisfaction by 10%.",
  },
];

const jobRefs = ref([]);

onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "-translate-x-8");
            entry.target.classList.add("opacity-100", "translate-x-0");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% visible
    );

    jobRefs.value.forEach((job) => observer.observe(job));
  });
});
</script>
