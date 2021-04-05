import React from "react";
import { useSelector } from "react-redux";
import { ProfileProjectTabs } from "./ProfileProjectTabs";

export function ProfileProjects() {
  const { projects } = useSelector((state) => state.userProjectsReducer);

  const { personalProjects } = useSelector(
    (state) => state.userProjectsReducer
  );
  return (
    <>
      {projects !== null && personalProjects !== null && (
        <>
          <ProfileProjectTabs
            lagaltProjects={projects}
            personalProjects={personalProjects}
          ></ProfileProjectTabs>
        </>
      )}
    </>
  );
}
