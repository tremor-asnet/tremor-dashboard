"use client";

import { memo, useMemo } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Button, Flex } from "@tremor/react";

// Constants
import { TAGS_PRICE } from "@/constants";

// Components
import { SelectField, DecimalNumberInputGroup } from "@/ui/components";

interface TransactionFormProps {
  onSubmit: SubmitHandler<FieldValues>;
  onClose?: () => void;
}

const TransactionForm = ({ onSubmit, onClose }: TransactionFormProps) => {
  const { control, handleSubmit } = useForm();

  return (
    <form
      id="createTransactionForm"
      className="flex flex-col gap-5 "
      onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="account"
        render={() => (
          <SelectField
            placeholder="Choose an account to transfer"
            options={TAGS_PRICE}
          />
        )}
      />
      <Controller
        control={control}
        name="amount"
        render={() => <DecimalNumberInputGroup label="Enter amount" />}
      />
      <Flex justifyContent="end" className="gap-5">
        <Button type="submit">Submit</Button>
        <Button onClick={onClose}>Cancel</Button>
      </Flex>
    </form>
  );
};

export default memo(TransactionForm);
