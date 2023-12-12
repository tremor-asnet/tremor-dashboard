// Components
import { SignUpForm } from "@/app/ui/SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <div className="bg-body min-h-screen pb-8 min-w-[320px]">
      <div className='bg-[linear-gradient(195deg,rgba(66,66,74,0.4),rgba(25,25,25,0.4)),url("/assets/images/bg-sign-up.webp")] m-4 pt-12 pb-56 sm:pb-60 opacity-100 rounded-xl shadow-none bg-cover bg-no-repeat bg-center w-[calc(100%-2rem) min-h-[35vh]'></div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
