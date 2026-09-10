import {
    AnchorLocations, EVENT_TAP, PlainArrowOverlay, type OverlayVisibility,
    NodeEventCallbackPayload,
    type BrowserElement,
    EdgeEventCallbackPayload,
    PortEventCallbackPayload
} from "@visuallyjs/browser-ui";

import {ACTION_AI, ACTION_CHOICE, ACTION_INPUT, ACTION_MESSAGE, ACTION_TEST, END, SELECTABLE, START} from "./constants";

import StartComponent from './components/StartComponent.vue'
import EndComponent from './components/EndComponent.vue'
import MessageComponent from './components/MessageComponent.vue'
import InputComponent from './components/InputComponent.vue'
import ChoiceComponent from './components/ChoiceComponent.vue'
import TestComponent from './components/TestComponent.vue'
import AiAgentComponent from './components/AiAgentComponent.vue'

const viewOptions = {
    nodes:{
        [SELECTABLE]:{
            events:{
                [EVENT_TAP]:(p:NodeEventCallbackPayload<BrowserElement>) => {
                    p.model.setSelection(p.obj)
                }
            }
        },
        [START]:{
            parent:SELECTABLE,
            component:StartComponent
        },
        [END]:{
            parent:SELECTABLE,
            component:EndComponent
        },
        [ACTION_MESSAGE]:{
            parent:SELECTABLE,
            component:MessageComponent
        },
        [ACTION_INPUT]:{
            parent:SELECTABLE,
            component:InputComponent
        },
        [ACTION_CHOICE]:{
            parent:SELECTABLE,
            component:ChoiceComponent
        },
        [ACTION_TEST]:{
            parent:SELECTABLE,
            component:TestComponent
        },
        [ACTION_AI]:{
            parent:SELECTABLE,
            component:AiAgentComponent
        }
    },
    edges:{
        default:{
            deleteButton:"hover" as OverlayVisibility,
            overlays:[
            {
                type:PlainArrowOverlay.type,
                options:{
                    location:1,
                    width:10,
                    length:10
                }
            }
        ],
            label:"{{label}}",
            useHTMLLabel:true,
            events:{
            [EVENT_TAP]:(p:EdgeEventCallbackPayload) => {
                p.model.setSelection(p.obj)
            }
        }
    }
},
ports:{
    choice:{
        anchor:[AnchorLocations.Left, AnchorLocations.Right ],
            events:{
            [EVENT_TAP]:(p:PortEventCallbackPayload<BrowserElement>) => {
                p.model.setSelection(p.obj)
            }
        }
    }
}
}

export default viewOptions

