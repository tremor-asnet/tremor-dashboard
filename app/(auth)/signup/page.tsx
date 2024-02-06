"use client";

// Libs
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

// Components
import { CheckBox, Toast } from "@/components";
import { TextInput, Button, Flex, Text } from "@tremor/react";

// Constants
import { MESSAGES_ERROR, SIGN_UP_MESSAGE, REGEX, ROUTES } from "@/constants";

// Actions
import { createNewAccount } from "@/actions";

// Types
import { User } from "@/types";

// Helpers
import { getFormData } from "@/helpers";
import { FaCheckCircle } from "react-icons/fa";

// Hooks
import { useToast } from "@/hooks/useToastMessage";

const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const [formStatus, setFormStatus] = useState({
    isPending: false,
    errorMessage: "",
  });

  const [checked, setChecked] = useState(false);

  const { name, email, password } = errors || {};
  const nameErrorMessage = name?.message?.toString();
  const emailErrorMessage = email?.message?.toString();
  const passwordErrorMessage = password?.message?.toString();
  const isDisableSubmit = !checked || formStatus.isPending;

  const handleCheckBox = () => {
    setChecked(!checked);
  };

  const { isOpenToast, handleCloseToast, handleOpenToast } = useToast();

  const handleSignUp = async (value: User) => {
    try {
      setFormStatus({
        isPending: true,
        errorMessage: "",
      });

      const res = await createNewAccount(
        { errorMessage: "" },
        getFormData(value),
      );

      setFormStatus({
        isPending: false,
        errorMessage: res?.errorMessage || "",
      });

      handleOpenToast();
    } catch (error: any) {
      setFormStatus({
        isPending: false,
        errorMessage: error?.errorMessage || "",
      });
    }
  };

  return (
    <div>
      {isOpenToast && (
        <div className="flex justify-center fixed right-5 top-5">
          <Toast
            icon={<FaCheckCircle />}
            message={SIGN_UP_MESSAGE.SUCCESS}
            onClose={handleCloseToast}
          />
        </div>
      )}
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="w-full p-2 sm:p-3 sign-up">
        <Controller
          control={control}
          rules={{
            required: MESSAGES_ERROR.NAME_REQUIRED,
            minLength: { value: 4, message: MESSAGES_ERROR.NAME_MIN_LENGTH },
            validate: value => {
              return !!value.trim() || MESSAGES_ERROR.NAME_REQUIRED;
            },
          }}
          render={({ field }) => (
            <div className="h-[70px] w-full">
              <TextInput
                id="name"
                placeholder="Name"
                autoFocus
                className="py-1 w-full rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 dark:border-white focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle shadow-none hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent ring-0"
                required
                {...field}
              />
              {nameErrorMessage && (
                <p className="pt-1 text-[11px] xs:text-xs text-red-500">
                  {nameErrorMessage}
                </p>
              )}
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
            <div className="h-[70px] w-full">
              <TextInput
                id="email"
                placeholder="Email"
                type="email"
                className="py-1 w-full rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 dark:border-white focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle shadow-none hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent ring-0"
                required
                tabIndex={0}
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
                id="password"
                placeholder="Password"
                type="password"
                className="py-1 w-full rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 dark:border-white focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle shadow-none hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent ring-0"
                required
                tabIndex={1}
                {...field}
              />
              {passwordErrorMessage && (
                <p className="pt-1 text-[11px] xs:text-xs leading-3 text-red-500">
                  {passwordErrorMessage}
                </p>
              )}
            </div>
          )}
          name="password"
        />

        <div className="flex items-center space-x-3 pt-3">
          <CheckBox
            checked={checked}
            handleCheckBox={handleCheckBox}
            tabIndex={2}
          />
          <Text className="text-xs xs:text-sm text-secondary dark:text-dark-romance font-normal">
            I agree the{" "}
            <Link
              href="#"
              className="no-underline text-primary dark:text-white font-bold">
              Terms and conditions
            </Link>
          </Text>
        </div>
        <Button
          tabIndex={3}
          aria-disabled={isDisableSubmit}
          type="submit"
          className="min-h-[43px] w-full bg-gradient-primary dark:bg-gradient-pickled py-[11px] mt-9 uppercase border-0 border-transparent hover:border-transparent"
          size="xs"
          disabled={isDisableSubmit}>
          <Text className="font-bold text-xs text-white dark:text-white">
            Create account
          </Text>
        </Button>

        <Flex className="mt-8 mb-2 justify-center items-center">
          <Text className="text-secondary dark:text-dark-romance text-xs xs:text-sm font-light">
            Already have an account?
          </Text>
          <Link
            tabIndex={4}
            className="text-primary dark:text-white font-semibold text-xs xs:text-sm ml-1"
            href={ROUTES.SIGN_IN}>
            Sign In
          </Link>
        </Flex>
      </form>
    </div>
  );
};

export default SignUp;
