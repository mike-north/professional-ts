import * as React from "react";
import { render } from "react-dom";
import App from "./App";

const appContainer = document.getElementById("appContainer");
if (!appContainer) throw new Error("No #appContainer found in DOM");
render(React.createElement(App), appContainer);
