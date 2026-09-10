<script setup lang="ts">
import {computed, ref } from "vue";
import { isNode, isPort} from "@visuallyjs/browser-ui";
import { InspectorComponent } from "@visuallyjs/browser-ui-vue";
import {
  ACTION_TEST, ACTION_MESSAGE, ACTION_CHOICE, ACTION_INPUT, ACTION_AI, START, END
} from "../constants";

const CHOICE_PORT = "choicePort";
const EDGE = "edge";

const current = ref(null)
const currentType = computed(() => {
  if (current == null) {
    return null
  } else
    return isNode(current.value) ? current.value.data.type : isPort(current.value) ? CHOICE_PORT : EDGE;
});

</script>

<template>
  <InspectorComponent v-model="current">
    <div v-if="currentType === ''"></div>
    <div v-else-if="currentType === START"></div>
    <div v-else-if="currentType === END"></div>

    <div v-else-if="currentType === ACTION_MESSAGE" class="vjs-chatbot-inspector">
      <span>Message:</span>
      <input type="text" vjs-att="message" placeholder="message" vjs-focus="true" />
    </div>

    <div v-else-if="currentType === ACTION_CHOICE" class="vjs-chatbot-inspector">
      <span>Message:</span>
      <input type="text" vjs-att="message" placeholder="message" vjs-focus="true" />
    </div>

    <div v-else-if="currentType === ACTION_TEST" class="vjs-chatbot-inspector">
      <span>Message:</span>
      <input type="text" vjs-att="message" placeholder="message" vjs-focus="true" />
    </div>

    <div v-else-if="currentType === ACTION_AI" class="vjs-chatbot-inspector">
      <span>Node Label:</span>
      <input type="text" vjs-att="label" placeholder="Analyze & Respond"/>
      <span>Model Selection:</span>
      <select vjs-att="model">
        <option value="gpt-4o">gpt-4o</option>
        <option value="gpt-4o-mini">gpt-4o-mini</option>
        <option value="claude-3-5-sonnet">claude-3-5-sonnet</option>
        <option value="custom-llm-api">custom-llm-api</option>
      </select>
      <span>System Prompt:</span>
      <textarea vjs-att="systemPrompt" rows="3"></textarea>
      <span>User Prompt / Input Binding:</span>
      <textarea vjs-att="userPrompt" rows="3"></textarea>
      <span>Temperature:</span>
      <input type="range" vjs-att="temperature" min="0" max="1" step="0.1"/>
      <span>Max Tokens:</span>
      <input type="number" vjs-att="maxTokens"/>
      <span>Output Variable:</span>
      <input type="text" vjs-att="outputVariable"/>
    </div>

    <div v-else-if="currentType === ACTION_INPUT" class="vjs-chatbot-inspector">
      <span>Message:</span>
      <input type="text" vjs-att="message" placeholder="message" />
      <span>Prompt:</span>
      <input type="text" vjs-att="prompt" placeholder="prompt" />
    </div>

    <div v-else-if="currentType === CHOICE_PORT" class="vjs-chatbot-inspector">
      <span>Label:</span>
      <input type="text" vjs-att="label" vjs-focus="true" placeholder="enter label..." />
    </div>

    <div v-else-if="currentType === EDGE" class="vjs-chatbot-inspector">
      <div>Label</div>
      <input type="text" vjs-att="label" vjs-focus="true" />
    </div>
  </InspectorComponent>
</template>
