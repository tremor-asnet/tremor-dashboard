"use client";
import { Flex } from "@tremor/react";

import { SignInForm } from "@/components";

const SignIn = () => {
  return (
    <Flex className='bg-[linear-gradient(195deg,rgba(66,66,74,0.6),rgba(25,25,25,0.6)),url("/assets/images/bg-sign-in.webp")] min-h-screen bg-cover bg-no-repeat bg-center'>
      <Flex className="flex-col mx-auto bg-white rounded-xl max-w-sm sm:w-[350px]">
        <SignInForm />
      </Flex>
    </Flex>
  );
};

export default SignIn;
