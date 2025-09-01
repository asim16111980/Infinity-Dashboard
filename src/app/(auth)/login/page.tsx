import RegularButton from "@/ui/components/Button/RegularButton";
import LoginForm from "@/ui/components/Forms";
import CustomLink from "@/ui/components/CustomLink";

export default function Home() {
  return (
    <main className="w-[540px] flex flex-col items-center justify-between gap-8 p-14 bg-white rounded-md shadow">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-slate-900">Sign In</h1>
        <p className="text-base text-slate-500">
          Login to access your dashboard
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-4 divide-y">
        <div className="w-full flex flex-col items-center gap-4">
          <LoginForm />
          <p className="flex flex-col items-center gap-4 text-sm">
            <CustomLink
              variant="custom"
              href="/terms"
              title="Forgot your password?"
              className="text-blue-600"
            />
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-4 p-4">
          <p className="flex flex-col items-center gap-4 text-sm text-slate-500">
            Or sign in using:
          </p>
          <RegularButton
            variant="custom"
            type="button"
            title="Continue with Google"
            className="w-full gap-4 p-2 bg-white text-blue-500 border border-slate-300"
            iconName="google"
          />
          <RegularButton
            variant="custom"
            type="button"
            title="Continue with Facebook"
            className="w-full gap-4 p-2 bg-white text-blue-500 border border-slate-300"
            iconName="facebook"
          />
        </div>
      </div>
    </main>
  );
}
