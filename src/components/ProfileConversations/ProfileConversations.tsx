"use client";

// Components
import { ProfileItem } from "@/components";

// types
import { Profile } from "@/types/profile";

interface ProfileConversationProps {
  profileList: Profile[];
  onClick: () => void;
}

const ProfileConversation = ({
  profileList,
  onClick,
}: ProfileConversationProps) => {
  return (
    <>
      {profileList.map(profile => (
        <ProfileItem
          key={profile.name}
          src={profile.src}
          alt={profile.alt}
          name={profile.name}
          description={profile.description}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export default ProfileConversation;
