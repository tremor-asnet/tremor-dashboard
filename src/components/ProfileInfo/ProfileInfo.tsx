"use client";

// Libs
import { usePathname } from "next/navigation";

// Components
import Avatar from "../../components/Avatar/Avatar";
import { Title, Text } from "@tremor/react";

// Constants
import { ROUTES } from "../../constants";

interface ProfileInfoProps {
  isOnHeader: boolean;
  name: string;
  role: string;
  src: string;
}

const ProfileInfo = ({
  isOnHeader = true,
  name,
  role,
  src = "/images/avatar/avatar-lg.webp",
}: ProfileInfoProps) => {
  const pathname = usePathname();
  const isProjectPage = pathname === ROUTES.PROJECTS;

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between px-4 py-1">
      <div
        className={`flex flex-col xs:flex-row xs:items-center profile-info ${
          isProjectPage ? "mb-0" : "mb-6"
        }`}>
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
          <div className="xs:ml-6" data-testid="profile-info-lg">
            <Title className="font-semibold text-xl">{name}</Title>
            <Text>{role}</Text>
          </div>
        ) : (
          <div className="ml-4" data-testid="profile-info-md">
            <Title className="font-semibold">{name}</Title>
            <Text className="text-xs font-light truncate max-w-[165px]">
              {role}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
