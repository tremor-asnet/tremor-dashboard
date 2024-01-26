import { ReactNode } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { MdLeaderboard, MdStore, MdWeekend } from "react-icons/md";

interface Icon {
  bgIcon: string;
  icon: ReactNode;
}

interface Sale {
  [key: string]: Icon;
}

export const SALE_STATISTICAL: Sale = {
  bookings: {
    bgIcon: "bg-gradient-arsenic",
    icon: <MdWeekend color="white" size="24px" />,
  },
  todayUser: {
    bgIcon: "bg-[linear-gradient(195deg,#49a3f1,#1A73E8)]",
    icon: <MdLeaderboard color="white" size="24px" />,
  },
  revenue: {
    bgIcon: "bg-[linear-gradient(195deg,#66BB6A,#43A047)]",
    icon: <MdStore color="white" size="24px" />,
  },
  followers: {
    bgIcon: "bg-[linear-gradient(195deg,#EC407A,#D81B60)]",
    icon: <IoMdPersonAdd color="white" size="24px" />,
  },
};
