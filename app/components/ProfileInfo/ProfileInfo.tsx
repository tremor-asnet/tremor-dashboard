"use client";

// Libs
import { usePathname } from "next/navigation";

// Components
import Avatar from "@/components/Avatar/Avatar";
import { Title, Text } from "@tremor/react";

// Constants
import { ROUTES } from "@/constants";

interface ProfileInfoProps {
  name: string;
  role: string;
  avatarUrl: string;
}

const ProfileInfo = ({ name, role, avatarUrl }: ProfileInfoProps) => {
  const pathname = usePathname();
  const isProjectPage = pathname === ROUTES.PROJECTS;

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
      <div
        className={`flex flex-col xs:flex-row xs:items-center flex-wrap profile-info ${
          isProjectPage ? "my-1" : "mb-3 -mt-3 -ml-2"
        }`}>
        <div className="flex items-center mr-6">
          <Avatar
            alt="Avatar medium"
            className="shadow-lg"
            height={74}
            priority
            src={avatarUrl}
            width={74}
          />
        </div>
        <div className="py-4" data-testid="profile-info-lg">
          <Title className="font-semibold text-xl dark:text-dark-primary">
            {name}
          </Title>
          <Text className="font-normal dark:text-dark-romance">{role}</Text>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
