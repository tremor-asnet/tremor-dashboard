import dynamic from "next/dynamic";

// Components
import { Flex, Card, Text } from "@tremor/react";

import { PlatformSetting, ContactCard, ProjectInfoCard } from "@/ui/features";
const ProfileInfo = dynamic(
  () => import("@/ui/features/all-projects/ProfileInfo/ProfileInfo"),
);
const ConversationHistory = dynamic(
  () =>
    import("@/ui/features/my-profile/ConversationHistory/ConversationHistory"),
);

// Actions
import { getProfile, getProfileProject } from "@/services";

export const metadata = {
  title: "Profile Overview - Tremor Dashboard",
};

const Profile = async () => {
  const profileData = await getProfile();
  const projectData = await getProfileProject();

  return (
    <>
      <div className='bg-[linear-gradient(195deg,rgba(73,163,241,0.6),rgba(26,115,232,0.6)),url("/images/backgrounds/bg-profile.webp")] bg-cover bg-no-repeat bg-center min-h-[300px] pb-8 md:min-w-[320px] overflow-hidden p-4 rounded-xl'></div>
      <div className="mx-6 -mt-16">
        <Card className="dark:bg-dark-tremor-primary ring-0">
          <Flex className="flex-col md:flex-row items-start md:items-center">
            {/* Header */}
            <ProfileInfo
              name={profileData.name}
              role={profileData.role}
              avatarUrl={profileData.avatar}
            />
          </Flex>
          {/* Main content */}
          <Flex className="flex-col items-start my-6 md:flex-row md:flex-wrap lg:flex-wrap lg:gap-5 xl:flex-nowrap">
            <Flex className="flex-col items-start md:flex-row md:gap-4 lg:gap-10">
              {/* Platform Setting */}
              <div className="w-full md:basis-2/4">
                <PlatformSetting
                  accountSettingData={profileData.account_setting}
                  applicationSettingData={profileData.application_setting}
                />
              </div>
              <hr className="hidden rounded h-[400px] w-px bg-gradient-lighter dark:bg-gradient-dark my-4 border-0 opacity-25 md:flex" />
              {/* Profile Information */}
              <Flex className="w-full md:basis-2/4">
                <ContactCard
                  information={profileData.information}
                  fullName={profileData.name}
                  phone={profileData.phone}
                  email={profileData.email}
                  location={profileData.location}
                  socials={profileData.socials}
                />
              </Flex>
              <hr className="hidden rounded h-[400px] w-px bg-gradient-lighter dark:bg-gradient-dark my-4 border-0 opacity-25 md:flex" />
            </Flex>
            {/* Profile Conversations */}
            <div className="w-full mt-6 lg:mt-0 xl:w-[50%]">
              <ConversationHistory
                conversationHistory={profileData?.conversations || []}
              />
            </div>
          </Flex>
          {/* Projects */}
          <Flex className="flex-col items-start">
            <Text className="text-tremor-content-title dark:text-dark-tremor-content-title font-semibold text-tremor-title">
              Projects
            </Text>
            <Text className="font-light leading-normal  dark:text-dark-tremor-content-romance text-sm text-secondary mb-6">
              Architects design houses
            </Text>
            <ProjectInfoCard links={projectData} />
          </Flex>
        </Card>
      </div>
    </>
  );
};

export default Profile;
