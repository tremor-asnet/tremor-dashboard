"use client";

// Libs
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Components
import { CheckBox, Toast } from "@/components";
import { TextInput, Button, Flex, Text } from "@tremor/react";

// Constants
import { MESSAGES_ERROR, SIGN_UP_MESSAGE, REGEX, ROUTES } from "@/constants";

// Actions
import { createNewAccount } from "@/app/actions";

// Types
import { User } from "@/types";

// Helpers
import { getFormData } from "@/helpers";

const SignUp = () => {
  const router = useRouter();
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
  const [openToast, setOpenToast] = useState(false);

  const { name, email, password } = errors || {};
  const nameErrorMessage = name?.message?.toString();
  const emailErrorMessage = email?.message?.toString();
  const passwordErrorMessage = password?.message?.toString();
  const isNameError = Boolean(name);
  const isEmailError = Boolean(email);
  const isPasswordError = Boolean(password);
  const isDisableSubmit =
    isEmailError ||
    isPasswordError ||
    isNameError ||
    !checked ||
    formStatus.isPending;

  const handleCheckBox = () => {
    setChecked(!checked);
  };

  const handleCloseToast = () => {
    setOpenToast(false);
  };

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

      // TODO: Re-build Toast component
      setOpenToast(true);
      setTimeout(() => {
        router.push(ROUTES.SIGN_IN);
      }, 2000);
    } catch (error: any) {
      setFormStatus({
        isPending: false,
        errorMessage: error?.errorMessage || "",
      });
    }
  };

  return (
    <div>
      {openToast && (
        // TODO: Re-build Toast component
        <div className="flex justify-center">
          <Toast message={SIGN_UP_MESSAGE.SUCCESS} onClose={handleCloseToast} />
        </div>
      )}
      <form onSubmit={handleSubmit(handleSignUp)} className="w-full p-2 sm:p-3">
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
                autoFocus
                className="py-1 w-full rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle shadow-none hover:bg-transparent ring-0"
                tabIndex={0}
                required
                {...field}
              />
              {isNameError && (
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
            <div tabIndex={1} className="h-[68px] w-full">
              <TextInput
                id="email"
                placeholder="Email"
                type="email"
                className="py-1 w-full rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle shadow-none hover:bg-transparent ring-0"
                required
                {...field}
              />
              {isEmailError && (
                <p className="pt-1 text-[11px] xs:text-xs text-red-500">
                  {emailErrorMessage}
                </p>
              )}
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
                type="password"
                className="py-1 w-full rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle shadow-none hover:bg-transparent ring-0"
                required
                {...field}
              />
              {isPasswordError && (
                <p className="pt-1 text-[11px] xs:text-xs leading-3 text-red-500">
                  {passwordErrorMessage}
                </p>
              )}
            </div>
          )}
          name="password"
        />

        <div className="flex items-center space-x-3 pt-3">
          <CheckBox checked={checked} handleCheckBox={handleCheckBox} />
          <Text className="text-xs xs:text-sm text-primary text-secondary font-normal">
            I agree the{" "}
            <Link
              tabIndex={4}
              href="#"
              className="no-underline text-primary font-bold">
              Terms and conditions
            </Link>
          </Text>
        </div>
        <Button
          tabIndex={5}
          aria-disabled={isDisableSubmit}
          type="submit"
          className="w-full focus:ring-2 bg-gradient-primary py-[11px] mt-9 uppercase border-transparent hover:border-transparent hover:shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem]"
          size="xs"
          disabled={isDisableSubmit}>
          <Text className="font-bold text-xs text-white">Create account</Text>
        </Button>

        <Flex className="mt-8 mb-2 justify-center items-center">
          <Text className="text-secondary text-xs xs:text-sm font-light">
            Already have an account?
          </Text>
          <Link
            tabIndex={6}
            className="text-primary font-semibold text-xs xs:text-sm ml-1"
            href={ROUTES.SIGN_IN}>
            Sign In
          </Link>
        </Flex>
      </form>
    </div>
  );
};

export default SignUp;
