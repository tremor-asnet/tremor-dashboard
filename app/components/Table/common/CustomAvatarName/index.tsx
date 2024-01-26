import Image from "next/image";

interface CustomAvatarNameProps {
  avatar?: string;
  text: string;
}

export const CustomAvatarName = ({ avatar, text }: CustomAvatarNameProps) => (
  <div className="flex justify-start items-center w-auto">
    {avatar ? (
      <Image
        className="w-6 h-6 rounded-full mr-2"
        alt={text}
        width={24}
        height={24}
        priority
        src={avatar}
      />
    ) : (
      <div className="w-6 h-6 flex justify-center items-center text-white text-xs bg-primary rounded-full mr-2">
        {text.substring(0, 1)}
      </div>
    )}
    <p className="text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] capitalize order-customer">
      {text}
    </p>
  </div>
);
