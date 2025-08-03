"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import MdEditor from "@/app/components/MdEditor/MdEditor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

const NewIssuePage = () => {
  const router = useRouter();

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

  return (
    <form
      className="max-w-3xl space-y-5"
      onSubmit={handleSubmit(async (data) => {
        const res = await axios.post("/api/issues", data);
        console.log(res.data);
        router.push("/issues");
      })}
    >
      <Controller
        name="title"
        control={control}
        rules={{ required: "标题不能为空" }}
        render={({ field }) => (
          <TextField.Root
            {...field}
            placeholder="请输入问题的标题"
          ></TextField.Root>
        )}
      />
      {errors.title && (
        <Callout.Root color="red">
          <Callout.Icon>
            <span className="icon-[material-symbols--error]" />
          </Callout.Icon>
          <Callout.Text>{errors.title.message}</Callout.Text>
        </Callout.Root>
      )}

      <Controller
        name="description"
        control={control}
        rules={{ required: "问题描述不能为空" }}
        render={({ field }) => (
          <MdEditor value={field.value} setValue={field.onChange} />
        )}
      />
      {errors.description && (
        <Callout.Root color="red">
          <Callout.Icon>
            <span className="icon-[material-symbols--error]" />
          </Callout.Icon>
          <Callout.Text>{errors.description.message}</Callout.Text>
        </Callout.Root>
      )}

      <Button type="submit">提交新问题</Button>
    </form>
  );
};

export default NewIssuePage;
