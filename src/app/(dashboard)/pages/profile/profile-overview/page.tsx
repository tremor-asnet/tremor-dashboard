import { Flex, Card, Text } from "@tremor/react";

// Components
import {
  ConversationHistory,
  ProfileInfo,
  ProjectInfoCard,
  ContactCard,
  PlatformSetting,
} from "@/components";

// Actions
import { getProfile, getProfileProject } from "@/app/actions";

const Profile = async () => {
  const profileData = await getProfile();
  const projectData = await getProfileProject();

  return (
    <>
      <div className='bg-[linear-gradient(195deg,rgba(73,163,241,0.6),rgba(26,115,232,0.6)),url("/images/backgrounds/bg-profile.webp")] bg-cover bg-no-repeat bg-center min-h-[300px] pb-8 md:min-w-[320px] overflow-hidden p-4 rounded-xl'></div>
      <div className="mx-6 -mt-16">
        <Card>
          <Flex className="flex-col md:flex-row items-start md:items-center">
            {/* Header */}
            <ProfileInfo
              name={profileData.name}
              role={profileData.role}
              avatarUrl={profileData.avatar}
            />
          </Flex>
          {/* Main content */}
          <Flex className="flex-col items-start my-6 md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-5">
            <Flex className="flex-col items-start md:flex-row md:gap-4 lg:w-[68%] lg:gap-6">
              {/* Platform Setting */}
              <div className="w-full md:basis-2/4">
                <PlatformSetting
                  accountSettingData={profileData.account_setting}
                  applicationSettingData={profileData.application_setting}
                />
              </div>
              <hr className="hidden rounded h-[400px] w-px bg-gray-100 bg-[linear-gradient(to_bottom,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] my-4 border-0 bg-transparent opacity-25 md:flex" />
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
              <hr className="hidden rounded h-[400px] w-px bg-gray-100 bg-[linear-gradient(to_bottom,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] my-4 border-0 bg-transparent opacity-25 md:flex" />
            </Flex>
            {/* Profile Conversations */}
            <div className="w-full mt-6 lg:mt-0 lg:basis-1/3">
              <ConversationHistory
                conversationHistory={profileData?.conversations || []}
              />
            </div>
          </Flex>
          {/* Projects */}
          <Flex className="flex-col items-start">
            <Text className="text-primary font-semibold text-tremor-title">
              Projects
            </Text>
            <Text className="font-light leading-normal text-sm text-secondary mb-6">
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
