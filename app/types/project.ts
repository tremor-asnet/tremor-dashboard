export type AvatarCard = {
  avatar: string;
};

export type Project = {
  id: string;
  created_at?: string;
  name: string;
  description: string;
  participants: AvatarCard[];
  dueDate: string;
  cover: string;
};
