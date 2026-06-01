<script setup lang="ts">
import { ref } from "vue";
import { isNode, isPort, type Base } from "@visuallyjs/browser-ui";
import { InspectorComponent } from "@visuallyjs/browser-ui-vue";
import {
  ACTION_TEST, ACTION_MESSAGE, ACTION_CHOICE, ACTION_INPUT, START, END
} from "../constants";

const CHOICE_PORT = "choicePort";
const EDGE = "edge";

const currentType = ref('');

const renderEmptyContainer = () => {
  currentType.value = '';
};

const refresh = (obj: Base) => {
  currentType.value = isNode(obj) ? obj.data.type : isPort(obj) ? CHOICE_PORT : EDGE;
};
</script>

<template>
  <InspectorComponent :refresh="refresh" :renderEmptyContainer="renderEmptyContainer">
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
