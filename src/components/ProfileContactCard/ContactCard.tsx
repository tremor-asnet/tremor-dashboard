// Libs
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { Flex, Text } from "@tremor/react";

// Constants
import { INFO_LIST } from "../../constants/card";

const ContactCard = () => {
  return (
    <div>
      <Flex className="flex-col items-baseline p-4">
        <Text className="font-light leading-normal uppercase opacity-100 normal-case tracking-[0.02857em] mb-4">
          Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
          no. If two equally difficult paths, choose the one more painful in the
          short term (pain avoidance is creating an illusion of equality).
        </Text>
        <div className="w-full opacity-30 bg-transparent">
          <hr className="bg-transparent bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] h-px opacity-25 mx-0 my-4 border-b-[thin] border-b-[none] border-0 border-solid border-[rgba(0,0,0,0.12)]" />
        </div>
        {
          <div>
            {INFO_LIST.map(item => (
              <Flex className="justify-start gap-3" key={item.information}>
                <Text className="font-bold text-primary tracking-[0.02857em] capitalize my-2">
                  {item.information}
                </Text>
                <Text className="font-normal">{item.description}</Text>
              </Flex>
            ))}
            <Flex className="justify-start gap-3">
              <Text className="font-bold text-primary tracking-[0.02857em] capitalize">
                Social:
              </Text>
              <Flex className="justify-start gap-2">
                <IoLogoFacebook className="text-[#3b5998] rounded-lg stroke-2" />
                <IoLogoTwitter className="text-[#55acee]" />
                <IoLogoInstagram className="text-[#125688]" />
              </Flex>
            </Flex>
          </div>
        }
      </Flex>
    </div>
  );
};

export default ContactCard;
