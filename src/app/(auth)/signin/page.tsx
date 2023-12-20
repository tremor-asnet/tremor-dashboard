import { Flex } from "@tremor/react";

// Components
import SignInForm from "../../ui/SignInForm/SignInForm";

const SignIn = () => {
  return (
    <Flex className='px-6 bg-[linear-gradient(195deg,rgba(66,66,74,0.6),rgba(25,25,25,0.6)),url("/assets/images/bg-sign-in.webp")] min-h-screen bg-cover bg-no-repeat bg-center md:min-w-[320px]'>
      <Flex className="flex-col mx-auto bg-white rounded-xl max-w-[348px] 2xl:max-w-xl">
        <SignInForm />
      </Flex>
    </Flex>
  );
};

export default SignIn;
