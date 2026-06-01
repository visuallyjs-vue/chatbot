<script setup lang="ts">
import {BrowserUIVueModel} from "@visuallyjs/browser-ui-vue"
import {Node} from "@visuallyjs/browser-ui"

defineProps({
  model:BrowserUIVueModel,
  obj:Node
})
</script>

<template>
  <div class="vjs-chatbot-input" data-vjs-target="true">
    <div class="vjs-delete" @click="model.removeNode(obj)"></div>
    {{ obj.data.message }}
    <textarea rows="5" cols="10" :placeholder="obj.data.prompt"></textarea>
    <div class="vjs-chatbot-connect" data-vjs-source="true"></div>
  </div>
</template>
