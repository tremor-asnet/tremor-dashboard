export interface AvatarCard {
  avatar: string;
}

export interface Project {
  id: string;
  created_at?: string;
  name: string;
  description: string;
  participants: AvatarCard[];
  dueDate: string;
  cover: string;
}
