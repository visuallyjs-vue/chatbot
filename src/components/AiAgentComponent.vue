<script setup lang="ts">
import { Node } from "@visuallyjs/browser-ui"
import { type VueWrapperProps } from "@visuallyjs/browser-ui-vue"

const {model, vertex, data} = defineProps() as VueWrapperProps<Node>

function inspectChoice(id: string) {
  model.setSelection(vertex.getPort(id))
}
</script>

<template>
  <div class="vjs-chatbot-ai" data-vjs-target="true">
    <div class="vjs-delete" @click="model.removeNode(vertex)"></div>
    <div class="vjs-chatbot-ai-header">
      <span class="vjs-chatbot-ai-icon">✨</span>
      <span class="vjs-chatbot-ai-title">{{ data.label || 'AI Prompt / Agent' }}</span>
    </div>
    <div class="vjs-chatbot-ai-body">
      <div v-for="c in data.choices" :key="c.id" class="vjs-chatbot-choice-option" data-vjs-source="true" data-vjs-port-type="choice" :data-vjs-port="c.id" @click="inspectChoice(c.id)">
        {{ c.label }}
      </div>
    </div>
  </div>
</template>
