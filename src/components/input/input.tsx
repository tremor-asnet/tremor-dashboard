import { HTMLInputTypeAttribute, memo } from 'react';

// Define the props for the Input component
interface InputProps {
  type: HTMLInputTypeAttribute;
  variant: 'primary' | 'secondary';
  id: string;
  ariaDescribedby?: string;
  placeholder: string;
  label: string;
  htmlFor?: string;
  errorMessage?: string;
}

/**
 * Primary UI component for Input component
 */
const Input = ({
    type='text',
    id,
    ariaDescribedby,
    placeholder,
    label='User Name',
    variant,
    errorMessage,
  }: InputProps): JSX.Element => {

    // note TODO: using tailwind @apply
    const inputPrimaryClasses = `block w-full placeholder-opacity-0 placeholder-black cursor-text p-3 text-sm text-tremor-content-title bg-transparent peer rounded-tremor-small outline outline-1 focus:outline-2 focus:outline-offset-[-1px] ${!errorMessage ? ' outline-tremor-outline focus:outline-tremor-brand-subtle' : ' outline-red-600 focus:outline-red-600'}`;

    // note TODO: using tailwind @apply
    const inputSecondaryClasses = `block w-full placeholder-opacity-0 placeholder-black cursor-text p-3 text-sm text-tremor-content-title bg-transparent peer ${!errorMessage ? ' border-0 border-b focus:border-b-2 border-gray-300 focus:outline-none focus:border-tremor-brand-subtle' : ' text-tremor-content-emphasis border-0 border-b focus:border-b-2 border-red-600 focus:outline-none focus:border-red-600'}`;

    // note TODO: using tailwind @apply
    const labelPrimaryClasses = `absolute cursor-text text-sm duration-300 transform peer-placeholder-shown:scale-100 scale-75 origin-[0] peer-focus:scale-75 -translate-y-4 top-2 z-10 bg-white px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 start-1 ${!errorMessage ? ' text-tremor-content peer-focus:text-tremor-content-title' : ' text-red-600  peer-focus:text-red-600'}`;

    // note TODO: using tailwind @apply
    const labelSecondaryClasses = `absolute cursor-text text-sm duration-300 transform peer-placeholder-shown:scale-100 scale-75 origin-[0] peer-focus:scale-75 -translate-y-6 top-3 z-10 peer-focus:start-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${!errorMessage ? ' text-tremor-content peer-focus:text-tremor-content-title' : ' text-red-600  peer-focus:text-red-600'}`;

  return (
    <div className="block">
      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`${variant === 'primary' ? inputPrimaryClasses : inputSecondaryClasses}`}
          aria-describedby={ariaDescribedby}
        />
        <label
          htmlFor={id}
          className={`${variant === 'primary' ? labelPrimaryClasses : labelSecondaryClasses}`}
        >
          {label}
        </label>
      </div>
      
      {errorMessage &&
        <p
          className="mt-2 text-xs text-red-600"
        >
          {errorMessage}
        </p>
      }
    </div>
  );
}

export default memo(Input);
