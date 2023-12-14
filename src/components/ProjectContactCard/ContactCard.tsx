// Libs
import { RiFacebookBoxFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { Flex, Bold, Text, Icon } from "@tremor/react";

const ContactCard = () => {
  return (
    <Flex className="flex-col">
      <Text className="font-light leading-normal uppercase opacity-100 normal-case tracking-[0.02857em]">
        Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
        If two equally difficult paths, choose the one more painful in the short
        term (pain avoidance is creating an illusion of equality).
      </Text>
      <div className="w-full bg-transparent bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] h-px opacity-25 mx-0 my-4 border-b-[thin] border-b-[none] border-0 border-solid border-[rgba(0,0,0,0.12)] text-primary"></div>
      <div>
        <Flex className="gap-3">
          <Text className="text-primary tracking-[0.02857em] capitalize">
            <Bold>Full Name:</Bold>
          </Text>
          <Text className="font-normal">Alec M. Thompson</Text>
        </Flex>
        <Flex className="gap-3">
          <Text className="text-primary tracking-[0.02857em] capitalize">
            <Bold>Mobile:</Bold>
          </Text>
          <Text className="font-normal">(44) 123 1234 123</Text>
        </Flex>
        <Flex className="gap-3">
          <Text className="text-primary tracking-[0.02857em] capitalize">
            <Bold>Email:</Bold>
          </Text>
          <Text className="font-normal">alecthompson@mail.com</Text>
        </Flex>
        <Flex className="gap-3">
          <Text className="text-primary tracking-[0.02857em] capitalize">
            <Bold>Location:</Bold>
          </Text>
          <Text className="font-normal">USA</Text>
        </Flex>
        <Flex className="gap-3">
          <Text className="text-primary tracking-[0.02857em] capitalize">
            <Bold>Social:</Bold>
          </Text>
          <div>
            <Icon size="sm" icon={RiFacebookBoxFill} />
            <Icon size="sm" icon={TiSocialTwitter} />
            <Icon size="sm" icon={FaInstagram} />
          </div>
        </Flex>
      </div>
    </Flex>
  );
};

export default ContactCard;
