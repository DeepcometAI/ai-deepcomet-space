<template>
  <div class="pb-20">
    <!-- Enhanced Background -->
    <CometBackground :star-count="60" />
    
    <!-- Header -->
    <section class="py-24 relative overflow-hidden">
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient mb-6">
          <TextTypewriter text="Master Roadmap" />
        </h1>
        <p class="text-xl text-silver-300 max-w-2xl mx-auto">
          A multi-phase strategy to achieve Vertical AI Integration. 
          From language foundations to distributed infrastructure.
        </p>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-6">
        <!-- Phase 1 -->
        <ScrollReveal direction="left" class="relative mb-16">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="md:w-48 flex-shrink-0">
              <div class="flex items-center gap-3">
                <div class="w-4 h-4 rounded-full bg-comet-500 animate-pulse"></div>
                <span class="font-display font-bold text-comet-400">2026</span>
              </div>
              <div class="ml-1.5 mt-2 w-1 h-32 bg-gradient-to-b from-comet-500 to-transparent rounded-full hidden md:block"></div>
            </div>
            
            <AnimatedCard class="flex-1 border-l-4 border-comet-500 !rounded-2xl">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-comet-600/20 text-comet-300 rounded-full mb-3">In Progress</span>
                  <h2 class="font-display font-bold text-2xl text-silver-100">Phase 1: Aurelia Foundation</h2>
                </div>
                <div class="w-14 h-14 rounded-xl bg-comet-600/20 flex items-center justify-center">
                  <svg class="w-7 h-7 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
              </div>
              
              <p class="text-silver-400 mb-6">
                Alpha compiler, Lexer, Parser, and MLIR Integration. Building the foundation 
                of the AI-native programming language.
              </p>
              
              <div class="space-y-3">
                <h4 class="font-display font-semibold text-silver-200 text-sm uppercase tracking-wider">Key Milestones</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-silver-300">
                    <svg class="w-5 h-5 text-comet-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Implement core lexer and parser in Rust</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-300">
                    <svg class="w-5 h-5 text-comet-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Define AST and intermediate representation</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-300">
                    <svg class="w-5 h-5 text-comet-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Integrate with MLIR for initial code generation</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-300">
                    <svg class="w-5 h-5 text-silver-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Release v0.1.0-alpha to early adopters</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </ScrollReveal>

        <!-- Phase 2 -->
        <ScrollReveal direction="right" class="relative mb-16">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="md:w-48 flex-shrink-0">
              <div class="flex items-center gap-3">
                <div class="w-4 h-4 rounded-full bg-glow-purple/50"></div>
                <span class="font-display font-bold text-glow-purple/70">2026-2027</span>
              </div>
              <div class="ml-1.5 mt-2 w-1 h-32 bg-gradient-to-b from-glow-purple/50 to-transparent rounded-full hidden md:block"></div>
            </div>
            
            <AnimatedCard class="flex-1 border-l-4 border-glow-purple/50 !rounded-2xl">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-glow-purple/20 text-glow-purple/70 rounded-full mb-3">Upcoming</span>
                  <h2 class="font-display font-bold text-2xl text-silver-100">Phase 2: Zenith Kernel</h2>
                </div>
                <div class="w-14 h-14 rounded-xl bg-glow-purple/20 flex items-center justify-center">
                  <svg class="w-7 h-7 text-glow-purple/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                  </svg>
                </div>
              </div>
              
              <p class="text-silver-400 mb-6">
                Probabilistic scheduling and AI-Watchdog immune system. The mathematically 
                proven secure foundation for AI-native computing.
              </p>
              
              <div class="space-y-3">
                <h4 class="font-display font-semibold text-silver-200 text-sm uppercase tracking-wider">Key Milestones</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Develop probabilistic task scheduler</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Implement AI-Watchdog for zero-day exploit detection</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Establish secure IPC mechanisms</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Initial boot on reference NPU hardware</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </ScrollReveal>

        <!-- Phase 3 -->
        <ScrollReveal direction="left" class="relative mb-16">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="md:w-48 flex-shrink-0">
              <div class="flex items-center gap-3">
                <div class="w-4 h-4 rounded-full bg-glow-cyan/50"></div>
                <span class="font-display font-bold text-glow-cyan/70">2027-2028</span>
              </div>
              <div class="ml-1.5 mt-2 w-1 h-32 bg-gradient-to-b from-glow-cyan/50 to-transparent rounded-full hidden md:block"></div>
            </div>
            
            <AnimatedCard class="flex-1 border-l-4 border-glow-cyan/50 !rounded-2xl">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-glow-cyan/20 text-glow-cyan/70 rounded-full mb-3">Planned</span>
                  <h2 class="font-display font-bold text-2xl text-silver-100">Phase 3: SkyOS & Generative UI</h2>
                </div>
                <div class="w-14 h-14 rounded-xl bg-glow-cyan/20 flex items-center justify-center">
                  <svg class="w-7 h-7 text-glow-cyan/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
              
              <p class="text-silver-400 mb-6">
                Large Action Models (LAM) and Semantic File System. The first truly 
                AI-native operating system with generative interfaces.
              </p>
              
              <div class="space-y-3">
                <h4 class="font-display font-semibold text-silver-200 text-sm uppercase tracking-wider">Key Milestones</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Integrate Large Action Models into the core OS</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Develop the Semantic File System for context-aware storage</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Create the Generative UI framework for dynamic interfaces</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Developer preview release of SkyOS</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </ScrollReveal>

        <!-- Phase 4 -->
        <ScrollReveal direction="right" class="relative mb-16">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="md:w-48 flex-shrink-0">
              <div class="flex items-center gap-3">
                <div class="w-4 h-4 rounded-full bg-glow-amber/50"></div>
                <span class="font-display font-bold text-glow-amber/70">2028-2029</span>
              </div>
              <div class="ml-1.5 mt-2 w-1 h-32 bg-gradient-to-b from-glow-amber/50 to-transparent rounded-full hidden md:block"></div>
            </div>
            
            <AnimatedCard class="flex-1 border-l-4 border-glow-amber/50 !rounded-2xl">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-glow-amber/20 text-glow-amber/70 rounded-full mb-3">Planned</span>
                  <h2 class="font-display font-bold text-2xl text-silver-100">Phase 4: DeepComet Model Family</h2>
                </div>
                <div class="w-14 h-14 rounded-xl bg-glow-amber/20 flex items-center justify-center">
                  <svg class="w-7 h-7 text-glow-amber/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
              </div>
              
              <p class="text-silver-400 mb-6">
                Deployment of Prime, Zenith, Code, and Mobile tiers. A complete suite of 
                models optimized for every layer of the stack.
              </p>
              
              <div class="space-y-3">
                <h4 class="font-display font-semibold text-silver-200 text-sm uppercase tracking-wider">Key Milestones</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Train and release DeepComet-Prime (Trillion-parameter)</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Optimize DeepComet-Zenith for kernel-level operations</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Release DeepComet-Code for Aurelia synthesis</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-600 flex-shrink-0 mt-0.5"></span>
                    <span>Deploy DeepComet-Mobile for edge devices</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </ScrollReveal>

        <!-- Phase 5 -->
        <ScrollReveal direction="left" class="relative">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="md:w-48 flex-shrink-0">
              <div class="flex items-center gap-3">
                <div class="w-4 h-4 rounded-full bg-silver-600/50"></div>
                <span class="font-display font-bold text-silver-500">2029-2030+</span>
              </div>
            </div>
            
            <AnimatedCard class="flex-1 border-l-4 border-silver-600/50 !rounded-2xl">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-silver-700/50 text-silver-400 rounded-full mb-3">Future</span>
                  <h2 class="font-display font-bold text-2xl text-silver-100">Phase 5: SkyCloud Infrastructure</h2>
                </div>
                <div class="w-14 h-14 rounded-xl bg-silver-700/30 flex items-center justify-center">
                  <svg class="w-7 h-7 text-silver-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  </svg>
                </div>
              </div>
              
              <p class="text-silver-400 mb-6">
                Decentralized cloud network sharing idle NPU power. Democratizing access 
                to AI compute through peer-to-peer infrastructure.
              </p>
              
              <div class="space-y-3">
                <h4 class="font-display font-semibold text-silver-200 text-sm uppercase tracking-wider">Key Milestones</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-700 flex-shrink-0 mt-0.5"></span>
                    <span>Design peer-to-peer NPU sharing protocol</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-700 flex-shrink-0 mt-0.5"></span>
                    <span>Implement secure execution enclaves for shared workloads</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-700 flex-shrink-0 mt-0.5"></span>
                    <span>Launch SkyCloud tokenomics and incentive structure</span>
                  </li>
                  <li class="flex items-start gap-3 text-silver-400">
                    <span class="w-5 h-5 rounded-full border border-silver-700 flex-shrink-0 mt-0.5"></span>
                    <span>Global network beta testing</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Summary Stats -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="scale">
          <AnimatedCard>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div class="font-display font-bold text-3xl md:text-4xl text-comet-400 mb-2">5</div>
                <p class="text-silver-400 text-sm">Major Phases</p>
              </div>
              <div>
                <div class="font-display font-bold text-3xl md:text-4xl text-glow-purple mb-2">7+</div>
                <p class="text-silver-400 text-sm">Core Technologies</p>
              </div>
              <div>
                <div class="font-display font-bold text-3xl md:text-4xl text-glow-cyan mb-2">1T+</div>
                <p class="text-silver-400 text-sm">Parameters (Prime)</p>
              </div>
              <div>
                <div class="font-display font-bold text-3xl md:text-4xl text-glow-amber mb-2">∞</div>
                <p class="text-silver-400 text-sm">Possibilities</p>
              </div>
            </div>
          </AnimatedCard>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Roadmap | Deepcomet AI'
})
</script>
