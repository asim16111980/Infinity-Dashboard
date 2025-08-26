import RegularButton from "@/ui/components/Button/RegularButton";
import CustomLink from "@/ui/components/CustomLink";
import TextInput from "@/ui/components/TextInput";

export default function Home() {
  return (
    <main className="w-[540px] flex flex-col items-center justify-between gap-8 p-14 bg-white rounded-md shadow">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-slate-900">Sign In</h1>
        <p className="text-base text-slate-500">
          Have an Account?{" "}
          <CustomLink
            variant="custom"
            href="/login"
            title="Sign in"
            className="text-blue-600"
          />
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-4 divide-y">
        <div className="w-full flex flex-col items-center gap-4">
          <form className="w-full flex flex-col gap-4">
            <TextInput label="Email" placeholder="Email" />
            <TextInput
              label="Password"
              placeholder="Password"
              type="password"
            />
            <RegularButton
              variant="custom"
              type="submit"
              title="Create Account"
              className="p-2 bg-blue-950 text-white"
            />
          </form>
          <p className="flex flex-col items-center gap-4 text-sm">
            <span className="text-slate-500">
              By creating account, you agree to our
            </span>
            <span>
              <CustomLink
                variant="custom"
                href="/terms"
                title="Terms of Service"
                className="text-blue-600"
              />
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-4 p-4">
          <p className="flex flex-col items-center gap-4 text-sm text-slate-500">
            Or create an account using:
          </p>
          <RegularButton
            variant="custom" type="button" title="Continue with Google"
            className="w-full gap-4 p-2 bg-white text-blue-500 border border-slate-300" iconName="google"
          />
          <RegularButton
            variant="custom" type="button" title="Continue with Facebook"
            className="w-full gap-4 p-2 bg-white text-blue-500 border border-slate-300" iconName="facebook"
          />
        </div>
      </div>
    </main>
  );
}
