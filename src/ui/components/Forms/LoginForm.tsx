import RegularButton from "../Button/RegularButton";
import CheckBox from "../CheckBox";
import TextInput from "../TextInput";

const LoginForm = () => {
    return (
        <form className="w-full flex flex-col gap-4">
            <TextInput label="Email" placeholder="Email" />
            <TextInput
              label="Password"
              placeholder="Password"
              type="password"
            />
            <CheckBox label="Remember me" titleClasses="text-sm text-slate-600"/>
            <RegularButton
              variant="custom"
              type="submit"
              title="Login"
              className="p-2 bg-blue-950 text-white"
            />
          </form>
    );
}

export default LoginForm;