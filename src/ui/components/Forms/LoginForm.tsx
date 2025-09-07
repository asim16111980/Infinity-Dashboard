"use client";
import RegularButton from "../Button/RegularButton";
import CheckBox from "../CheckBox";
import TextInput from "../TextInput";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { loginForm } from "./loginForm.type";
import { postData } from "@/app/api/auth/route";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/authContext";

const LoginForm = () => {
  // const { setToken } = useAuth();
  const router = useRouter();
  const emailPattern =
    /^(?=.{1,254}$)(?=.{1,64}@)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordPattern =
    /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/;

  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    setError,
  } = useForm<loginForm>();

  const onSubmit: SubmitHandler<loginForm> = async (loginData) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const loginRes = await postData<loginForm>(
        `${API_URL}/api/auth/login`,
        loginData
      );

      if (loginRes.status === "success") {
        // setToken(loginRes.authToken);
        // router.push("/");
      } else {
        setError("password", {
          type: "server",
          message: loginRes.message || "Wrong email or password",
        });
      }
    } catch (err) {
      setError("password", {
        type: "server",
        message: "Service temporarily unavailable. Please try again in a few minutes.",
      });
    }
  };

  return (
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
    </form>
  );
};

export default LoginForm;
