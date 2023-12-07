"use client";

// Libs
import { useState } from "react";
import { TextInput, Button, Flex, Switch, Text, Title } from "@tremor/react";
import Link from "next/link";
import { FaGoogle, FaFacebookSquare, FaGithub } from "react-icons/fa";

// Constant
import { ROUTES } from "@/constants";

const SignInForm = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  // Handle to change value is (true or false) for attr checked switch
  const handleSwitchChange = (value: boolean) => {
    setIsSwitchOn(value);
  };

  return (
    <div className="w-full p-4">
      <Flex className="bg-gradient-primary rounded-xl -mt-11 justify-center flex-col mb-7 shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem]">
        <Title className="font-medium pt-6 pb-2 px:8 md:text-2xl text-white">
          Sign in
        </Title>
        <Flex className="my-8 pb-2 justify-center space-x-7 px-4">
          <Link
            className="text-black-300 text-sm font-bold ml-2"
            href={ROUTES.SINGIN}
          >
            <FaFacebookSquare className="text-white w-[17px] h-[17px]" />
          </Link>
          <Link
            className="text-black-300 text-sm font-bold ml-2"
            href={ROUTES.SINGIN}
          >
            <FaGithub className="text-white w-[18px] h-[18px]" />
          </Link>
          <Link
            className="text-black-300 text-sm font-bold ml-2"
            href={ROUTES.SINGIN}
          >
            <FaGoogle className="text-white w-[16px] h-[16px]" />
          </Link>
        </Flex>
      </Flex>
      <div className="w-full p-3">
        <div className="h-16 w-full">
          <TextInput
            id="emmail"
            placeholder="Email"
            type="email"
            autoFocus
            className="py-0.5 w-full"
          />
        </div>
        <div className="h-16 w-full">
          <TextInput
            id="password"
            placeholder="Password"
            type="password"
            autoFocus
            className="py-0.5 w-full"
          />
        </div>
        <div className="flex items-center space-x-3 mt-1">
          <Switch
            id="switch"
            name="switch"
            checked={isSwitchOn}
            color="zinc"
            className="flex justify-center items-center"
            onChange={handleSwitchChange}
          />
          <Text className="text-secondary font-normal">Remember me</Text>
        </div>
        <Button
          className="w-full font-normal bg-gradient-primary py-[9px] mt-9 uppercase border-transparent hover:border-transparent hover:shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem]"
          size="xs"
        >
          Sign In
        </Button>
        <Flex className="mt-8 mb-2 justify-center items-center">
          <Text className="text-secondary font-light">
            Don&rsquo;t have an acccount?
          </Text>
          <Link
            className="text-black-300 font-semibold text-sm ml-2"
            href={ROUTES.SIGNUP}
          >
            Sign up
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default SignInForm;
