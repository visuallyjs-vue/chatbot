<script setup lang="ts">
import {BrowserUIVueModel} from "@visuallyjs/browser-ui-vue"
import {uuid, Node} from "@visuallyjs/browser-ui"

const props = defineProps({
  model:BrowserUIVueModel,
  obj:Node
})
function addChoice() {
  const p = props.model.addPort(props.obj, {
    id: uuid(),
    label: "Result"
  })
  setTimeout(() => props.model.setSelection(p))
}

function removeChoice(id: string) {
  props.model.removePort(props.obj, id)
}

function inspectChoice(id: string) {
  props.model.setSelection((props.obj).getPort(id))
}
</script>

<template>
  <div class="vjs-chatbot-test" data-vjs-target="true">
    <div class="vjs-delete" @click="model.removeNode(obj)"></div>
    <span style="padding:0.5rem">{{ obj.data.message }}</span>
    <div class="vjs-choice-add" @click="addChoice"></div>
    <div v-for="c in obj.data.choices" :key="c.id" class="vjs-chatbot-choice-option" data-vjs-source="true" data-vjs-port-type="choice" :data-vjs-port="c.id" @click="inspectChoice(c.id)">
      {{ c.label }}
      <div class="vjs-choice-delete" @click="removeChoice(c.id)"></div>
    </div>
  </div>
</template>
