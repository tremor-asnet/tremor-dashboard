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
              info={PROFILE_HEADER.description}
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
          className="px-6 py-[10px] bg-[linear-gradient(195deg,#42424a,#191919)] ring-0 border-transparent shadow-md"
          icon={MdAdd}
          onClick={handleAddNewProject}>
          <Text className="uppercase text-xs text-white">Add New</Text>
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
