"use client";

// Libs
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";

// Components
import { TextInput, Button, Flex, Switch, Text, Title } from "@tremor/react";
import { FaGoogle, FaFacebookSquare, FaGithub } from "react-icons/fa";

// Constant
import { ROUTES, REGEX, MESSAGES_ERROR } from "@/constants";

// Types
import { User } from "@/types";

const SignInForm = ({ email, password }: User) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      email,
      password,
    },
    mode: "onChange",
  });

  // note TODO: handle submit signin form
  const handleSignIn = (data: User) => console.log(data);

  const emailErrorMessage = errors?.email?.message?.toString();
  const passwordErrorMessage = errors?.password?.message?.toString();
  const isEmailError = Boolean(errors?.email);
  const isPasswordError = Boolean(errors?.password);
  const isDisableSubmit = isEmailError || isPasswordError;

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
            href={ROUTES.SIGN_IN}
            aria-label="Link to facebook">
            <FaFacebookSquare className="text-white w-[17px] h-[17px]" />
          </Link>
          <Link
            className="text-black-300 text-sm font-bold ml-2"
            href={ROUTES.SIGN_IN}
            aria-label="Link to github">
            <FaGithub className="text-white w-[18px] h-[18px]" />
          </Link>
          <Link
            className="text-black-300 text-sm font-bold ml-2"
            href={ROUTES.SIGN_IN}
            aria-label="Link to google">
            <FaGoogle className="text-white w-[16px] h-[16px]" />
          </Link>
        </Flex>
      </Flex>
      <div className="w-full p-3">
        <Controller
          control={control}
          rules={{
            required: MESSAGES_ERROR.EMAIL_REQUIRED,
            pattern: {
              value: REGEX.EMAIL,
              message: MESSAGES_ERROR.EMAIL_INVALID,
            },
          }}
          render={({ field }) => (
            <div className="h-[70px] w-full">
              <TextInput
                id="email"
                placeholder="Email"
                error={isEmailError}
                errorMessage={emailErrorMessage}
                type="email"
                autoFocus
                {...field}
                className="py-0.5 w-full"
              />
            </div>
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: MESSAGES_ERROR.PASSWORD_REQUIRED,
            pattern: {
              value: REGEX.PASSWORD,
              message: MESSAGES_ERROR.PASSWORD_INVALID,
            },
          }}
          render={({ field }) => (
            <div className="h-[70px] w-full">
              <TextInput
                id="password"
                placeholder="Password"
                error={isPasswordError}
                errorMessage={passwordErrorMessage}
                type="password"
                autoFocus
                className="py-0.5 w-full"
                {...field}
              />
            </div>
          )}
          name="password"
        />
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
          type="submit"
          onClick={handleSubmit(handleSignIn)}
          disabled={isDisableSubmit}>
          Sign In
        </Button>
        <Flex className="mt-8 mb-2 justify-center items-center">
          <Text className="text-secondary font-light">
            Don&rsquo;t have an acccount?
          </Text>
          <Link
            className="text-black-300 font-semibold text-sm ml-2"
            href={ROUTES.SIGN_UP}>
            Sign up
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default SignInForm;
