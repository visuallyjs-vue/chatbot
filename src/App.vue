<script setup>
import {
    SurfaceProvider,
    SurfaceComponent,
    ControlsComponent,
    MiniviewComponent
} from "@visuallyjs/browser-ui-vue"

import renderOptions from './render-options'
import viewOptions from './view-options'
import modelOptions from './model-options'
import PaletteComponent from "./components/PaletteComponent.vue";
import InspectorComponent from './components/InspectorComponent.vue'

defineProps({
  url: {
    type: String,
    default: "/dataset.json"
  },
  hidePaletteAndInspector: {
      type: Boolean,
      default: false
  }
})

/**
 *
 * @param vertex
 * @return {*}
 */
function miniviewType(vertex) {
  return vertex.type
}

</script>

<template>
    <SurfaceProvider>
        <div class="vjs-chatbot-canvas">
            <SurfaceComponent :renderOptions="renderOptions" :modelOptions="modelOptions" :url="url"
                              :viewOptions="viewOptions"/>
            <ControlsComponent/>
            <MiniviewComponent :typeFunction="miniviewType"/>
        </div>
        <div v-if="!hidePaletteAndInspector" class="vjs-chatbot-rhs">
            <PaletteComponent/>
            <InspectorComponent/>
        </div>
    </SurfaceProvider>
</template>

