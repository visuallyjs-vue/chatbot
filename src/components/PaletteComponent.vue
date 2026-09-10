<script setup lang="ts">
import { type BrowserElement, type ObjectData } from "@visuallyjs/browser-ui"
import { PaletteComponent } from "@visuallyjs/browser-ui-vue";
import { ACTION_AI, ACTION_CHOICE, ACTION_INPUT, ACTION_MESSAGE, ACTION_TEST, nodeTypes } from "../constants";

function dataGenerator(el: BrowserElement): ObjectData {
  const type = el.getAttribute("data-vjs-type")
  const base: any = { type }
  if (type === ACTION_MESSAGE) {
    Object.assign(base, { message: "Send a message" })
  } else if (type === ACTION_INPUT) {
    Object.assign(base, { message: "Grab some input", prompt: "please enter input" })
  } else if (type === ACTION_CHOICE) {
    Object.assign(base, {
      message: "Please choose:",
      choices: [
        { id: "1", label: "Choice 1" },
        { id: "2", label: "Choice 2" },
      ]
    })
  } else if (type === ACTION_TEST) {
    Object.assign(base, {
      message: "Test",
      choices: [
        { id: "1", label: "Result 1" },
        { id: "2", label: "Result 2" },
      ]
    })
  } else if (type === ACTION_AI) {
    Object.assign(base, {
      label: "Analyze & Respond",
      model: "gpt-4o-mini",
      systemPrompt: "You are a customer support triage assistant. Summarize the user issue and maintain a polite tone.",
      userPrompt: "User input: {{last_user_message}}",
      temperature: 0.7,
      maxTokens: 256,
      outputVariable: "ai_response",
      choices: [
        { id: "out_success", label: "On Success" },
        { id: "out_error", label: "On Failure" }
      ]
    })
  }
  return base
}
</script>

<template>
  <PaletteComponent :dataGenerator="dataGenerator" class="vjs-chatbot-palette">
    <div v-for="nt in nodeTypes" :key="nt.type" class="vjs-chatbot-palette-item" :data-vjs-type="nt.type">
      {{ nt.label }}
    </div>
  </PaletteComponent>
</template>
