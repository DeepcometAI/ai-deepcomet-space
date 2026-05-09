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
          <TextTypewriter text="Aurelia Compiler & MLIR" />
        </h1>
        <p class="text-xl text-silver-300 max-w-2xl mx-auto">
          A deep dive into the MLIR lowering process and build infrastructure.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <AnimatedCard>
            <h2 class="font-display font-bold text-3xl text-gradient mb-6">Technical Deep Dive: Aurelia's Compiler</h2>
            <p class="text-silver-400 mb-6">
              The Aurelia compiler is a sophisticated multi-stage toolchain that leverages the latest 
              advancements in LLVM and MLIR to provide a bridge between mathematical research and hardware execution.
            </p>

            <h3 class="font-display font-semibold text-2xl text-silver-100 mb-4">The MLIR Lowering Process</h3>
            <p class="text-silver-400 mb-4">
              Aurelia's compiler architecture is built on the principle of progressive lowering. The source code 
              is first parsed into an Abstract Syntax Tree (AST), which is then lowered into a series of MLIR dialects:
            </p>
            <ol class="list-decimal list-inside text-silver-400 space-y-2 mb-6">
              <li><span class="text-silver-200">Aurelia High-Level Dialect (AHL):</span> Captures the intent of the programmer, including tensor shapes, differentiation attributes, and parallel loop constructs</li>
              <li><span class="text-silver-200">Tensor Dialect:</span> Performs shape inference and symbolic verification. Ensures that all tensor operations are mathematically sound</li>
              <li><span class="text-silver-200">Linalg and MemRef Dialects:</span> Maps tensor operations to specific memory buffers (MemRefs). This is where the Neuro-Linear Predictive Allocator inserts pre-fetch hints</li>
              <li><span class="text-silver-200">Tiling and Fusion:</span> Breaks down large tensor operations into smaller "tiles" that fit into the NPU's local memory. Fuses consecutive operators (e.g., convolution + ReLU) into a single execution kernel</li>
              <li><span class="text-silver-200">LLVM IR and Machine Code:</span> The optimized MLIR is lowered to LLVM Intermediate Representation, compiled into machine code for specific GPU or NPU targets</li>
            </ol>

            <h3 class="font-display font-semibold text-2xl text-silver-100 mb-4">Formal Verification</h3>
            <p class="text-silver-400">
              A unique feature of the Aurelia language is its "Paper-First" verification capability. DeepcometAI 
              has introduced attributes like @paper, @invariant, and @experiment to allow researchers to encode 
              mathematical proofs directly into the source code.
            </p>
          </AnimatedCard>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Aurelia Compiler & MLIR | Deepcomet AI'
})
</script>
