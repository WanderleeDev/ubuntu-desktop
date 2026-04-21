import { signalStore, withState, withMethods, withComputed, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';

export type FileType = 'html' | 'css' | 'javascript';

export interface CodeEditorState {
  files: {
    html: string;
    css: string;
    javascript: string;
  };
  activeFile: FileType;
  settings: {
    fontSize: number;
    theme: 'vs-dark' | 'vs-light';
    minimap: boolean;
    showPreview: boolean;
  };
}

const initialState: CodeEditorState = {
  files: {
    html: `<!-- Welcome to Ubuntu Web Playground -->
<div class="container">
  <h1>Hello Ubuntu!</h1>
  <p>Try editing the HTML, CSS and JS to see live changes.</p>
  <button id="actionBtn">Click Me</button>
</div>`,
    css: `/* Ubuntu Styles */
body {
  font-family: 'Ubuntu', sans-serif;
  background: #2c2c2c;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  background: #3c3c3c;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.1);
}

h1 { color: #e95420; }

button {
  background: #e95420;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

button:hover {
  background: #c7461b;
  transform: scale(1.05);
}`,
    javascript: `// Ubuntu Interaction
const btn = document.getElementById('actionBtn');

btn.addEventListener('click', () => {
  alert('Greetings from Ubuntu Desktop!');
  console.log('Button clicked!');
});`,
  },
  activeFile: 'html',
  settings: {
    fontSize: 13,
    theme: 'vs-dark',
    minimap: false,
    showPreview: true,
  },
};

export const CodeEditorStore = signalStore(
  withState(initialState),
  withComputed((store) => ({
    currentCode: computed(() => store.files()[store.activeFile()]),
    fullPreview: computed(() => {
      const { html, css, javascript } = store.files();
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>
              try {
                ${javascript}
              } catch (err) {
                console.error('JS Error: ' + err.message);
              }
            </script>
          </body>
        </html>
      `;
    }),
  })),
  withMethods((store) => ({
    updateCode(code: string) {
      const active = store.activeFile();
      patchState(store, (state) => ({
        files: { ...state.files, [active]: code },
      }));
    },
    setActiveFile(file: FileType) {
      patchState(store, { activeFile: file });
    },
    togglePreview() {
      patchState(store, (state) => ({
        settings: { ...state.settings, showPreview: !state.settings.showPreview },
      }));
    },
  }))
);
