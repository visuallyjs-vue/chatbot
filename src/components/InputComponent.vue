<script setup lang="ts">
import {BrowserUIVueModel, type VueWrapperProps} from "@visuallyjs/browser-ui-vue"
import {Node} from "@visuallyjs/browser-ui"

const {model, vertex, data} = defineProps() as VueWrapperProps<Node>
</script>

<template>
  <div class="vjs-chatbot-input" data-vjs-target="true">
    <div class="vjs-delete" @click="model.removeNode(vertex)"></div>
    {{ data.message }}
    <textarea rows="5" cols="10" :placeholder="data.prompt"></textarea>
    <div class="vjs-chatbot-connect" data-vjs-source="true"></div>
  </div>
</template>
