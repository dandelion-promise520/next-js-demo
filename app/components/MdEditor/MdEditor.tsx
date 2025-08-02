import "bytemd/dist/index.css";
import { Editor } from "@bytemd/react";
import gfm from "@bytemd/plugin-gfm";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight";
import zhCN from "bytemd/locales/zh_Hans.json";
const plugins = [
  gfm(),
  gemoji(),
  highlight(),
  // Add more plugins here
];
interface MdEditorProps {
  value: string;
  setValue: (v: string) => void;
}

const MdEditor: React.FC<MdEditorProps> = ({ value, setValue }) => {
  return (
    <Editor
      placeholder="请输入问题描述"
      mode="split"
      locale={zhCN}
      value={value}
      plugins={plugins}
      onChange={setValue}
    />
  );
};

export default MdEditor;
