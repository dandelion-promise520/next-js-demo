"use client";

import { Button, TextField } from "@radix-ui/themes";
import MdEditor from "@/app/components/MdEditor/MdEditor";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface IFormInput {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  // 表单提交处理函数
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <form className="max-w-3xl space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField.Root
            {...field}
            placeholder="请输入问题的标题"
          ></TextField.Root>
        )}
      />
      {errors.title && <p role="alert">{errors.title.message}</p>}

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <MdEditor value={field.value} setValue={field.onChange} />
        )}
      />
      {errors.description && <p role="alert">{errors.description.message}</p>}

      <Button type="submit">提交新问题</Button>
    </form>
  );
};

export default NewIssuePage;
