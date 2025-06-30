import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="space-y-5">
      <TextField.Root placeholder="请输入问题的标题" className=""></TextField.Root>
      <TextArea placeholder="请输入问题的描述" />
      <Button>提交新问题</Button>
    </div>
  );
};

export default NewIssuePage;
