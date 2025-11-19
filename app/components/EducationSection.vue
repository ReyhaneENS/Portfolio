<template>
  <section ref="educationRef" class="px-4 py-10" id="education">
    <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">
      Education
    </h2>
    <div class="relative pl-6 border-l-2 border-solid border-[#292348]">
      <div
        v-for="(edu, idx) in education"
        :key="idx"
        ref="eduRefs"
        class="ml-4 mb-10 opacity-0 -translate-x-8 transition-all duration-700"
        :style="{ transitionDelay: `${idx * 150}ms` }"
      >
        <div
          class="absolute w-4 h-4 bg-(--primary) rounded-full mt-1.5 -left-[49px] border-2 border-solid border-[#131022]"
        ></div>
        <time class="mb-1 text-sm font-normal leading-none text-[#9b92c9]">{{ edu.date }}</time>
        <h3 class="text-lg font-semibold text-white mt-1">{{ edu.degree }}</h3>
        <p class="mt-2 text-base font-normal text-[#9b92c9]">{{ edu.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const education = [
  {
    date: "Graduated 2025",
    degree: "BSc in Computer Software Engineering - Islamic Azad University Central Tehran Branch",
    description:
      "Focused on advanced software engineering principles, system architecture, and modern development methodologies with an emphasis on building scalable applications.",
  },
  {
    date: "Graduated 2023",
    degree: "AS in Computer Software Engineering - Shariaty Technical and Vocational University",
    description:
      "Focused on foundational software development skills, programming fundamentals, and practical problem-solving in real-world engineering scenarios.",
  },
];

const eduRefs = ref([]);

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

    eduRefs.value.forEach((el) => observer.observe(el));
  });
});
</script>
