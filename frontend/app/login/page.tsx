"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ErrorShow from "@/components/ErrorShow";

type Inputs = {
  email: string;
  password: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center h-dvh">
      <form
        className="w-64 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="hello@rentease.com"
          {...register("email", { required: true })}
        />
        {errors.email &&<ErrorShow message={"This field is required"}/>}
        <Input placeholder="********" {...register("password", { required: true })} />
        {errors.password &&<ErrorShow message={"This field is required"}/>}
        <Button className="w-full cursor-pointer" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Page;
