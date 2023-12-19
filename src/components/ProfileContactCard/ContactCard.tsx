// Libs
import Link from "next/link";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { Flex, Text } from "@tremor/react";
import { FaPen } from "react-icons/fa";

// Constants
import { SOCIAL_LINK } from "../../constants/common";
import { ROUTES } from "@/constants";

interface ContactCardProps {
  title: string;
  information?: string;
  fullName: string;
  phone: string;
  email: string;
  location: string;
}

const ContactCard = ({
  title,
  information = "",
  fullName,
  phone,
  email,
  location,
}: ContactCardProps) => {
  return (
    <div>
      <Flex className="text-secondary mb-4">
        <Text className="text-sm leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-[#344767] py-4">
          {title}
        </Text>
        <Link href={ROUTES.PROFILE}>
          <FaPen />
        </Link>
      </Flex>
      <Flex className="flex-col items-baseline">
        <Text className="font-light leading-normal uppercase opacity-100 normal-case tracking-[0.02857em]">
          {information}
        </Text>
        <div className="w-full opacity-30 bg-transparent">
          <hr className="bg-transparent bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] h-px opacity-25 mx-0 my-4 border-b-[thin] border-b-[none] border-0 border-solid border-[rgba(0,0,0,0.12)]" />
        </div>
        {/* TODO: Refactor code */}
        <div>
          <Flex className="justify-start gap-3">
            <Text className="font-bold text-primary tracking-[0.02857em] capitalize my-2">
              Full Name
            </Text>
            <Text className="font-normal">{fullName}</Text>
          </Flex>
          <Flex className="justify-start gap-3">
            <Text className="font-bold text-primary tracking-[0.02857em] capitalize my-2">
              Mobile
            </Text>
            <Text className="font-normal">{phone}</Text>
          </Flex>
          <Flex className="justify-start gap-3">
            <Text className="font-bold text-primary tracking-[0.02857em] capitalize my-2">
              Email
            </Text>
            <Text className="font-normal">{email}</Text>
          </Flex>
          <Flex className="justify-start gap-3">
            <Text className="font-bold text-primary tracking-[0.02857em] capitalize my-2">
              Location
            </Text>
            <Text className="font-normal">{location}</Text>
          </Flex>
          <Flex className="justify-start gap-3 gap-2 pr-4 py-2">
            <Text className="font-bold text-primary tracking-[0.02857em] capitalize">
              Social:
            </Text>
            <Flex className="justify-start">
              <Link href={SOCIAL_LINK.facebook} className="pl-1 pr-2">
                <IoLogoFacebook className="text-[#3b5998] rounded-lg stroke-2" />
              </Link>
              <Link href={SOCIAL_LINK.twitter} className="pl-1 pr-2">
                <IoLogoTwitter className="text-[#55acee]" />
              </Link>
              <Link href={SOCIAL_LINK.instagram} className="pl-1 pr-2">
                <IoLogoInstagram className="text-[#125688]" />
              </Link>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default ContactCard;
