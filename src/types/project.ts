// Libs
import { ReactNode } from "react";

export type AvatarCard = {
  key: string;
  src: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  participant: number;
  date: string;
  icon: ReactNode;
  avatars: AvatarCard[];
};
