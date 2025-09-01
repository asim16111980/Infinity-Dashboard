"use client";
import RegularButton from "../Button/RegularButton";
import CheckBox from "../CheckBox";
import TextInput from "../TextInput";
import { useForm,SubmitHandler } from "react-hook-form";
import { loginForm } from "./loginForm.type";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<loginForm>();
  const onSubmit:SubmitHandler<loginForm>=(data)=>console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
      <TextInput label="Email" placeholder="Email" {...register("email")} />
      <TextInput
        label="Password"
        placeholder="Password"
        type="password"
        {...register("password")}
      />
      <CheckBox label="Remember me" titleClasses="text-sm text-slate-600" />
      <RegularButton
        variant="custom"
        type="submit"
        title="Login"
        className="p-2 bg-blue-950 text-white"
      />
    </form>
  );
};

export default LoginForm;
