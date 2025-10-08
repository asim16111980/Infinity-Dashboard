"use client";
import RegularButton from "../Button/RegularButton";
import CheckBox from "../CheckBox";
import TextInput from "../TextInput";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
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
  const { authError } = useAuth();

  const [serverError, setServerError] = useState<serverError>({
    visible: false,
    message: null,
  });
  const [errorVisible, setErrorVisible] = useState<boolean>(false);

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
    setServerError((prev) => ({
      ...prev,
      visible: false,
    }));
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const loginRes = await postData<loginForm>(
        `${API_URL}/api/auth/login`,
        loginData
      );

      if (loginRes.status === "success") {
        router.push("/");
      } else {
        console.log(loginRes);

        throw new Error(loginRes);
      }
    } catch (err) {
      setServerError({
        visible: true,
        message: await mapErrorToMessage(err),
      });
    }
  };
  const onError: SubmitErrorHandler<loginForm> = () => {
    setErrorVisible(true);
  };

  useEffect(() => {
    if (authError !== null)
      setServerError({
        visible: true,
        message: authError,
      });
  }, [authError]);

  useEffect(() => {
    const sub = watch(() => {
      setErrorVisible(false);
      setServerError({
        visible: false,
        message: null,
      });
    });
    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <div className="relative w-full flex flex-col gap-4 pt-10">
      <div
        className={clsx(
          "absolute left-0 -top-6 w-full flex justify-center items-center gap-1 p-3 text-sm text-center break-words bg-red-100 border border-red-300 text-red-700 rounded shadow-sm transition-opacity duration-500 ease-in-out",
          serverError.visible ? "opacity-100" : "opacity-0"
        )}
      >
        <Icon name="alertCircle" className="size-5 shrink-0" />
        {serverError.message}
      </div>
      <form
        method="post"
        action=""
        onSubmit={handleSubmit(onSubmit, onError)}
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
          error={errorVisible ? !!errors.email : false}
          helperText={errorVisible ? errors.email?.message : ""}
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
          error={errorVisible ? !!errors.password : false}
          helperText={errorVisible ? errors.password?.message : ""}
        />
        <CheckBox
          label="Keep me signed in"
          titleClasses="text-sm text-slate-600"
          {...register("remember")}
        />
        <RegularButton
          variant="custom"
          type="submit"
          title="Login"
          className="p-2 bg-blue-950 text-white"
        />
      </form>
    </div>
  );
};

export default LoginForm;
