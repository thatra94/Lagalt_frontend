import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { ProjectBanners } from "./ProjectsBanners";

export const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
     
      <ProjectBanners projects={[{title: "Project1"},{title: "Project1"},{title: "Project1"}]}/>
    </div>
  );
};
