import dynamic from "next/dynamic";

// Icons
import { MdAdd } from "react-icons/md";

// Components
import { Flex, Card, Text, Title } from "@tremor/react";
import { Button } from "@/ui/components";
const ProfileInfo = dynamic(
  () => import("@/ui/features/all-projects/ProfileInfo/ProfileInfo"),
);
const ProjectCard = dynamic(
  () => import("@/ui/features/all-projects/ProjectCard/ProjectCard"),
);

// Types
import { Project } from "@/types";

//Constants
import { ITEM_ACTION_PROJECT, VARIANT_BUTTON } from "@/constants/commons";

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
          <Flex
            flexDirection="col"
            alignItems="start"
            className="md:flex-row md:items-center">
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
      <Flex
        justifyContent="end"
        className="flex-wrap sm:justify-between mt-4 sm:mt-0">
        <div className="antialiased my-8 sm:max-w-[65%]">
          <Title className="text-xl text-tremor-content-title dark:text-dark-tremor-content-title font-bold my-2">
            Some of Our Awesome Projects
          </Title>
          <Text className="text-tremor-title dark:text-dark-tremor-content-romance opacity-100 tracking-wide leading-1.6 text-secondary font-light">
            This is the paragraph where you can write more details about your
            projects. Keep you user engaged by providing meaningful information.
          </Text>
        </div>
        <Button
          variant={VARIANT_BUTTON.PRIMARY}
          additionalClass="min-w-[64px] text-center uppercase sm:px-[22px] px-6 py-2.5 rounded-lg border-0">
          <Text className="flex items-center uppercase py-[2px] text-xs font-bold text-white dark:text-dark-tremor-content-title tracking-wide">
            <MdAdd size="16" className="mr-2" />
            Add New
          </Text>
        </Button>
      </Flex>
      <Flex
        justifyContent="start"
        alignItems="start"
        className="flex-wrap grid gap-x-6 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
