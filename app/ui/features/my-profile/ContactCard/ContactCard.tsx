// Libs
import Link from "next/link";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { Flex, Text } from "@tremor/react";
import { FaPen } from "react-icons/fa";

// Constants
import { ROUTES, SOCIAL_LINK } from "@/constants";

// Types
import { SocialLink } from "@/types";

interface ContactCardProps {
  information?: string;
  fullName: string;
  phone: string;
  email: string;
  location: string;
  socials?: SocialLink;
}

const ContactCard = ({
  information = "",
  fullName,
  phone,
  email,
  location,
  socials = SOCIAL_LINK,
}: ContactCardProps) => {
  const { facebook, twitter, instagram } = socials;

  return (
    <div>
      <Flex className="text-secondary mb-4 flex-wrap xs:flex-nowrap">
        <Text className="text-tremor-title text-tremor-content-title dark:text-dark-tremor-content-title leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-primary py-4">
          Profile Information
        </Text>
        <Link className="text-xs" href={ROUTES.PROFILE}>
          <FaPen />
        </Link>
      </Flex>
      <Flex
        flexDirection="col"
        className="flex-wrap items-baseline xs:flex-nowrap">
        <Text className="font-light leading-normal text-tremor-content-title dark:text-dark-tremor-content-romance uppercase opacity-100 normal-case tracking-[0.02857em]">
          {information}
        </Text>
        <div className="h-px w-full dark:bg-gradient-divider bg-gradient-line my-4 opacity-25" />
        {/* TODO: Refactor code */}
        <Flex justifyContent="start" className="gap-3">
          <Text className="font-bold text-primary dark:text-dark-primary tracking-[0.02857em] capitalize my-2">
            Full Name:
          </Text>
          <Text className="font-normal dark:text-dark-tremor-content-romance">
            {fullName}
          </Text>
        </Flex>
        <Flex justifyContent="start" className="gap-3">
          <Text className="font-bold text-primary dark:text-dark-primary tracking-[0.02857em] capitalize my-2">
            Mobile:
          </Text>
          <Text className="font-normal dark:text-dark-tremor-content-romance">
            {phone}
          </Text>
        </Flex>
        <Flex justifyContent="start" className="gap-3">
          <Text className="font-bold text-primary dark:text-dark-primary tracking-[0.02857em] capitalize my-2">
            Email:
          </Text>
          <Link href={`mailto:${email}`}>
            <Text className="font-normal dark:text-dark-tremor-content-romance">
              {email}
            </Text>
          </Link>
        </Flex>
        <Flex justifyContent="start" className="gap-3">
          <Text className="font-bold text-primary dark:text-dark-primary tracking-[0.02857em] capitalize my-2">
            Location:
          </Text>
          <Text className="font-normal dark:text-dark-tremor-content-romance">
            {location}
          </Text>
        </Flex>
        <Flex justifyContent="start" className="gap-3 gap-2 pr-4 py-2">
          <Text className="font-bold text-primary dark:text-dark-primary tracking-[0.02857em] capitalize">
            Social:
          </Text>
          <Flex justifyContent="start">
            <Link href={facebook} className="pl-1 pr-2">
              <IoLogoFacebook
                size={18}
                className="text-[#3b5998] rounded-lg stroke-2"
              />
            </Link>
            <Link href={twitter} className="pl-1 pr-2">
              <IoLogoTwitter size={18} className="text-[#55acee]" />
            </Link>
            <Link href={instagram} className="pl-1 pr-2">
              <IoLogoInstagram size={18} className="text-[#125688]" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default ContactCard;
