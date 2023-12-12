// Libs
import { Flex } from "@tremor/react";

// Components
import { SignUpForm } from "@/app/ui/SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <Flex className='bg-[linear-gradient(195deg,rgba(66,66,74,0.4),rgba(25,25,25,0.4)),url("/assets/images/bg-sign-in.webp")] bg-cover bg-no-repeat bg-center min-h-screen pb-8 min-w-[320px] overflow-hidden p-4'>
      <SignUpForm />
    </Flex>
  );
};

export default SignUp;
