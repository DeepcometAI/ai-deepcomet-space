<template>
  <span class="relative inline-block">
    <span v-if="!isTypingComplete || keepCursor" class="typing-text">{{ displayText }}</span>
    <span v-else>{{ text }}</span>
    <span 
      v-if="showCursor && (isTyping || keepCursor || !isTypingComplete)" 
      class="cursor"
      :class="{ 'cursor-blink': !isTyping }"
    >|</span>
  </span>
</template>

<script setup lang="ts">
interface Props {
  text: string
  speed?: number
  delay?: number
  showCursor?: boolean
  keepCursor?: boolean
  trigger?: 'mount' | 'hover' | 'in-view'
}

const props = withDefaults(defineProps<Props>(), {
  speed: 50,
  delay: 0,
  showCursor: true,
  keepCursor: true,
  trigger: 'mount'
})

const displayText = ref('')
const isTyping = ref(false)
const isTypingComplete = ref(false)
let typeInterval: ReturnType<typeof setInterval> | null = null

const startTyping = () => {
  if (isTyping.value || isTypingComplete.value) return
  
  isTyping.value = true
  displayText.value = ''
  let currentIndex = 0
  
  typeInterval = setInterval(() => {
    if (currentIndex < props.text.length) {
      displayText.value += props.text[currentIndex]
      currentIndex++
    } else {
      isTyping.value = false
      isTypingComplete.value = true
      if (typeInterval) {
        clearInterval(typeInterval)
        typeInterval = null
      }
    }
  }, props.speed)
}

const resetTyping = () => {
  if (typeInterval) {
    clearInterval(typeInterval)
    typeInterval = null
  }
  displayText.value = ''
  isTyping.value = false
  isTypingComplete.value = false
}

onMounted(() => {
  if (props.trigger === 'mount') {
    setTimeout(startTyping, props.delay)
  }
})

onUnmounted(() => {
  resetTyping()
})

defineExpose({
  startTyping,
  resetTyping
})
</script>

<style scoped>
.typing-text {
  background: linear-gradient(135deg, #0080ff 0%, #00f5ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cursor {
  color: #00f5ff;
  font-weight: 100;
  margin-left: 2px;
}

.cursor-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
