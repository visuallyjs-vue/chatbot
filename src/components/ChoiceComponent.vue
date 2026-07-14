<script setup lang="ts">
import { uuid, Node } from "@visuallyjs/browser-ui"

import { type VueWrapperProps} from "@visuallyjs/browser-ui-vue"

const {model, vertex} = defineProps() as VueWrapperProps<Node>

function addChoice() {
  const p = model.addPort(vertex, {
    id: uuid()
  })
  setTimeout(() => model.setSelection(p))
}

function inspectChoice(id: string) {
  model.setSelection(vertex.getPort(id))
}
</script>

<template>
  <div class="vjs-chatbot-choice" data-vjs-target="true">
    <div class="vjs-delete" @click="model.removeNode(vertex)"></div>
    <span style="padding:0.5rem">{{ obj.data.message }}</span>
    <div class="vjs-choice-add" @click="addChoice"></div>
    <div v-for="c in obj.data.choices" :key="c.id" class="vjs-chatbot-choice-option" data-vjs-source="true" data-vjs-port-type="choice" :data-vjs-port="c.id" @click="inspectChoice(c.id)">
      {{ c.label }}
      <div class="vjs-choice-delete" @click="model.removePort(vertex, c.id)"></div>
    </div>
  </div>
</template>
