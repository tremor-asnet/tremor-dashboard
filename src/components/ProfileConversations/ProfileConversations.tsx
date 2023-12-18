"use client";

import { Text } from "@tremor/react";

// Components
import { ProfileItem } from "@/components";

// types
import { Profile } from "@/types/profile";

interface ProfileConversationProps {
  title: string;
  profileList: Profile[];
}

const ProfileConversation = ({
  title,
  profileList,
}: ProfileConversationProps) => {
  return (
    <>
      <Text className="text-sm leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-[#344767] py-4">
        {title}
      </Text>
      {profileList.map(profile => (
        <ProfileItem
          key={profile.name}
          src={profile.src}
          alt={profile.alt}
          name={profile.name}
          description={profile.description}
        />
      ))}
    </>
  );
};

export default ProfileConversation;
