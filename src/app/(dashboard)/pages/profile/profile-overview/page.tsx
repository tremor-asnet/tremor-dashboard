import { Flex, Card, Text } from "@tremor/react";

// Components
import {
  Tabs,
  ProfileConversations,
  ProfileInfo,
  ProfileProjectCard,
  ContactCard,
  PlatformSetting,
} from "@/components";

// Constants
import { TABS_HEADER } from "@/constants";

// Mocks
import { PROFILE_HEADER } from "@/mocks";

// Actions
import {
  getProfileConversations,
  getProfileProject,
} from "@/app/actions/profileAction";

const Profile = async () => {
  const profileData = await getProfileConversations();
  const projectData = await getProfileProject();

  return (
    <>
      <div className='bg-[linear-gradient(195deg,rgba(73,163,241,0.6),rgba(26,115,232,0.6)),url("/images/backgrounds/bg-profile.webp")] bg-cover bg-no-repeat bg-center min-h-[300px] pb-8 md:min-w-[320px] overflow-hidden p-4 rounded-xl'></div>
      <div className="mx-6 -mt-16">
        <Card>
          <Flex className="mb-2 py-2 flex-col md:flex-row items-start md:items-center">
            {/* Header */}
            <ProfileInfo
              isOnHeader={true}
              name={profileData.name}
              role={profileData.role}
              src={PROFILE_HEADER.src}
            />
            <Tabs tabs={TABS_HEADER} className="mx-auto sm:mx-0" />
          </Flex>
          {/* Main content */}
          <Flex className="flex-col items-start my-6 md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-5">
            <Flex className="flex-col items-start md:flex-row md:gap-4 lg:w-[68%] lg:gap-6">
              {/* Platform Setting */}
              <div className="w-full md:basis-2/4">
                <PlatformSetting
                  title="Platform Setting"
                  accountSetting={profileData.account_setting}
                  applicationSetting={profileData.application_setting}
                />
              </div>
              <hr className="hidden rounded h-[400px] w-px bg-gray-100 bg-[linear-gradient(to_bottom,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] my-4 border-0 bg-transparent opacity-25 lg:flex" />
              {/* Profile Information */}
              <Flex className="w-full md:basis-2/4">
                <ContactCard
                  title="profile information"
                  information={profileData.information}
                  fullName={profileData.name}
                  phone={profileData.phone}
                  email={profileData.email}
                  location={profileData.location}
                />
              </Flex>
              <hr className="hidden rounded h-[400px] w-px bg-gray-100 bg-[linear-gradient(to_bottom,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] my-4 border-0 bg-transparent opacity-25 lg:flex" />
            </Flex>
            {/* Profile Conversations */}
            <div className="w-full lg:basis-1/3">
              <ProfileConversations
                title="conversations"
                profileList={profileData?.conversations || []}
              />
            </div>
          </Flex>
          {/* Projects */}
          <Flex className="flex-col items-start px-4">
            <Text className="text-[#344767] font-semibold text-tremor-title">
              Projects
            </Text>
            <Text className="font-light leading-normal text-sm text-secondary mb-6">
              Architects design houses
            </Text>
            <ProfileProjectCard links={projectData} />
          </Flex>
        </Card>
      </div>
    </>
  );
};

export default Profile;
