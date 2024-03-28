// Components
import { CustomImage } from "@/ui/components";
import { Text } from "@tremor/react";

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

const CustomAvatarName = ({ avatar, text }: CustomAvatarNameProps) => (
  <div className="flex justify-start items-center w-48">
    {avatar ? (
      <CustomImage
        className="w-10 h-10 min-w-[24px] md:w-12 md:h-12 lg:w-18 lg:h-18 rounded-full mr-2"
        alt={text}
        width={100}
        height={100}
        priority
        src={avatar}
      />
    ) : (
      <Text
        className={`w-6 h-6 min-w-[24px] flex justify-center items-center text-white text-xs ${colorRandom} rounded-full mr-2`}>
        {text.substring(0, 1)}
      </Text>
    )}
    <Text className="text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] capitalize order-customer truncate">
      {text}
    </Text>
  </div>
);

export default CustomAvatarName;
