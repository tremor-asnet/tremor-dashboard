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
import { LIST_PROJECTS, TABS_HEADER } from "@/constants";

// Mocks
import { PROFILE_HEADER, PROFILE_INFO } from "@/mocks";

// Actions
import {
  getProfileConversations,
  getProfileProject,
} from "@/app/actions/profileAction";

const Profile = async () => {
  const data = await getProfileConversations();

  const projectData = await getProfileProject();
  console.log("projectData", projectData);

  return (
    <>
      <div className='bg-[linear-gradient(195deg,rgba(73,163,241,0.6),rgba(26,115,232,0.6)),url("/images/backgrounds/bg-profile.webp")] bg-cover bg-no-repeat bg-center min-h-[300px] pb-8 min-w-[320px] overflow-hidden p-4 rounded-xl'></div>
      <div className="mx-6 -mt-16">
        <Card>
          <Flex className="mb-2 py-2">
            {/* Header */}
            <ProfileInfo
              isOnHeader={true}
              name={PROFILE_HEADER.name}
              info={PROFILE_HEADER.description}
              src={PROFILE_HEADER.src}
            />
            <Tabs tabs={TABS_HEADER} />
          </Flex>
          {/* Main content */}
          <Flex className="items-start my-6">
            {/* Platform Setting */}
            <div className="min-w-[33%] p-4">
              <PlatformSetting title="Platform Setting" />
            </div>
            <hr className="rounded h-[400px] w-px bg-gray-100 bg-[linear-gradient(to_bottom,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] my-4 border-0 bg-transparent opacity-25" />
            {/* Profile Information */}
            <div className="min-w-[33%] p-4">
              <ContactCard
                title="profile information"
                description={PROFILE_INFO.description}
                info={PROFILE_INFO.info}
              />
            </div>
            <hr className="rounded h-[400px] w-px bg-gray-100 bg-[linear-gradient(to_bottom,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] my-4 border-0 bg-transparent opacity-25" />
            {/* Profile Conversations */}
            <div className="min-w-[33%] p-4">
              {/* <ProfileConversations
                title="conversations"
                profileList={data}
                onClick={() => {}}
              /> */}
            </div>
          </Flex>
          {/* Projects */}
          <Flex className="flex-col items-start">
            <Text className="text-[#344767] font-semibold text-base">
              Projects
            </Text>
            <Text className="font-light leading-normal text-sm text-[#7b809a]">
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
