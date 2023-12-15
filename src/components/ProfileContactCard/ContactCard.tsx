// Libs
import Link from "next/link";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { Flex, Text, Subtitle, Bold } from "@tremor/react";

// Constants
import { SOCIAL_LINK } from "../../constants/common";

// ROUTER
import { ROUTES } from "../../constants/routes";

type InfoItem = {
  key: string;
  value: string;
};

interface ContactCardProps {
  title: string;
  description?: string;
  info: InfoItem[];
}

const ContactCard = ({ title, description = "", info }: ContactCardProps) => {
  return (
    <div className="p-4">
      <Flex className="text-secondary mb-4">
        <Subtitle className="text-primary">
          <Bold>{title}</Bold>
        </Subtitle>
        <Link href={ROUTES.PROFILE}>
          <FaPen />
        </Link>
      </Flex>
      <Flex className="flex-col items-baseline">
        <Text className="font-light leading-normal uppercase opacity-100 normal-case tracking-[0.02857em] mb-4">
          {description}
        </Text>
        <div className="w-full opacity-30 bg-transparent">
          <hr className="bg-transparent bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] h-px opacity-25 mx-0 my-4 border-b-[thin] border-b-[none] border-0 border-solid border-[rgba(0,0,0,0.12)]" />
        </div>
        {
          <div>
            {info.map(item => (
              <Flex className="justify-start gap-3" key={item.key}>
                <Text className="font-bold text-primary tracking-[0.02857em] capitalize my-2">
                  {item.key}
                </Text>
                <Text className="font-normal">{item.value}</Text>
              </Flex>
            ))}
            <Flex className="justify-start gap-3">
              <Text className="font-bold text-primary tracking-[0.02857em] capitalize">
                Social:
              </Text>
              <Flex className="justify-start gap-2">
                <Link href={SOCIAL_LINK.facebook}>
                  <IoLogoFacebook className="text-[#3b5998] rounded-lg stroke-2" />
                </Link>
                <Link href={SOCIAL_LINK.twitter}>
                  <IoLogoTwitter className="text-[#55acee]" />
                </Link>
                <Link href={SOCIAL_LINK.instagram}>
                  <IoLogoInstagram className="text-[#125688]" />
                </Link>
              </Flex>
            </Flex>
          </div>
        }
      </Flex>
    </div>
  );
};

export default ContactCard;
