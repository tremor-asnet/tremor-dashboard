"use client";

// Libs
import dynamic from "next/dynamic";
import { Control, Controller, FieldErrors } from "react-hook-form";

// Constants
import { CATEGORY_PRODUCT, MESSAGES_ERROR } from "@/constants";

// Types
import { IProductInfo } from "@/types";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

interface ProductInfoProps {
  control: Control<IProductInfo>;
  errors: FieldErrors<IProductInfo>;
}

const ProductInfo = ({ control, errors }: ProductInfoProps) => {
  const errorNameMsg = errors.productName?.message;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Controller
        name="productName"
        control={control}
        rules={{
          required: MESSAGES_ERROR.FIELD_REQUIRED,
          minLength: {
            value: 4,
            message: MESSAGES_ERROR.MIN_LENGTH_4,
          },
        }}
        render={({ field }) => (
          <div>
            <h3 className="text-sm text-[#7b809a] dark:text-white">Name</h3>
            <input
              className="product-info-input"
              type="text"
              placeholder="Name"
              {...field}
            />
            <p className="product-info-err-msg">{errorNameMsg}</p>
          </div>
        )}
      />

      {/* Prevent input e, E, +, - to weight field */}
      <Controller
        name="weight"
        control={control}
        render={({ field }) => (
          <div>
            <h3 className="text-sm text-[#7b809a] dark:text-white">Weight</h3>
            <input
              className="product-info-input"
              type="number"
              placeholder="Weight"
              onKeyDown={e => {
                ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
              }}
              {...field}
            />
          </div>
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <div className="w-full">
            <h3 className="text-sm text-[#7b809a] dark:text-white">
              Description{" "}
              <span className="text-xs">&#x276A;optional&#x276B;</span>
            </h3>
            <QuillEditor
              placeholder="Content goes here..."
              className="mt-1 rounded-md text-secondary dark:text-white"
              {...field}
            />
          </div>
        )}
      />

      <div className="flex flex-col gap-6">
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <div>
              <h3 className="text-sm text-[#7b809a] dark:text-white">
                Category
              </h3>
              <select
                className="product-info-input mt-1 dark:text-white"
                {...field}>
                {CATEGORY_PRODUCT.map(item => (
                  <option key={item.value} value={item.value}>
                    {item.option}
                  </option>
                ))}
              </select>
            </div>
          )}
        />

        {/* Prevent input e, E, +, - and . to quantity field */}
        <Controller
          name="quantity"
          control={control}
          render={({ field }) => (
            <div>
              <h3 className="text-sm text-[#7b809a] dark:text-white">
                Quantity
              </h3>
              <input
                className="product-info-input"
                type="number"
                placeholder="Quantity"
                onKeyDown={e => {
                  ["e", "E", "+", "-", "."].includes(e.key) &&
                    e.preventDefault();
                }}
                {...field}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
