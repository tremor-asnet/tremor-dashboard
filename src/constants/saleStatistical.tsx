import { ReactNode } from "react";
import {
  MdLanguage,
  MdOutlinePersonAdd,
  MdOutlineStore,
  MdWeekend,
} from "react-icons/md";

type Icon = {
  bgIcon: string;
  icon: ReactNode;
};

type Sale = {
  [key: string]: any;
  booking: Icon;
  todayUser: Icon;
  revenus: Icon;
  followers: Icon;
};

export const SALE_STATISTICAL: Sale = {
  booking: {
    bgIcon: "bg-[linear-gradient(195deg,#42424a,#191919)]",
    icon: <MdLanguage color="white" size="24px" />,
  },
  todayUser: {
    bgIcon: "bg-[linear-gradient(195deg,#42424a,#191919)]",
    icon: <MdWeekend color="white" size="24px" />,
  },
  revenus: {
    bgIcon: "bg-[linear-gradient(195deg,#42424a,#191919)]",
    icon: <MdOutlineStore color="white" size="24px" />,
  },
  followers: {
    bgIcon: "bg-[linear-gradient(195deg,#42424a,#191919)]",
    icon: <MdOutlinePersonAdd color="white" size="24px" />,
  },
};
