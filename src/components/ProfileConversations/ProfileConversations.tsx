"use client";

import { Text } from "@tremor/react";
// Components
import { ConversationItem } from "@/components";

// types
import { Profile } from "@/types/profile";

interface ProfileConversationProps {
  title: string;
  profileList: Profile[];
}

const ProfileConversation = ({
  title,
  profileList,
}: ProfileConversationProps) => (
  <>
    <Text className="text-sm leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-[#344767] py-4">
      {title}
    </Text>
    {profileList.map(profile => (
      <ConversationItem
        key={profile.name}
        src={profile.avatar}
        name={profile.name}
        description={profile.lastConversation}
      />
    ))}
  </>
);

export default ProfileConversation;
