<script setup lang="ts">
import { defineProps } from "vue";
import {BrowserUIVueModel, type VueWrapperProps} from "@visuallyjs/browser-ui-vue"
import {Node} from "@visuallyjs/browser-ui"

const {model, vertex, data} = defineProps() as VueWrapperProps<Node>

</script>

<template>
  <div class="vjs-chatbot-message" data-vjs-target="true">
    <div class="vjs-delete" @click="model.removeNode(vertex.id)"></div>
    {{ data.message }}
    <div class="vjs-chatbot-connect" data-vjs-source="true"></div>
  </div>
</template>
