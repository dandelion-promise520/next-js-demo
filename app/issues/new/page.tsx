"use client";

import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root
        placeholder="请输入问题的标题"
      ></TextField.Root>
      <SimpleMDE />
      <Button>提交新问题</Button>
    </div>
  );
};

export default NewIssuePage;
