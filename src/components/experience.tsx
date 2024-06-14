import { experience } from "@/data/experience";
import Link from "next/link";

function ExperienceSection() {
  return (
    <div className="mb-16">
      <div className="flex flex-row justify-between items-center gap-5">
        <h4>Work Experience</h4>
        <Link
          href={
            "https://docs.google.com/document/d/1y46kIBLlpU7lt1Nx82RL5jnDPgpilo2tDgmPBSSV05c/edit?usp=sharing"
          }
          target="_blank"
          className="text-neutral-500 underline  hover:text-black dark:hover:text-black ease-in-out duration-500"
        >
          <p className="text-sm">My Experience</p>
        </Link>
      </div>
      <br />
      <div>
        {experience.map((item) => {
          return (
            <Link href={`${item.company_website}`} key={item.id}>
              <div className="border-b border-b-neutral-500 py-5 hover:scale-[1.02] ease-in-out duration-500">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h5>{item.company_name}</h5>
                  <p className="text-neutral-500 text-sm">{item.duration}</p>
                </div>
                <p className="text-neutral-500">{item.job_type}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceSection;
