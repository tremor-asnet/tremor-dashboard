"use client";

import { Text } from "@tremor/react";
// Components
import { UserConversationHistory } from "@/components";

// types
import { Conversation } from "@/types";

interface ConversationHistoryProps {
  conversationHistory: Conversation[];
}

const ConversationHistory = ({
  conversationHistory,
}: ConversationHistoryProps) => (
  <>
    <Text className="text-tremor-title text-tremor-content-title dark:text-dark-tremor-content-title leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-primary py-4">
      Conversations
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
