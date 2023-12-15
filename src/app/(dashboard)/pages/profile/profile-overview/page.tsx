"use client";

import { Flex, Card, Text } from "@tremor/react";

// Components
import { Avatar, Tabs } from "@/components";

// Constants
import { TABS_HEADER } from "@/constants/profile";

// Mocks
import { PROFILE_ITEM } from "@/mocks/profileItem";

const Profile = () => {
  return (
    <>
      <div className='bg-[linear-gradient(195deg,rgba(73,163,241,0.6),rgba(26,115,232,0.6)),url("/images/backgrounds/bg-profile.webp")] bg-cover bg-no-repeat bg-center min-h-[300px] pb-8 min-w-[320px] overflow-hidden p-4 rounded-xl'></div>
      <div className="mx-6 -mt-16">
        <Card>
          <Flex className="mb-2 py-2">
            {/* TODO: Will update when have profile header component */}
            <Flex className="justify-start">
              <Avatar
                src={PROFILE_ITEM.src}
                width={48}
                height={48}
                alt={PROFILE_ITEM.alt}
              />
              <div className="font-medium dark:text-white pl-4">
                <Text className="text-sm text-[#344767] font-semibold">
                  {PROFILE_ITEM.name}
                </Text>
                <Text className="text-xs text-[#7b809a] font-light">
                  {PROFILE_ITEM.description}
                </Text>
              </div>
            </Flex>
            <Tabs tabs={TABS_HEADER} />
          </Flex>
        </Card>
      </div>
    </>
  );
};

export default Profile;
