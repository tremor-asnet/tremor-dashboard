"use client";

import { Text } from "@tremor/react";
// Components
import { ConversationItem } from "@/components";

// types
import { Profile } from "@/types/profile";

interface ConversationHistoryProps {
  profileList: Profile[];
}

const ConversationHistory = ({ profileList }: ConversationHistoryProps) => (
  <>
    <Text className="text-tremor-title leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-primary py-4">
      Profile Conversations
    </Text>
    {profileList.map(profile => (
      <ConversationItem
        key={profile.id}
        src={profile.avatar}
        name={profile.name}
        description={profile.lastConversation}
      />
    ))}
  </>
);

export default ConversationHistory;
