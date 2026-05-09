<template>
  <div class="pb-20">
    <!-- Enhanced Background -->
    <CometBackground :star-count="60" />
    
    <!-- Header -->
    <section class="py-24 relative overflow-hidden">
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <NuxtLink to="/docs" class="inline-flex items-center gap-2 text-silver-400 hover:text-comet-400 mb-6 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Docs
        </NuxtLink>
        <h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient mb-6">
          <TextTypewriter text="SkyOS & Generative Interfaces" />
        </h1>
        <p class="text-xl text-silver-300 max-w-2xl mx-auto">
          The world's first Generative Operating System powered by Large Action Models.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <AnimatedCard>
            <h2 class="font-display font-bold text-3xl text-gradient mb-6">Generative OS Concepts</h2>
            <p class="text-silver-400 mb-6">
              The shift toward a Generative Operating System like SkyOS represents a fundamental change in 
              how humans interact with digital systems. This evolution is driven by the emergence of Large 
              Action Models (LAMs) and the Semantic File System.
            </p>

            <h3 class="font-display font-semibold text-2xl text-silver-100 mb-4">From LLM to LAM: The Architecture of Action</h3>
            <p class="text-silver-400 mb-4">
              While Large Language Models (LLMs) have demonstrated an impressive ability to understand and 
              generate text, they are essentially passive. Large Action Models (LAMs) bridge this gap by 
              integrating advanced reasoning with the ability to navigate and manipulate digital interfaces.
            </p>
            <p class="text-silver-400 mb-4">A LAM in SkyOS operates through a multi-step process:</p>
            <ol class="list-decimal list-inside text-silver-400 space-y-2 mb-6">
              <li><span class="text-silver-200">Intent Extraction:</span> The user provides a high-level command (e.g., "Schedule a meeting with the marketing team")</li>
              <li><span class="text-silver-200">Task Decomposition:</span> The LAM breaks the command into smaller sub-tasks</li>
              <li><span class="text-silver-200">Interface Interaction:</span> The LAM interacts with various APIs or navigates application interfaces by "seeing" the screen and simulating clicks</li>
              <li><span class="text-silver-200">Dynamic UI Synthesis:</span> SkyOS generates a temporary interface to keep the user informed and ask for confirmation if necessary</li>
            </ol>

            <h3 class="font-display font-semibold text-2xl text-silver-100 mb-4">The Semantic File System</h3>
            <p class="text-silver-400">
              The Semantic File System (SFS) in SkyOS treats all data as "Knowledge Vectors." This approach is 
              similar to the vector databases used in modern Retrieval-Augmented Generation (RAG) systems but 
              integrated at the OS level. Retrieval is based on semantic meaning rather than hierarchical folders. 
              The system calculates the distance between the user's query and the vectors representing each file 
              using cosine similarity.
            </p>
          </AnimatedCard>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'SkyOS & Generative Interfaces | Deepcomet AI'
})
</script>
