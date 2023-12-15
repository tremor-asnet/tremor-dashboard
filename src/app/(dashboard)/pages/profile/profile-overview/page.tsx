"use client";

import { Flex, Card, Text, Switch } from "@tremor/react";

// Components
import { Avatar, Tabs } from "@/components";

// Constants
import {
  ACCOUNT_SWITCH,
  APPLICATION_SWITCH,
  TABS_HEADER,
} from "@/constants/profile";

// Mocks
import { PROFILE_CONVERSATIONS, PROFILE_ITEM } from "@/mocks/profileItem";
import { ProfileConversations } from "@/components";
import { useState } from "react";
import { SettingSwitchProps } from "@/types/profile";

const Profile = () => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  // Handle to change value is (true or false) for attr checked switch
  const handleSwitchChange = (value: boolean) => {
    setIsSwitchOn(value);
  };

  return (
    <>
      <div className='bg-[linear-gradient(195deg,rgba(73,163,241,0.6),rgba(26,115,232,0.6)),url("/images/backgrounds/bg-profile.webp")] bg-cover bg-no-repeat bg-center min-h-[300px] pb-8 min-w-[320px] overflow-hidden p-4 rounded-xl'></div>
      <div className="mx-6 -mt-16">
        <Card>
          <Flex className="mb-2 py-2">
            {/* Header */}
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
          {/* Main content */}
          <Flex className="items-start my-6">
            <div className="min-w-[33%] p-4">
              <Text className="text-sm leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-[#344767] py-4">
                Platform Setting
              </Text>
              <Flex className="flex-col items-start">
                <text className="text-xs leading-tight opacity-100 uppercase no-underline text-[#7b809a] font-bold m-0 pt-4">
                  account
                </text>
                {ACCOUNT_SWITCH.map(({ label }: SettingSwitchProps) => (
                  <>
                    <div className="flex items-center space-x-3 mt-1 py-3">
                      <Switch
                        key={label}
                        tabIndex={2}
                        id="switch"
                        name="switch"
                        checked={isSwitchOn}
                        color="zinc"
                        className="flex justify-center items-center"
                        onChange={handleSwitchChange}
                      />
                      <Text className="text-secondary font-normal">
                        {label}
                      </Text>
                    </div>
                  </>
                ))}
                <text className="text-xs leading-tight opacity-100 uppercase no-underline text-[#7b809a] font-bold m-0 pt-4">
                  application
                </text>
                {APPLICATION_SWITCH.map(({ label }: SettingSwitchProps) => (
                  <>
                    <div className="flex items-center space-x-3 mt-1 py-3">
                      <Switch
                        key={label}
                        tabIndex={2}
                        id="switch"
                        name="switch"
                        checked={isSwitchOn}
                        color="zinc"
                        className="flex justify-center items-center"
                        onChange={handleSwitchChange}
                      />
                      <Text className="text-secondary font-normal">
                        {label}
                      </Text>
                    </div>
                  </>
                ))}
              </Flex>
            </div>
            <div className="min-w-[33%] p-4">
              <Text className="text-sm leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-[#344767] py-4">
                profile information
              </Text>
            </div>
            <div className="min-w-[33%] p-4">
              <Text className="text-sm leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-[#344767] py-4">
                conversations
              </Text>
              <ProfileConversations
                profileList={PROFILE_CONVERSATIONS}
                onClick={() => {}}
              />
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
          </Flex>
        </Card>
      </div>
    </>
  );
};

export default Profile;
