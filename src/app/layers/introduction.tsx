import React from "react";
import Link from "next/link"; 
import { SiGithub,SiMedium, SiStackoverflow } from "react-icons/si";
import { BiEnvelope } from "react-icons/bi";
import { IoIosDocument } from "react-icons/io";
import { UMaTLink, cryptocurrencyLink,github,medium_link,resumerLink, stack_overflow, user_email } from "@/data/constant_Json";

function Introduction() {
  return (
    <div  className="pb-[10vh]">
      <div>
        <h1 className="text-4xl font-bold">Hello there, I&apos;m Mustapha Abdallah</h1>
        <p className="text-lg text-neutral-500">
        A Software Engineer • c# (Asp.net core) • Dart (Flutter)
        </p>
        <p className="text-neutral-500">
        based in Accra, Ghana. 
        </p> 

      </div>

      <br/>

      <div>
        <p>
            I Graduated with BSc in Computer Science And Engineering from University of Mines and Technology, {" "}
            <Link
              target="_blank"
              href={
                UMaTLink
              }
              className="underline"
            >
              UMaT.
              <br/> 
            </Link>
            Beyond my studies, I&apos;m passionate about developing efficient solutions. 
            Skilled in various programming languages and frameworks,
             I specialize in creating, maintaining, and updating reliable software. 
             My expertise lies in delivering high-quality, scalable applications that meet user needs and business objectives.
        </p>
        <br/>
        <p>
          When
          I&apos;m not either writing code, debuging code, thinking about stake holders requirements, reading programming books or articles, 
          you&apos;d catch me buried in exploring the world of {" "}
          <Link
            target="_blank"
            href={
              cryptocurrencyLink
            }
            className="underline"
          >
            <b>cryptocurrency</b>
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 my-5">
            <Link href={`mailto:${user_email}`} target="_blank">
            <button className="btn rounded-full">
              <BiEnvelope />
              <p className="text-sm mt-0">email</p>
            </button>
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href={github}
              target="_blank"
              className="text-2xl"
            >
              <SiGithub />
            </Link>
            <Link
              href={medium_link}
              target="_blank"
              className="text-2xl"
            >
              <SiMedium />
            </Link>
            <Link
              href={stack_overflow}
              target="_blank"
              className="text-2xl"
            >
              <SiStackoverflow />
            </Link>
            <Link
              href={resumerLink}
              target="_blank"
              className="text-2xl"
            >
              <IoIosDocument />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;