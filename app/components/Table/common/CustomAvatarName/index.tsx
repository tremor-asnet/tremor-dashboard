import Image from "next/image";

interface CustomAvatarNameProps {
  avatar?: string;
  text: string;
}

export const CustomAvatarName = ({ avatar, text }: CustomAvatarNameProps) => (
  <div className="flex justify-start items-center w-48">
    {avatar ? (
      <Image
        className="w-6 h-6 min-w-[24px] rounded-full mr-2"
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
    <p className="text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] capitalize order-customer truncate">
      {text}
    </p>
  </div>
);
