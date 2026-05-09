<template>
  <div class="pb-20">
    <!-- Enhanced Background -->
    <CometBackground :star-count="70" />
    
    <!-- Header Section -->
    <section class="py-24 relative overflow-hidden">
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient mb-6">
          <TextTypewriter text="Our Mission" />
        </h1>
        <p class="text-xl text-silver-300 max-w-2xl mx-auto">
          Deepcomet AI is redefining neural computation and accelerating civilization's future 
          through Vertical AI Integration.
        </p>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <h2 class="font-display font-bold text-3xl text-silver-100 mb-6">The Vision</h2>
            <div class="space-y-4 text-silver-300 text-lg leading-relaxed">
              <p>
                We believe AI shouldn't be an afterthought bolted onto existing systems. 
                It should be the fundamental substrate from which all computation emerges.
              </p>
              <p>
                From the <span class="text-comet-400 font-medium">Aurelia</span> programming language 
                that treats neural networks as first-class citizens, to the 
                <span class="text-comet-400 font-medium">Zenith Kernel</span> with its probabilistic 
                scheduling and AI-Watchdog immune system, we're building the complete vertical stack.
              </p>
              <p>
                The future isn't AI running on traditional operating systems. It's AI-native systems 
                that understand, anticipate, and optimize for intelligent workloads from the silicon up.
              </p>
            </div>
            </div>
            
            <ScrollReveal direction="right" :delay="2">
              <AnimatedCard>
                <div class="aspect-square relative">
                  <!-- Orbital Visualization -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-32 h-32 rounded-full bg-gradient-to-br from-comet-600/30 to-glow-cyan/30 flex items-center justify-center">
                      <div class="w-16 h-16 rounded-full bg-gradient-to-br from-comet-500 to-glow-cyan flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <!-- Orbital Rings -->
                  <div class="absolute inset-4 border border-comet-500/20 rounded-full animate-spin" style="animation-duration: 20s;"></div>
                  <div class="absolute inset-8 border border-glow-cyan/20 rounded-full animate-spin" style="animation-duration: 15s; animation-direction: reverse;"></div>
                  <div class="absolute inset-12 border border-glow-purple/20 rounded-full animate-spin" style="animation-duration: 10s;"></div>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Built for the AI Era -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="glass-panel p-8 md:p-12 rounded-3xl">
          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h2 class="font-display font-bold text-3xl text-gradient mb-6">Built for the AI Era</h2>
              <p class="text-silver-300 mb-6">
                Aurelia isn't just another language. It treats neural networks as first-class citizens. 
                With native tensor primitives, automatic differentiation, and direct MLIR compilation, 
                you write less code and get more performance.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center gap-3 text-silver-300">
                  <span class="w-6 h-6 rounded-full bg-comet-600/20 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  <span>First-class Tensors: No more clunky library wrappers</span>
                </li>
                <li class="flex items-center gap-3 text-silver-300">
                  <span class="w-6 h-6 rounded-full bg-comet-600/20 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  <span>Memory Safety: Compile-time guarantees without a garbage collector</span>
                </li>
                <li class="flex items-center gap-3 text-silver-300">
                  <span class="w-6 h-6 rounded-full bg-comet-600/20 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  <span>Direct NPU Targeting: Bypass CPU bottlenecks entirely</span>
                </li>
              </ul>
            </div>
            
            <div class="font-mono text-sm">
              <div class="bg-space-900/80 rounded-xl p-6 border border-silver-700/30">
                <div class="text-silver-500 mb-2">// Aurelia Language Example</div>
                <pre class="text-silver-300 overflow-x-auto"><code><span class="text-glow-purple">fn</span> <span class="text-comet-400">forward_pass</span>(x: <span class="text-glow-cyan">Tensor</span>&lt;<span class="text-glow-amber">f32</span>, <span class="text-glow-amber">2</span>&gt;) -> <span class="text-glow-cyan">Tensor</span>&lt;<span class="text-glow-amber">f32</span>, <span class="text-glow-amber">2</span>&gt; {
  <span class="text-silver-500">// Native tensor operations</span>
  <span class="text-glow-purple">let</span> weights = <span class="text-glow-cyan">Tensor</span>::<span class="text-comet-400">random</span>([<span class="text-glow-amber">256</span>, <span class="text-glow-amber">512</span>]);
  <span class="text-glow-purple">let</span> biases = <span class="text-glow-cyan">Tensor</span>::<span class="text-comet-400">zeros</span>([<span class="text-glow-amber">512</span>]);
  
  <span class="text-silver-500">// Automatic differentiation built-in</span>
  <span class="text-glow-purple">let</span> output = (x @ weights) + biases;
  <span class="text-glow-purple">return</span> output.<span class="text-comet-400">relu</span>();
}

<span class="text-glow-purple">@target</span>(npu=<span class="text-glow-amber">"qualcomm-hexagon"</span>)
<span class="text-glow-purple">fn</span> <span class="text-comet-400">main</span>() {
  <span class="text-glow-purple">let</span> input = <span class="text-glow-cyan">Tensor</span>::<span class="text-comet-400">ones</span>([<span class="text-glow-amber">128</span>, <span class="text-glow-amber">256</span>]);
  <span class="text-glow-purple">let</span> result = <span class="text-comet-400">forward_pass</span>(input);
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="font-display font-bold text-3xl text-gradient text-center mb-12">Our Principles</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal direction="up" :delay="1">
            <AnimatedCard>
            <div class="w-12 h-12 rounded-xl bg-comet-600/20 flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="font-display font-semibold text-lg text-silver-100 mb-2">Innovation</h3>
              <p class="text-silver-400 text-sm">Pushing the boundaries of what's possible in AI-native systems.</p>
            </AnimatedCard>
          </ScrollReveal>

          <ScrollReveal direction="up" :delay="2">
            <AnimatedCard>
            <div class="w-12 h-12 rounded-xl bg-glow-purple/20 flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-glow-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="font-display font-semibold text-lg text-silver-100 mb-2">Security</h3>
              <p class="text-silver-400 text-sm">Mathematical proofs and AI-Watchdog for intrinsic safety.</p>
            </AnimatedCard>
          </ScrollReveal>

          <ScrollReveal direction="up" :delay="3">
            <AnimatedCard>
            <div class="w-12 h-12 rounded-xl bg-glow-cyan/20 flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-glow-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="font-display font-semibold text-lg text-silver-100 mb-2">Performance</h3>
              <p class="text-silver-400 text-sm">Zero-latency scheduling and direct NPU compilation.</p>
            </AnimatedCard>
          </ScrollReveal>

          <ScrollReveal direction="up" :delay="4">
            <AnimatedCard>
            <div class="w-12 h-12 rounded-xl bg-glow-amber/20 flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-glow-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="font-display font-semibold text-lg text-silver-100 mb-2">Community</h3>
              <p class="text-silver-400 text-sm">Building the future together with open standards and collaboration.</p>
            </AnimatedCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About | Deepcomet AI'
})
</script>
