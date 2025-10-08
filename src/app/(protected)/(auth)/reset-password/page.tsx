import RegularButton from "@/ui/components/Button/RegularButton";
import CustomLink from "@/ui/components/CustomLink";
import TextInput from "@/ui/components/TextInput";
import { useState } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { postData } from "@/app/api/auth/route";

export default function ResetPasswordPage() {
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const emailPattern =
    /^(?=.{1,254}$)(?=.{1,64}@)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  type resetPassword = {
    email: string;
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<resetPassword>();

  const onSubmit: SubmitHandler<resetPassword> = async (formData) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const loginRes = await postData<resetPassword>(
        `${API_URL}/api/auth/reset-password`,
        formData
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

  return (
    <main className="w-[540px] flex flex-col items-center justify-between gap-8 p-14 bg-white rounded-md shadow">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-slate-900 capitalize">
          Password Reset
        </h1>
        <p className="text-base text-slate-500">
          We Will Help You Reset your Password
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-10 divide-y">
        <form  method="post"
        action=""
        onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
          <TextInput
            label="Email"
            placeholder="Enter Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: emailPattern,
                message: "Invalid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            error={errorVisible ? !!errors.email : false}
            helperText={errorVisible ? errors.email?.message : ""}
          />
          <RegularButton
            variant="custom"
            type="submit"
            title="Reset Password"
            className="p-3 bg-blue-950 text-white"
          />
        </form>
        <div className="w-full flex flex-col items-center gap-4 py-4">
          <CustomLink
            variant="custom"
            title="Back to Sign In"
            href="/login"
            className="w-full gap-4 p-3 bg-white text-blue-500 border border-slate-300"
          />
        </div>
      </div>
    </main>
  );
}
