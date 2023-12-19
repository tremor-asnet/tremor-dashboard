"use client";

import { useState, useEffect } from "react";
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

const Projects = () => {
  const [isOpen, setOpenAction] = useState(false);
  const [projectIdCurrent, setIdProjectCurrent] = useState("");
  const [dataAllProjects, setDataAllProjects] = useState(PROJECT_DATA);

  //TODO: fetch from server site
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getAllProjects();
      setDataAllProjects(data);
    };

    fetchProjects();
  }, []);

  const handleToggleAction = (project: Project) => {
    setOpenAction(!isOpen);
    setIdProjectCurrent(project.id);
  };

  const handleActionProject = (project: Project, action: string) => {
    // TODO: handle action a project
    setOpenAction(false);
    console.log("project", project, "action", action);
  };

  const handleAddNewProject = () => {
    // TODO: handle to add new a project
  };

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
              name={PROFILE_HEADER.name}
              role={PROFILE_HEADER.description}
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
        <Button
          className="min-w-[64px] text-center uppercase bg-[linear-gradient(195deg,rgb(66,66,74),rgb(25,25,25))] shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem] px-6 py-2.5 rounded-lg border-0 hover:shadow-[rgba(52,71,103,0.4)_0rem_0.875rem_1.625rem_-0.75rem,rgba(52,71,103,0.15)_0rem_0.25rem_1.4375rem_0rem,rgba(52,71,103,0.2)_0rem_0.5rem_0.625rem_-0.3125rem]"
          icon={MdAdd}
          onClick={handleAddNewProject}>
          <Text className="uppercase text-xs text-white font-bold">
            Add New
          </Text>
        </Button>
      </Flex>
      <Flex className="flex-wrap justify-start items-start grid gap-x-6 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {dataAllProjects?.map((project: Project) => (
          <ProjectCard
            key={project.id}
            projectData={project}
            projectId={projectIdCurrent}
            actions={ITEM_ACTION_PROJECT}
            isOpenAction={isOpen}
            onToggleAction={handleToggleAction}
            onActionProject={handleActionProject}
          />
        ))}
      </Flex>
    </div>
  );
};

export default Projects;
