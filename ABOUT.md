### About this Demo

This Vue application demonstrates a **Chatbot** flow editor built with **VisuallyJS**. It allows users to design conversation logic for a chatbot.

### VisuallyJS Components Used

The demo utilizes several components from the `@visuallyjs/browser-ui-vue` package:

- **SurfaceProvider**: Provides the VisuallyJS context for the application.
- **SurfaceComponent**: The main canvas where the chatbot flow is rendered.
- **ControlsComponent**: Provides UI controls for the surface.
- **MiniviewComponent**: Displays a small navigation map of the surface, with a custom `typeFunction` to determine how vertices are represented in the miniview.

### Component Options

The `SurfaceComponent` is configured with three main options objects:

- **renderOptions**: Configures the rendering engine and visual properties.
- **viewOptions**: Defines the appearance and interaction for various chatbot node types.
- **modelOptions**: Configures the data model behavior.

### CSS Requirement

For the VisuallyJS components to render correctly, the standard VisuallyJS stylesheet must be included in the project. In this demo, it is imported in `src/index.css`:

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
```
