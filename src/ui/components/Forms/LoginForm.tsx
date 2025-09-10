"use client";
import RegularButton from "../Button/RegularButton";
import CheckBox from "../CheckBox";
import TextInput from "../TextInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginForm } from "./loginForm.type";
import { postData } from "@/app/api/auth/route";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/authContext";
import { useEffect, useState } from "react";
import Icon from "../Icon";
import clsx from "clsx";
import { mapErrorToMessage } from "@/utils/mapErrorToMessage";

const LoginForm = () => {
  type serverError = {
    visible: boolean;
    message: string | null;
  };
  const { setToken, error } = useAuth();

  const [serverError, setServerError] = useState<serverError>({
    visible: false,
    message: null,
  });
  const router = useRouter();
  const emailPattern =
    /^(?=.{1,254}$)(?=.{1,64}@)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordPattern =
    /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/;

  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    watch,
  } = useForm<loginForm>();

  const onSubmit: SubmitHandler<loginForm> = async (loginData) => {
    setServerError({
      visible: false,
      message: null,
    });
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const loginRes = await postData<loginForm>(
        `${API_URL}/api/auth/login`,
        loginData
      );

      if (loginRes.status === "success") {
        setToken(loginRes.authToken);
        router.push("/");
      } else {
        throw new Error(loginRes.message);
        // setServerError({
        //   visible: true,
        //   message: "Service unavailable. try again in a few minutes.",
        // });
      }
    } catch (err) {
      setServerError({
        visible: true,
        message: mapErrorToMessage(err),
      });
    }
  };
  useEffect(() => {
    if (error !== null)
      setServerError({
        visible: true,
        message: error,
      });
  }, [error]);

  useEffect(() => {
    const sub = watch(() =>
      setServerError((prev) => ({
        ...prev,
        visible: serverError.message ? true : false,
      }))
    );
    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <div className="relative w-full flex flex-col gap-4 py-10">
      <div
        className={clsx(
          "absolute left-0 -top-6 w-full flex justify-center items-center gap-2 p-3 text-sm text-center break-words bg-red-100 border border-red-300 text-red-700 rounded shadow-sm transition-opacity duration-500 ease-in-out",
          serverError.visible && !isSubmitted ? "opacity-100" : "opacity-0"
        )}
      >
        <Icon name="alertCircle" className="size-5 shrink-0" />
        {serverError.message}
      </div>
      <form
        method="post"
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <TextInput
          label="Email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: emailPattern, message: "Invalid email address" },
          })}
          aria-invalid={errors.email ? "true" : "false"}
          error={isSubmitted ? !!errors.email : false}
          helperText={errors.email?.message}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          type="password"
          showPassword={true}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters.",
            },
            pattern: {
              value: passwordPattern,
              message:
                "Password must contain upper, lower, number and special character",
            },
          })}
          aria-invalid={errors.password ? "true" : "false"}
          error={isSubmitted ? !!errors.password : false}
          helperText={errors.password?.message}
        />
        <CheckBox
          label="Remember me"
          titleClasses="text-sm text-slate-600"
          {...register("remember")}
        />
        <RegularButton
          variant="custom"
          type="submit"
          title="Login"
          className="p-2 bg-blue-950 text-white"
        />
      </form>{" "}
    </div>
  );
};

export default LoginForm;
