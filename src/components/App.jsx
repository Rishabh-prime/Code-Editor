import React, { useState, useEffect } from 'react';
import Editor from '../components/Editor';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [html, setHtml] =useLocalStorage('html','');
  const [css, setCss] = useLocalStorage('css','');
  const [js, setJs] = useLocalStorage('js','');
  const [srcDoc , setsrcDoc] = useState('');

  useEffect(() => {
  
    const timeout = setTimeout(() =>{
      setsrcDoc(
        `<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>`
      )
    },250)
    return () => clearTimeout(timeout)
  },[html,css,js]);


  return (
    <>
      <div className="top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JavaScript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="bottom-pane">
        <iframe
          
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          srcDoc={srcDoc}
        />
      </div>
    </>
  );
}

export default App;

