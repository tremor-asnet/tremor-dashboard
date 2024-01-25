import { Flex, Card, Text, Title, Button } from "@tremor/react";
import { MdAdd } from "react-icons/md";

// Components
import { ProfileInfo, ProjectCard } from "@/components";

// Types
import { Project } from "@/types";

//Constants
import { ITEM_ACTION_PROJECT } from "@/constants/commons";

// Services
import { getAllProjects, getProfile } from "@/services";

export const metadata = {
  title: "All Projects - Tremor Dashboard",
};

const Projects = async () => {
  const profileData = await getProfile();
  const ProjectsData = await getAllProjects();

  return (
    <div className="-mt-[150px] sm:-mt-[100px]">
      <div className='bg-[linear-gradient(195deg,rgba(73,163,241,0.6),rgba(26,115,232,0.6)),url("/images/backgrounds/bg-profile.webp")] bg-cover bg-no-repeat bg-center min-h-[300px] pb-8 md:min-w-[320px] overflow-hidden p- rounded-xl'></div>
      <div className="mx-6 -mt-16">
        <Card className="px-4 py-2 dark:bg-dark-tremor-primary ring-0">
          <Flex className="flex-col md:flex-row items-start md:items-center">
            {/* TODO: Will update when have profile header component */}
            {/* Header */}
            <ProfileInfo
              name={profileData.name}
              role={profileData.role}
              avatarUrl={profileData.avatar}
            />
          </Flex>
        </Card>
      </div>
      <Flex className="flex-wrap justify-end sm:justify-between mt-4 sm:mt-0">
        <div className="antialiased my-8 sm:max-w-[65%]">
          <Title className="text-xl text-tremor-content-title dark:text-dark-tremor-content-title font-bold my-2">
            Some of Our Awesome Projects
          </Title>
          <Text className="text-tremor-title dark:text-dark-tremor-content-romance opacity-100 tracking-wide leading-1.6 text-secondary font-light">
            This is the paragraph where you can write more details about your
            projects. Keep you user engaged by providing meaningful information.
          </Text>
        </div>
        <Button className="min-w-[64px] text-center uppercase sm:px-[22px] bg-gradient-primary dark:bg-gradient-pickled !shadow-btn-primary px-6 py-2.5 rounded-lg border-0 hover:!shadow-btn-primary-hover">
          <Text className="flex items-center uppercase py-[2px] text-xs font-bold text-white dark:text-dark-tremor-content-title">
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
