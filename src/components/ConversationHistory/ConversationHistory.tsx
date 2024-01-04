"use client";

import { Text } from "@tremor/react";
// Components
import { UserConversationHistory } from "@/components";

// types
import { ConversationHistoryType } from "@/types/profile";

interface ConversationHistoryProps {
  conversationHistory: ConversationHistoryType[];
}

const ConversationHistory = ({
  conversationHistory,
}: ConversationHistoryProps) => (
  <>
    <Text className="text-tremor-title leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-primary py-4">
      Profile Conversations
    </Text>
    {conversationHistory.map(conversation => (
      <UserConversationHistory
        key={conversation.id}
        avatar={conversation.avatar}
        name={conversation.name}
        lastConversation={conversation.lastConversation}
      />
    ))}
  </>
);

export default ConversationHistory;
