"use client";

import { memo } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Button, Flex } from "@tremor/react";

// Constants
import { MESSAGES_ERROR } from "@/constants";

// Types
import { OptionType } from "@/types";
// Components
import { SelectField, DecimalNumberInputGroup } from "@/ui/components";

interface TransactionFormProps {
  options: OptionType[];
  onSubmit: SubmitHandler<FieldValues>;
  onClose?: () => void;
}

const TransactionForm = ({
  options,
  onSubmit,
  onClose,
}: TransactionFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm();

  return (
    <form
      id="createTransactionForm"
      className="flex flex-col gap-5 "
      onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        rules={{
          required: MESSAGES_ERROR.FIELD_REQUIRED,
        }}
        name="account"
        render={({
          field: { value, onChange, ...rest },
          fieldState: { error },
        }) => (
          <SelectField
            value={value}
            options={options}
            errorMessage={error?.message}
            placeholder="Choose an account to transfer"
            onChange={onChange}
            {...rest}
          />
        )}
      />
      <Controller
        control={control}
        rules={{
          required: MESSAGES_ERROR.FIELD_REQUIRED,
        }}
        name="amount"
        render={({
          field: { value, onChange, ...rest },
          fieldState: { error },
        }) => {
          return (
            <DecimalNumberInputGroup
              errorMessage={error?.message}
              value={value}
              onChange={onChange}
              label="Enter amount"
              {...rest}
            />
          );
        }}
      />
      <Flex justifyContent="end" className="gap-5">
        <Button type="submit" disabled={!isValid} loading={isSubmitting}>
          Submit
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </Flex>
    </form>
  );
};

export default memo(TransactionForm);
