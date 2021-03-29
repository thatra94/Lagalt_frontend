import React from "react";
import { ProfileProjectTabs } from "./ProfileProjectTabs";
import { useDispatch, useSelector } from "react-redux";
import { ProfileProjectsTabPersonalAddButton } from "./ProfileProjectsTabPersonalAddButton";

export function ProfileProjects() {
  const { error, projects } = useSelector((state) => state.userProjectsReducer);

  const { personalProjects } = useSelector(
    (state) => state.userProjectsReducer
  );
  return (
    <>
      {projects !== null && personalProjects !== null && (
        <>
          <ProfileProjectTabs
            projects={projects}
            personalProjects={personalProjects}
          ></ProfileProjectTabs>
          <ProfileProjectsTabPersonalAddButton></ProfileProjectsTabPersonalAddButton>
        </>
      )}
    </>
  );
}
