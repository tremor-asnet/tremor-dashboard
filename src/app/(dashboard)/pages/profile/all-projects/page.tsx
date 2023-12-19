import { Flex, Card, Text, Title, Button } from "@tremor/react";
import { MdAdd } from "react-icons/md";

// Components
import { ProfileInfo, Tabs } from "@/components";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

// Constants
import { TABS_HEADER } from "@/constants/profile";

// Mocks
import { PROFILE_HEADER, PROJECT_DATA } from "@/mocks";

// Types
import { Project } from "@/types";

//Constans
import { ITEM_ACTION_PROJECT } from "@/constants/commons";

// Actions
import { getAllProjects } from "@/app/actions/projectActions";

// Actions
import { getProfileConversations } from "@/app/actions/profileAction";

const Projects = async () => {
  const profileData = await getProfileConversations();
  const ProjectsData = await getAllProjects();

  return (
    <div>
      <div className='bg-[linear-gradient(195deg,rgba(73,163,241,0.6),rgba(26,115,232,0.6)),url("/images/backgrounds/bg-profile.webp")] bg-cover bg-no-repeat bg-center min-h-[300px] pb-8 md:min-w-[320px] overflow-hidden p- rounded-xl'></div>
      <div className="mx-6 -mt-16">
        <Card className="p-2">
          <Flex className="flex-col md:flex-row items-start md:items-center">
            {/* TODO: Will update when have profile header component */}
            {/* Header */}
            <ProfileInfo
              isOnHeader={true}
              name={profileData.name}
              role={profileData.role}
              src={PROFILE_HEADER.src}
            />
            <Tabs tabs={TABS_HEADER} className="mx-auto lg:mx-0" />
          </Flex>
        </Card>
      </div>
      <Flex className="flex-wrap justify-end sm:justify-between mt-4 sm:mt-0">
        <div className="antialiased my-8 sm:max-w-[65%]">
          <Title className="text-xl text-[#344767] font-bold my-2">
            Some of Our Awesome Projects
          </Title>
          <Text className="text-[16px] tracking-wide leading-7 text-[#7b809a] font-light">
            This is the paragraph where you can write more details about your
            projects. Keep you user engaged by providing meaningful information.
          </Text>
        </div>
        <Button className="px-6 py-[10px] bg-[linear-gradient(195deg,#42424a,#191919)] ring-0 border-transparent shadow-md">
          <Text className="flex items-center uppercase text-xs font-bold text-white">
            <MdAdd size="16" className="mr-2" />
            Add New
          </Text>
        </Button>
      </Flex>
      <Flex className="flex-wrap justify-start items-start grid gap-x-6 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {ProjectsData?.map((project: Project) => (
          <ProjectCard
            key={project.id}
            projectData={project}
            actions={ITEM_ACTION_PROJECT}
          />
        ))}
      </Flex>
    </div>
  );
};

export default Projects;
