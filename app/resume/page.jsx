"use client"
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaJs
} from "react-icons/fa"

import {
  SiTailwindcss, 
  SiPostgresql,
  SiMongodb,
} from "react-icons/si"

const about = {
  title:'Sobre Mi',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque facilis corrupti eius, pariatur eos saepe labore qui, enim harum reprehenderit optio quisquam. Earum eaque veniam eveniet cupiditate voluptatibus facere fugit.',
  items:[
    {
      fieldName:"Name",
      fieldValue:"Francisco Mendoza"
    },
    {
      fieldName:"Phone",
      fieldValue:"(+58) 424 656 8510"
    },
    {
      fieldName:"Experience",
      fieldValue:"3+ Years"
    },
    {
      fieldName:"Github",
      fieldValue:"@fmbalza"
    },
    {
      fieldName:"Nationality",
      fieldValue:"Venezuelan"
    },
    {
      fieldName:"Email",
      fieldValue:"fmbalza1@gmail.com"
    },
    {
      fieldName:"Freelance",
      fieldValue:"Available"
    },
    {
      fieldName:"Languages",
      fieldValue:"English (B1) Spanish (C2)"
    },
  ]
};

const experience = {
  icon:'/assets/resume/badge.svg',
  title:'Mi Experiencia',
  description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque facilis corrupti eius, pariatur eos saepe labore qui, enim harum reprehenderit optio quisquam. Earum eaque veniam eveniet cupiditate voluptatibus facere fugit.',
  items: [
    {
      company:"Saint Maracaibo",
      position:"Desarrollador Frontend",
      duration:"2023 - 2024",
    },
    {
      company:"Didactica Digital",
      position:"Desarrollador Frontend",
      duration:"Summer 2021",
    },
]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title:"Cursos y Formacion",
  description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque facilis corrupti eius, pariatur eos saepe labore qui, enim harum reprehenderit optio quisquam. Earum eaque veniam eveniet cupiditate voluptatibus facere fugit.",
  items:[
    {
      title:"Computer Engineering",
      company:"Rafael Urdaneta University",
      duration:"2020-2024"
    },
     {
      title:"Full-Stack Developer",
      company:"Social Oplesk",
      duration:"2022-2023"
    },
  ]
}

const skills = {
  title: "Tecnologias",
  description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque facilis corrupti eius, pariatur eos saepe labore qui, enim harum reprehenderit optio quisquam. Earum eaque veniam eveniet cupiditate voluptatibus facere fugit",
  items:[
    {
      icon:<FaHtml5/>,
      name:"html "
    },
      {
      icon:<FaCss3/>,
      name:"css "
    },
      {
      icon:<FaJs/>,
      name:"javascript"
    },
    {
      icon:<FaReact/>,
      name:"react.js"
    },
 
    {
      icon:<SiTailwindcss/>,
      name:"tailwind.css"
    },
    {
      icon:<FaNodeJs/>,
      name:"node.js"
    },
    {
      icon:<FaFigma/>,
      name:"figma"
    },
    {
      icon:<FaAngular/>,
      name:"angular"
    },

    {
      icon:<SiMongodb/>,
      name:"mongodb"
    },
    {
      icon:<SiPostgresql/>,
      name:"postgresql"
    },
    {
      icon:<FaGitAlt/>,
      name:"git"
    },

  ]
}

import { Tabs,TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion"
const Resume = () => {
  
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{
      opacity:1,
      transition:{delay:2.4, duration:0.4, ease:"easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]" 
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">

            <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                 
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-10">
                    {experience.items.map((item, index) => {
                      return (
                      <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className=" flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
                </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                 
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-10">
                    {education.items.map((item, index) => {
                      return (
                      <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h3>
                        <div className=" flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
                </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                  </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.items.map((skill, index) => {
                        return(
                          
                            <li 
                            key={index}
                            >
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitaliza">{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                        
                        )
                      })}
                    </ul>
                </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px] ">
                      <h3 className="text-4xl font-bold">{about.title}</h3>
                      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                        {about.items.map((item, index) => {
                          return(
                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                              <span className="text-white/60">{item.fieldName}</span>
                              <span className="text-xl">{item.fieldValue}</span>
                            </li>
                          )
                        })}
                      </ul>
                </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
