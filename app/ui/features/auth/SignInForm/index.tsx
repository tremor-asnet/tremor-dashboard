"use client";

// Libs
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";

// Components
import { TextInput, Flex, Switch, Text } from "@tremor/react";
import { Button, LoadingIndicator } from "@/ui/components";

// Constants
import { ROUTES, REGEX, MESSAGES_ERROR, VARIANT_BUTTON } from "@/constants";

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
      remember: false,
    },
    mode: "onSubmit",
  });

  const [formStatus, setFormStatus] = useState({
    isPending: false,
    errorMessage: "",
  });

  const { isPending, errorMessage } = formStatus;

  const handleSignIn = async (value: User) => {
    setFormStatus({
      isPending: true,
      errorMessage: "",
    });

    const res = await authenticate({ errorMessage: "" }, getFormData(value));

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
      {isPending && (
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
        render={({ field }) => {
          const emailErrorMessage = errors.email?.message || "";

          return (
            <div className="h-[68px] w-full">
              <TextInput
                id="email"
                placeholder="Email"
                type="email"
                autoFocus
                className="py-0.5 w-full dark:border-white dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent"
                {...field}
              />
              {emailErrorMessage && (
                <Text className="pt-1 text-xs text-red-500 dark:text-red-500">
                  {emailErrorMessage}
                </Text>
              )}
            </div>
          );
        }}
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
        render={({ field }) => {
          const passwordErrorMessage = errors.password?.message || "";

          return (
            <div className="h-[70px] w-full">
              <TextInput
                tabIndex={0}
                id="password"
                placeholder="Password"
                type="password"
                className="py-0.5 w-full dark:border-white dark:bg-transparent dark:hover:bg-transparent"
                {...field}
              />
              <Text className="pt-1 ml-1 leading-3 text-xs text-red-500 dark:text-red-500">
                {passwordErrorMessage ? passwordErrorMessage : errorMessage}
              </Text>
            </div>
          );
        }}
        name="password"
      />

      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <div className="flex items-center space-x-3 mt-6">
            <Switch
              id="remember"
              tabIndex={0}
              checked={value}
              color="zinc"
              disabled={isPending}
              className="switch flex justify-center items-center"
              onChange={onChange}
            />
            <Text className="text-tertiary dark:text-dark-romance font-normal">
              Remember me
            </Text>
          </div>
        )}
        name="remember"
      />

      <Button
        tabIndex={0}
        aria-disabled={isPending}
        variant={VARIANT_BUTTON.PRIMARY}
        type="submit"
        size="xs"
        disabled={isPending}
        additionalClass="min-h-[43px] flex w-full opacity-100 disabled:opacity-100 disabled:bg-[linear-gradient(195deg,#c1c1c3,#bebebf)] dark:disabled:bg-[linear-gradient(195deg,#283046,#1e263c)] py-0 mt-9 uppercase border-0 border-transparent hover:border-transparent">
        {formStatus.isPending ? (
          <LoadingIndicator width={7} height={7} />
        ) : (
          <Text className="text-xs font-bold text-white dark:text-white">
            Sign In
          </Text>
        )}
      </Button>
      <Flex justifyContent="center" className="mt-8 mb-2">
        <Text className="text-tertiary dark:text-dark-romance font-light">
          Don&rsquo;t have an account?
        </Text>
        <Link
          tabIndex={0}
          className="text-primary dark:text-white font-semibold text-sm ml-1"
          href={ROUTES.SIGN_UP}>
          Sign up
        </Link>
      </Flex>
    </form>
  );
};

export default SignInForm;
