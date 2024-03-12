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
      <Flex
        flexDirection="col"
        className="mx-auto bg-white dark:bg-dark-tremor-primary rounded-xl max-w-[348px] 2xl:max-w-xl">
        <div className="w-full p-4 antialiased font-primary">
          <Flex
            flexDirection="col"
            justifyContent="center"
            className="bg-gradient-primary dark:bg-gradient-pickled rounded-xl -mt-11 mb-7 pb-7 shadow-btn-primary">
            {renderPathHeading(pathname)}
          </Flex>
          {children}
        </div>
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
