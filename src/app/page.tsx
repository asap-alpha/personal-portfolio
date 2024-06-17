import Project from "@/components/project";
import Introduction from "./layers/introduction";
import ExperienceSection from "@/components/experience";

export default function Home() {
  return (
    <div>
    <Introduction/>
    <Project/>
    <ExperienceSection/>
    </div>
  );
}
