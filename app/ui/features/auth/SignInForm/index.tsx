"use client";

// Libs
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";

// Components
import { TextInput, Button, Flex, Switch, Text } from "@tremor/react";
import { LoadingIndicator } from "@/ui/components";

// Constants
import { ROUTES, REGEX, MESSAGES_ERROR } from "@/constants";

// Types
import { User } from "@/types";

// Actions
import { authenticate } from "@/actions";

// Helpers
import { getFormData } from "@/helpers";

const SignInForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const [formStatus, setFormStatus] = useState({
    isPending: false,
    errorMessage: "",
  });

  const { email, password } = errors;
  const emailErrorMessage = email?.message?.toString();
  const passwordErrorMessage = password?.message?.toString();
  const isDisableSubmit = formStatus.isPending;

  const [isRememberedMe, setIsRememberedMe] = useState<boolean>(false);

  // Handle to change value is (true or false) for attr checked switch
  const handleSwitchChange = (value: boolean) => {
    setIsRememberedMe(value);
  };

  const handleSignIn = async (value: User) => {
    setFormStatus({
      isPending: true,
      errorMessage: "",
    });

    const res = await authenticate(
      { errorMessage: "" },
      getFormData({
        ...value,
        remember: isRememberedMe,
      }),
    );

    setFormStatus({
      isPending: !res?.errorMessage,
      errorMessage: res?.errorMessage || "",
    });
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(handleSignIn)}
      className="w-full sm:p-3 sign-in">
      {isDisableSubmit && (
        <div className="opacity-25 fixed inset-0 z-20 bg-black cursor-not-allowed" />
      )}
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
          <div className="h-[68px] w-full">
            <TextInput
              id="email"
              placeholder="Email"
              type="email"
              autoFocus
              className="py-0.5 w-full dark:border-white dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent"
              {...field}
            />
            <p className="pt-1 text-[11px] xs:text-xs text-red-500">
              {emailErrorMessage}
            </p>
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
            message: MESSAGES_ERROR.PASSWORD_WRONG,
          },
        }}
        render={({ field }) => (
          <div className="h-[70px] w-full">
            <TextInput
              tabIndex={1}
              id="password"
              placeholder="Password"
              type="password"
              className="py-0.5 w-full dark:border-white dark:bg-transparent dark:hover:bg-transparent"
              {...field}
            />
            <p className="pt-1 ml-1 leading-3 text-[11px] xs:text-xs text-red-500">
              {passwordErrorMessage
                ? passwordErrorMessage
                : formStatus.errorMessage}
            </p>
          </div>
        )}
        name="password"
      />
      {/* {renderErrorMessage(formStatus.errorMessage)} */}
      <div className="flex items-center space-x-3 mt-6">
        <Switch
          tabIndex={2}
          id="switch"
          name="switch"
          checked={isRememberedMe}
          color="zinc"
          disabled={isDisableSubmit}
          className="switch flex justify-center items-center"
          onChange={handleSwitchChange}
        />
        <Text className="text-secondary dark:text-dark-romance font-normal">
          Remember me
        </Text>
      </div>
      <Button
        tabIndex={3}
        aria-disabled={isDisableSubmit}
        className="min-h-[43px] flex w-full bg-gradient-primary dark:bg-gradient-pickled opacity-100 disabled:opacity-100 disabled:bg-[linear-gradient(195deg,#c1c1c3,#bebebf)] dark:disabled:bg-[linear-gradient(195deg,#283046,#1e263c)] py-0 mt-9 uppercase border-0 border-transparent hover:border-transparent"
        size="xs"
        type="submit"
        disabled={isDisableSubmit}>
        {formStatus.isPending ? (
          <LoadingIndicator width={7} height={7} />
        ) : (
          <Text className="text-xs font-bold text-white dark:text-white">
            Sign In
          </Text>
        )}
      </Button>
      <Flex className="mt-8 mb-2 justify-center items-center">
        <Text className="text-secondary dark:text-dark-romance font-light">
          Don&rsquo;t have an account?
        </Text>
        <Link
          tabIndex={4}
          className="text-primary dark:text-white font-semibold text-sm ml-1"
          href={ROUTES.SIGN_UP}>
          Sign up
        </Link>
      </Flex>
    </form>
  );
};

export default SignInForm;
