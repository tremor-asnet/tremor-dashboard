"use client";

// Libs
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

// Components
import Link from "next/link";
import { TextInput, Button, Flex, Switch, Text } from "@tremor/react";
import { LoadingIndicator } from "@/components";

// Constants
import { ROUTES, REGEX, MESSAGES_ERROR } from "@/constants";

// Types
import { User } from "@/types";

// Actionss
import { authenticate } from "@/actions";

// Helpers
import { getFormData, isEmpty } from "@/helpers";

const SignIn = () => {
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
      isPending: false,
      errorMessage: res?.errorMessage || "",
    });
  };

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="w-full sm:p-3">
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
              tabIndex={0}
              id="email"
              placeholder="Email"
              type="email"
              autoFocus
              className="py-0.5 w-full"
              required
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
            message: MESSAGES_ERROR.PASSWORD_INVALID,
          },
        }}
        render={({ field }) => (
          <div className="h-[70px] w-full">
            <TextInput
              tabIndex={1}
              id="password"
              placeholder="Password"
              type="password"
              className="py-0.5 w-full"
              required
              {...field}
            />
            <p className="pt-1 leading-3 text-[11px] xs:text-xs text-red-500">
              {passwordErrorMessage
                ? passwordErrorMessage
                : formStatus.errorMessage}
            </p>
          </div>
        )}
        name="password"
      />

      {/* {renderErrorMessage(formStatus.errorMessage)} */}

      <div className="flex items-center space-x-3 mt-1">
        <Switch
          tabIndex={2}
          id="switch"
          name="switch"
          checked={isRememberedMe}
          color="zinc"
          className="flex justify-center items-center"
          onChange={handleSwitchChange}
        />
        <Text className="text-secondary font-normal">Remember me</Text>
      </div>

      <Button
        tabIndex={3}
        aria-disabled={isDisableSubmit}
        className="min-h-[43px] flex w-full focus:ring-2 bg-gradient-primary disabled:opacity-100 disabled:bg-[linear-gradient(195deg,#97979a,#98989a)] py-[11px] mt-9 uppercase border-transparent hover:border-transparent hover:shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem]"
        size="xs"
        type="submit"
        disabled={isDisableSubmit}>
        {formStatus.isPending ? (
          <LoadingIndicator width="w-5" height="w-5" />
        ) : (
          <Text className="text-xs font-bold text-white">Sign In</Text>
        )}
      </Button>

      <Flex className="mt-8 mb-2 justify-center items-center">
        <Text className="text-secondary font-light">
          Don&rsquo;t have an account?
        </Text>
        <Link
          tabIndex={4}
          className="text-primary font-semibold text-sm ml-1"
          href={ROUTES.SIGN_UP}>
          Sign up
        </Link>
      </Flex>
    </form>
  );
};

export default SignIn;
