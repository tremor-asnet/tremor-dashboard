"use client";

import { Flex, Card, Text, Switch } from "@tremor/react";
import { useState } from "react";

// Components
import {
  Tabs,
  ProfileConversations,
  ProfileInfo,
  ProfileProjectCard,
} from "@/components";

// Constants
import {
  ACCOUNT_SWITCH,
  APPLICATION_SWITCH,
  LIST_PROJECTS,
  TABS_HEADER,
} from "@/constants/profile";

// Types
import { SettingSwitchProps } from "@/types/profile";

// Mocks
import { PROFILE_CONVERSATIONS, PROFILE_HEADER } from "@/mocks/profileItem";
import ContactCard from "@/components/ProfileContactCard/ContactCard";
import { PROFILE_INFO } from "@/mocks/card";
import Link from "next/link";
import { ROUTES } from "@/constants";
import { FaPen } from "react-icons/fa";

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
            <hr className="rounded h-[400px] w-px bg-gray-100 bg-[linear-gradient(to_bottom,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] my-4 border-0 bg-transparent opacity-25" />
            <div className="min-w-[33%] p-4">
              <Flex className="text-secondary mb-4">
                <Text className="text-sm leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-[#344767] py-4">
                  profile information
                </Text>
                <Link href={ROUTES.PROFILE}>
                  <FaPen />
                </Link>
              </Flex>
              <ContactCard
                description={PROFILE_INFO.description}
                info={PROFILE_INFO.info}
              />
            </div>
            <hr className="rounded h-[400px] w-px bg-gray-100 bg-[linear-gradient(to_bottom,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] my-4 border-0 bg-transparent opacity-25" />
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
            <ProfileProjectCard links={LIST_PROJECTS} />
          </Flex>
        </Card>
      </div>
    </>
  );
};

export default Profile;
