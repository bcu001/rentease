"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ErrorShow from "@/components/ErrorShow";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ENV } from "@/utilites/env";
import { useRouter } from "next/navigation";

type Inputs = {
    name:string;
  email: string;
  password: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async(data:Inputs)=>{
      const res = await axios.post(`${ENV.serverUrl}/auth/register`, data)
      return res.data;
    },
    onSuccess: ()=>{
      router.push("/login")
    }
  })


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutation.mutate(data);
  }

  return (
    <div className="flex items-center justify-center h-dvh">
      <form
        className="w-64 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Lex dragonbane"
          {...register("name", { required: true })}
        />
        {errors.name && <ErrorShow message={"This field is required"}/>}
        <Input
          placeholder="hello@william.com"
          {...register("email", { required: true })}
        />
        {errors.email && <ErrorShow message={"This field is required"}/>}
        <Input placeholder="********" type="password" {...register("password", { required: true })} />
        {errors.password && <ErrorShow message={"This field is required"}/>}
        <Button className="w-full cursor-pointer" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Page;
