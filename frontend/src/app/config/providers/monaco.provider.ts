import { provideMonacoEditor } from "ngx-monaco-editor-v2";

const providersMonaco = [
  provideMonacoEditor({
    baseUrl: "assets/monaco-editor/vs",
  }),
];

export default providersMonaco;
