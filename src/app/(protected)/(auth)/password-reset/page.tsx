import RegularButton from "@/ui/components/Button/RegularButton";
import LoginForm from "@/ui/components/Forms";
import CustomLink from "@/ui/components/CustomLink";

export default function LoginPage() {
  return (
    <main className="w-[540px] flex flex-col items-center justify-between gap-8 p-14 bg-white rounded-md shadow">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-slate-900 capitalize">Password Reset</h1>
        <p className="text-base text-slate-500">
        We Will Help You Reset your Password
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-4 divide-y">
        <div className="w-full flex flex-col items-center gap-4">
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
                   <RegularButton
          variant="custom"
          type="submit"
          title="Reset Password"
          className="p-2 bg-blue-950 text-white"
        />
        </div>
        <div className="w-full flex flex-col items-center gap-4 py-4">
          <p className="flex flex-col items-center gap-4 text-sm text-slate-500 select-none">
          Remembered your Password?
          </p>
          <RegularButton
            variant="custom"
            type="button"
            title="Back to Sign In"
            className="w-full gap-4 p-2 bg-white text-blue-500 border border-slate-300"
            iconName="google"
          />
        </div>
      </div>
    </main>
  );
}
