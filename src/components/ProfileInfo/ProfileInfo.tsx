import Avatar from "@/components/Avatar/Avatar";
import { Title, Text } from "@tremor/react";

interface ProfileInfoProps {
  isOnHeader: boolean;
  name: string;
  info: string;
  src: string;
}

const ProfileInfo = ({
  isOnHeader = true,
  name = "Richard Davis",
  info = "CEO &#8260; Co-Founder",
  src = "&#8260;images&#8260;avatar&#8260;avatar-lg.webp",
}: ProfileInfoProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between px-4 py-1">
      <div className="flex items-center mb-6">
        <div className="flex items-center">
          {isOnHeader ? (
            <Avatar
              alt="Avatar medium"
              className="shadow-lg"
              height={74}
              priority
              src={src}
              width={74}
            />
          ) : (
            <Avatar
              alt="Avatar medium"
              className="shadow-md"
              height={48}
              priority
              src={src}
              width={48}
            />
          )}
        </div>
        {isOnHeader ? (
          <div className="ml-6">
            <Title className="font-semibold text-xl">{name}</Title>
            <Text>{info}</Text>
          </div>
        ) : (
          <div className="ml-4">
            <Title className="font-semibold">{name}</Title>
            <Text className="text-xs font-light truncate max-w-[165px]">
              {info}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
