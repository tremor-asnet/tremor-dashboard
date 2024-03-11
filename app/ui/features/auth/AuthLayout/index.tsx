"use client";

import { ROUTES } from "@/constants";
import { Flex, Text } from "@tremor/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const renderPathHeading = (path: string) => {
  const title = {
    [`${ROUTES.SIGN_IN}`]: "Sign in",
    [`${ROUTES.SIGN_UP}`]: "Sign up",
  };

  const subText = {
    [`${ROUTES.SIGN_UP}`]: "Enter your email and password to register",
  };

  return (
    <>
      <Text className="font-semibold pt-8 pb-2 px-8 !text-tremor-normal text-white tracking-wide">
        {title[path]}
      </Text>
      <Text className="text-white tracking-wide font-light max-w-xs px-8 text-center 2xl:px-0">
        {subText[path]}
      </Text>
    </>
  );
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <Flex className='px-6 bg-[linear-gradient(195deg,rgba(66,66,74,0.6),rgba(25,25,25,0.6)),url("/assets/images/bg-sign-in.webp")] min-h-screen bg-cover bg-no-repeat bg-center md:min-w-[320px]'>
      <Flex className="flex-col mx-auto bg-white dark:bg-dark-tremor-primary rounded-xl max-w-[348px] 2xl:max-w-xl">
        <div className="w-full p-4 antialiased font-primary">
          <Flex className="bg-gradient-primary dark:bg-gradient-pickled rounded-xl -mt-11 justify-center flex-col mb-7 pb-7 shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem]">
            {renderPathHeading(pathname)}
          </Flex>
          {children}
        </div>
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
