"use client";

// Libs
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Components
import { TextInput, Button, Flex, Text } from "@tremor/react";
import { LoadingIndicator, Checkbox } from "@/ui/components";

// Icons
import { TbExclamationMark } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

// Constants
import { MESSAGES_ERROR, SIGN_UP_MESSAGE, REGEX, ROUTES } from "@/constants";

// Actions
import { createNewAccount } from "@/actions";

// Types
import { User } from "@/types";

// Helpers
import { getFormData } from "@/helpers";

//Styles
import "@/styles/form.css";

// Hooks
import { useToast } from "@/hooks";

const SignUpForm = () => {
  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<User>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      termsAndConditions: false,
    },
    mode: "onSubmit",
  });

  const [formStatus, setFormStatus] = useState({
    isPending: false,
    errorMessage: "",
    isSuccess: false,
  });

  const { openToast } = useToast();
  const { isPending } = formStatus;
  const hasError = !!(formStatus.errorMessage?.toString()).length;
  const router = useRouter();

  const handleSignUp = async (value: User) => {
    try {
      setFormStatus({
        isPending: true,
        errorMessage: "",
        isSuccess: false,
      });

      openToast({
        toastType: {
          icon: <TbExclamationMark />,
          message: SIGN_UP_MESSAGE.PENDING,
          color: "yellow",
        },
      });

      const res = await createNewAccount(
        { errorMessage: "" },
        getFormData(value),
      );

      setFormStatus({
        isPending: false,
        errorMessage: res?.errorMessage || "",
        isSuccess: res?.isSuccess || false,
      });

      openToast({
        toastType: {
          icon: <FaCheckCircle />,
          message: SIGN_UP_MESSAGE.SUCCESS,
          color: "green",
        },
      });

      res?.isSuccess && router.replace(ROUTES.SIGN_IN);
    } catch (error: any) {
      setFormStatus({
        isPending: false,
        errorMessage: error?.errorMessage || "",
        isSuccess: false,
      });

      openToast({
        toastType: {
          icon: <RxCross2 />,
          message: SIGN_UP_MESSAGE.FAILED,
          color: "red",
        },
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="w-full p-2 sign-up">
        {isPending && (
          <div className="opacity-25 fixed inset-0 z-20 bg-black cursor-not-allowed" />
        )}
        <Controller
          control={control}
          rules={{
            required: MESSAGES_ERROR.NAME_REQUIRED,
            minLength: { value: 4, message: MESSAGES_ERROR.NAME_MIN_LENGTH },
            validate: value => {
              return !!value.trim() || MESSAGES_ERROR.NAME_REQUIRED;
            },
          }}
          render={({ field }) => {
            const nameErrorMessage = errors.name?.message || "";

            return (
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
                  <Text className="pt-1 text-xs text-red-500 dark:text-red-500">
                    {nameErrorMessage}
                  </Text>
                )}
              </div>
            );
          }}
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
          render={({ field }) => {
            const emailErrorMessage = errors.email?.message || "";

            return (
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
              message: MESSAGES_ERROR.PASSWORD_INVALID,
            },
          }}
          render={({ field }) => {
            const passwordErrorMessage = errors.password?.message || "";

            return (
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
                  <Text className="pt-1 text-xs leading-3 text-red-500 dark:text-red-500">
                    {passwordErrorMessage}
                  </Text>
                )}
              </div>
            );
          }}
          name="password"
        />
        {hasError && (
          <Text className="text-xs leading-3 text-red-500 dark:text-red-500">
            {formStatus.errorMessage?.toString()}
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: MESSAGES_ERROR.TERMS_REQUIRED,
          }}
          render={({ field: { value, onChange } }) => {
            const termErrorMessage = errors.termsAndConditions?.message || "";

            return (
              <div>
                <div className="flex items-center space-x-3 pt-3">
                  <Checkbox
                    id="termsAndConditions"
                    onChange={onChange}
                    checked={value}
                    tabIndex={2}
                    disabled={isPending}
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
                {termErrorMessage && (
                  <Text className="pt-1 text-xs leading-3 text-red-500 dark:text-red-500">
                    {termErrorMessage}
                  </Text>
                )}
              </div>
            );
          }}
          name="termsAndConditions"
        />
        <Button
          tabIndex={3}
          type="submit"
          className="min-h-[43px] w-full bg-gradient-primary dark:bg-gradient-pickled rounded-lg py-[11px] mt-9 uppercase border-0 border-transparent hover:border-transparent"
          size="xs"
          disabled={!isDirty}>
          {isPending ? (
            <LoadingIndicator width={5} height={5} />
          ) : (
            <Text className="font-bold text-xs text-white dark:text-white">
              Create account
            </Text>
          )}
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

export default SignUpForm;
