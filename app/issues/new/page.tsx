"use client";

import { Button, TextField } from "@radix-ui/themes";
import { useState } from "react";
import MdEditor from "@/app/components/MdEditor/MdEditor";


const NewIssuePage = () => {
  // 标题状态
  const [title, setTitle] = useState();

  // 标题更改事件
  const handleChange = (e:any) => {
    setTitle(e.target.value);
  };

  // 描述的状态
  const [description, setDescription] = useState("");

  // 按钮点击事件
  const handleClick = () => {
    console.log(title);
    console.log(description);
  };

  return (
    <div className="max-w-3xl space-y-5">
      <TextField.Root
      value={title}
        onChange={handleChange}
        placeholder="请输入问题的标题"
      ></TextField.Root>
      <MdEditor value={description} setValue={setDescription} />
      <Button onClick={handleClick}>提交新问题</Button>
    </div>
  );
};

export default NewIssuePage;
