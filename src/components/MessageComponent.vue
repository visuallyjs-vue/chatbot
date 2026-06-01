<script setup lang="ts">
import { defineProps } from "vue";
import {BrowserUIVueModel} from "@visuallyjs/browser-ui-vue"
import {Node} from "@visuallyjs/browser-ui"

const props = defineProps({
  model:BrowserUIVueModel,
  obj:Node
})

</script>

<template>
  <div class="vjs-chatbot-message" data-vjs-target="true">
    <div class="vjs-delete" @click="props.model.removeNode(obj.id)"></div>
    {{ obj.data.message }}
    <div class="vjs-chatbot-connect" data-vjs-source="true"></div>
  </div>
</template>
