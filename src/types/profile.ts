export type ConversationHistoryType = {
  id: string;
  avatar: string;
  name: string;
  lastConversation: string;
};

export interface SettingSwitchProps {
  label: string;
  field: string;
}
