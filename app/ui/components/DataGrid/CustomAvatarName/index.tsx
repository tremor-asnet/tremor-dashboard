// Components
import { CustomImage } from "@/ui/components";

interface CustomAvatarNameProps {
  avatar?: string;
  text: string;
}

const getRandomColor = () => {
  const colors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
const colorRandom = getRandomColor();

export const CustomAvatarName = ({ avatar, text }: CustomAvatarNameProps) => (
  <div className="flex justify-start items-center w-48">
    {avatar ? (
      <CustomImage
        className="w-6 h-6 min-w-[24px] rounded-full mr-2"
        alt={text}
        width={24}
        height={24}
        priority
        src={avatar}
      />
    ) : (
      <p
        className={`w-6 h-6 min-w-[24px] flex justify-center items-center text-white text-xs ${colorRandom} rounded-full mr-2`}>
        {text.substring(0, 1)}
      </p>
    )}
    <p className="text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] capitalize order-customer truncate">
      {text}
    </p>
  </div>
);

export default CustomAvatarName;
