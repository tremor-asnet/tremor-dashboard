// Components
import { SignUpForm } from "@/components";

const SignUp = () => {
  return (
    <div className="min-h-screen pb-8">
      <div className='bg-[linear-gradient(195deg,rgba(66,66,74,0.4),rgba(25,25,25,0.4)),url("/assets/images/bg-sign-up.webp")] m-4 pt-12 pb-60 opacity-100 rounded-xl shadow-none bg-cover bg-no-repeat bg-center w-[calc(100%-2rem)]'></div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
