import React from "react";
import Link from "next/link"; 
import { SiGithub,SiDevdotto, SiMedium } from "react-icons/si";
import { BiEnvelope } from "react-icons/bi";
import { IoIosDocument } from "react-icons/io";

function Introduction() {
  return (
    <div  className="pb-[10vh]">
      <div>
        <h1 className="text-4xl font-bold">Hello, I'm Mustapha Abdallah</h1>
        <p className="text-lg text-neutral-500">
          I'm a software engineer based in Accra, Ghana.
        </p>
        <p className="text-neutral-500">
          deeply rooted in providing real world solution using  • Asp.net core • Flutter
        </p> 
      </div>

      <br/>

      <div>
        <p>
            A Graduated from Deparment of Computer Science and Engineering with Bsc in Computer Science and Eng. {" "}
            <Link
              target="_blank"
              href={
                "https://umat.edu.gh/"
              }
              className="underline"
            >
              UMaT
            </Link>
            . Beyond my studies, I&apos;m a software engineer, writing code with
            JavaScript and Go.
        </p>
        <br/>
        <p>
          Currently, I&apos;m exploring the world of Backend and Cloud Engineering. When
          I&apos;m not writing code, or buried in my books(hardly), you&apos;d
          catch me finishing up an episode or two of{" "}
          <Link
            target="_blank"
            href={
              "https://www.google.com/search?gs_ssp=eJzj4tDP1TcwTzY3MmD04inJSFUozswtKM7PKwYAUTYHdQ&q=the+simpsons&oq=the+simpsons&sourceid=chrome&ie=UTF-8"
            }
            className="underline"
          >
            The Simpsons
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 my-5">
          <Link href={"mailto:abdullahmustapha59@gmail.com"} target="_blank">
            <button className="btn rounded-full">
              <BiEnvelope />
              <p className="text-sm mt-0">contact</p>
            </button>
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href={"https://github.com/asap-alpha"}
              target="_blank"
              className="text-2xl"
            >
              <SiGithub />
            </Link>
            <Link
              href={""}
              target="_blank"
              className="text-2xl"
            >
              <SiMedium />
            </Link>
            <Link
              href={
                "https://docs.google.com/document/d/1y46kIBLlpU7lt1Nx82RL5jnDPgpilo2tDgmPBSSV05c/edit?usp=sharing"
              }
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