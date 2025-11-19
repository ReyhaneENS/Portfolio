<template>
  <section ref="socialRef" class="px-4 py-10" id="social">
    <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Social</h2>
    <div class="flex justify-center md:justify-start gap-4 mt-2">
      <a
        v-for="(social, index) in socialLinks"
        :key="index"
        :href="social.href"
        :aria-label="social.name"
        target="_blank"
        rel="noopener noreferrer"
        class="opacity-0 -translate-y-6 transition-all duration-700"
        :style="{ transitionDelay: `${index * 100}ms` }"
        ref="socialRefs"
      >
        <svg
          aria-hidden="true"
          class="h-8 w-8 transition duration-300 hover:fill-(--primary)"
          fill="#292348"
          viewBox="0 0 24 24"
          v-html="social.svg"
        ></svg>
        <span class="sr-only">{{ social.name }}</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const socialLinks = [
  {
    name: "Telegram",
    href: "https://t.me/ReyhaneEbrahiminasab",
    svg: `<path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"></path>`,
  },
  {
    name: "GitHub",
    href: "https://github.com/ReyhaneENS",
    svg: `<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .267.18.577.688.48A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fill-rule="evenodd"></path>`,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/reyhaneh-ebrahiminasab",
    svg: `<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>`,
  },
];

const socialRefs = ref([]);

onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "-translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    socialRefs.value.forEach((el) => observer.observe(el));
  });
});
</script>
