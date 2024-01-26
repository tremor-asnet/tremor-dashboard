import Image from "next/image";

interface CustomAvatarNameProps {
  customer: {
    id: number;
    avatar?: string;
    fullName: string;
  };
}

const CustomAvatarName = ({ customer }: CustomAvatarNameProps) => (
  <div className="flex justify-start items-center w-auto">
    {customer.avatar ? (
      <Image
        alt={customer.fullName}
        className="w-6 h-6 rounded-full mr-2"
        height={24}
        priority
        src={customer.avatar}
        width={24}
      />
    ) : (
      <div className="w-6 h-6 flex justify-center items-center text-white text-xs bg-primary rounded-full mr-2">
        {customer.fullName.substring(0, 1)}
      </div>
    )}
    <p className="text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] capitalize order-customer">
      {customer.fullName}
    </p>
  </div>
);

export default CustomAvatarName;
