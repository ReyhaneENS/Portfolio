<template>
  <div
    class="relative flex min-h-screen w-full flex-col bg-(--color-background-dark) group/design-root overflow-x-hidden font-display"
  >
    <div class="layout-container flex h-full grow flex-col">
      <div class="flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <Header />

          <main class="flex flex-col gap-16 md:gap-24 mt-10">
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
            <TechnologiesSection />
            <SocialSection />
            <CVSection />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutSection from "~/components/AboutSection.vue";
import CVSection from "~/components/CVSection.vue";
import EducationSection from "~/components/EducationSection.vue";
import ExperienceSection from "~/components/ExperienceSection.vue";
import Header from "~/components/Header.vue";
import ProjectsSection from "~/components/ProjectsSection.vue";
import SocialSection from "~/components/SocialSection.vue";
import TechnologiesSection from "~/components/TechnologiesSection.vue";
</script>
