<script setup lang="ts">
import {type VueWrapperProps} from "@visuallyjs/browser-ui-vue"
import {uuid, Node} from "@visuallyjs/browser-ui"

const {model, vertex, data} = defineProps() as VueWrapperProps<Node>

function addChoice() {
  const p = model.addPort(vertex, {
    id: uuid(),
    label: "Result"
  })
  setTimeout(() => model.setSelection(p))
}


function inspectChoice(id: string) {
  model.setSelection((vertex).getPort(id))
}
</script>

<template>
  <div class="vjs-chatbot-test" data-vjs-target="true">
    <div class="vjs-delete" @click="model.removeNode(vertex)"></div>
    <span style="padding:0.5rem">{{ data.message }}</span>
    <div class="vjs-choice-add" @click="addChoice"></div>
    <div v-for="c in data.choices" :key="c.id" class="vjs-chatbot-choice-option" data-vjs-source="true" data-vjs-port-type="choice" :data-vjs-port="c.id" @click="inspectChoice(c.id)">
      {{ c.label }}
      <div class="vjs-choice-delete" @click="model.removePort(vertex, c.id)"></div>
    </div>
  </div>
</template>
