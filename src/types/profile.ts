export type ConversationHistory = {
  id: number;
  avatar: string;
  name: string;
  lastConversation: string;
};

export interface SettingSwitchProps {
  label: string;
  field: string;
}
