<template>
  <section class="px-4 py-10" id="cv">
    <div
      class="text-center p-8 md:p-12 bg-[#1c1833] rounded-xl border border-solid border-[#292348]"
    >
      <h2 class="text-3xl font-bold text-white">Interested in my work?</h2>
      <p class="text-[#9b92c9] mt-2 mb-6 max-w-2xl mx-auto">
        I'm currently available for freelance and remote work and open to discussing new projects.
        Feel free to download my CV or get in touch via email.
      </p>
      <a
        class="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-(--primary) text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity opacity-0 -translate-y-6"
        href="/ReyhaneEbrahiminasabCV.pdf"
        download
        ref="cvButton"
        >Download CV
      </a>

      <p class="text-[#9b92c9] mt-6 text-sm">
        or email me at
        <a class="text-(--primary) hover:underline" href="mailto:ebrahiminsb@gmail.com"
          >ebrahiminsb@gmail.com</a
        >
      </p>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, nextTick } from "vue";

const cvButton = ref(null);

onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "-translate-y-6");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (cvButton.value) observer.observe(cvButton.value);
  });
});
</script>
