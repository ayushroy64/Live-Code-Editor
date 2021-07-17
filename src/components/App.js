import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import SidePanel from "./SidePanel";

function App(props) {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  let currentScreen = props.currentScreen;
  let togglePages = props.togglePages;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
    <div className="top-bar">
          <h1>Live Code Editor</h1>
          
        </div>
      <div className="pane top-pane">
        <SidePanel togglePages={togglePages} />
        {currentScreen === "Html" && (
          <Editor
            language="xml"
            displayName="index.html"
            value={html}
            onChange={setHtml}
          />
        )}

        {currentScreen === "Css" && (
          <Editor
            language="css"
            displayName="index.css"
            value={css}
            onChange={setCss}
          />
        )}
        {currentScreen === "Js" && (
          <Editor
            language="javascript"
            displayName="index.js"
            value={js}
            onChange={setJs}
          />
        )}
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
