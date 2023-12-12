"use client";

// Libs
import { useFormState, useFormStatus } from "react-dom";
import { useForm, Controller } from "react-hook-form";

// Components
import { CheckBox } from "@/components";
import Link from "next/link";
import { TextInput, Button, Flex, Text, Title } from "@tremor/react";

// Constants
import { MESSAGES_ERROR, REGEX, ROUTES } from "@/constants";
import { createNewAccount } from "@/app/actions/authenticationActions";

// Types
import { User } from "@/types";

export const SignUpForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const [createNewAccountRes, dispatch] = useFormState(
    createNewAccount,
    undefined,
  );

  const createNewAccountError = createNewAccountRes?.errorMessage || null;

  const { name, email, password } = errors || {};
  const nameErrorMessage = name?.message?.toString();
  const emailErrorMessage = email?.message?.toString();
  const passwordErrorMessage = password?.message?.toString();
  const isNameError = Boolean(name);
  const isEmailError = Boolean(email);
  const isPasswordError = Boolean(password);
  const isDisableSubmit = isEmailError || isPasswordError || isNameError;

  return (
    <Flex className="flex-col w-full m-auto bg-white max-w-sm rounded-xl shadow-dark-tremor-card 2xl:max-w-xl">
      <div className="w-full p-4">
        <Flex className="bg-gradient-primary rounded-xl -mt-11 justify-center flex-col mb-7 pb-7 shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem]">
          <Title className="font-bold pt-8 pb-2 px-8 md:text-2xl text-white">
            Join us today
          </Title>
          <Text className="text-white font-light max-w-xs px-6 sm:px-8 text-center md:px-0">
            Enter your email and password to register
          </Text>
        </Flex>
        <form action={dispatch} className="w-full p-2 sm:p-3">
          <Controller
            control={control}
            rules={{
              required: MESSAGES_ERROR.NAME_REQUIRED,
              minLength: { value: 4, message: MESSAGES_ERROR.NAME_MIN_LENGTH },
            }}
            render={({ field }) => (
              <div className="h-[65px] w-full">
                <TextInput
                  id="name"
                  placeholder="Name"
                  error={isNameError}
                  errorMessage={nameErrorMessage}
                  autoFocus
                  className="py-1 w-full rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle shadow-none hover:bg-transparent ring-0"
                  required
                  tabIndex={0}
                  {...field}
                />
              </div>
            )}
            name="name"
          />
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
              <div tabIndex={1} className="h-[70px] w-full">
                <TextInput
                  id="email"
                  placeholder="Email"
                  error={isEmailError}
                  errorMessage={emailErrorMessage}
                  type="email"
                  className="py-1 w-full rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle shadow-none hover:bg-transparent ring-0"
                  required
                  {...field}
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
                  tabIndex={2}
                  id="password"
                  placeholder="Password"
                  error={isPasswordError}
                  errorMessage={passwordErrorMessage}
                  type="password"
                  className="py-1 w-full rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle shadow-none hover:bg-transparent ring-0"
                  required
                  {...field}
                />
              </div>
            )}
            name="password"
          />
          <div
            className="flex mb-4 items-center space-x-1"
            aria-live="polite"
            aria-atomic="true">
            {createNewAccountError && !isDisableSubmit && (
              <p className="text-sm text-red-500">{createNewAccountError}</p>
            )}
          </div>

          <div className="flex items-center space-x-3 mt-1 pt-3">
            <div tabIndex={3}>
              <CheckBox id="checkbox" />
            </div>
            <Text className="text-sm text-secondary font-light">
              I agree the{" "}
              <Link
                tabIndex={4}
                href="#"
                className="hover:underline no-underline text-gray-800 text-sm font-semibold">
                Terms and conditions
              </Link>
            </Text>
          </div>
          <SubmitButton isDisableSubmit={isDisableSubmit} />
          <Flex className="mt-8 mb-2 justify-center items-center">
            <Text className="text-secondary font-light">
              Already have an account?
            </Text>
            <Link
              tabIndex={6}
              className="text-black-300 font-semibold text-sm ml-2"
              href={ROUTES.SIGN_IN}>
              Sign In
            </Link>
          </Flex>
        </form>
      </div>
    </Flex>
  );
};

const SubmitButton = ({ isDisableSubmit }: { isDisableSubmit: boolean }) => {
  const { pending } = useFormStatus();
  const disabled = pending || isDisableSubmit;

  return (
    <Button
      tabIndex={5}
      aria-disabled={disabled}
      type="submit"
      className="w-full focus:ring-2 font-normal bg-gradient-primary py-[9px] mt-9 uppercase border-transparent hover:border-transparent hover:shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem]"
      size="xs"
      disabled={disabled}>
      Create account
    </Button>
  );
};
