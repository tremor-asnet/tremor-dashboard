export type Profile = {
  avatar: string;
  alt?: string;
  name: string;
  lastConversation: string;
};

export interface SettingSwitchProps {
  label: string;
  field: string;
}
