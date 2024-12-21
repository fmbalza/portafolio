"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

const info =[
  {
    icon:<FaPhoneAlt />,
    title:"Phone",
    description:"(+58) 424 656 8510",
  },
  {
    icon:<FaEnvelope />,
    title:"Email",
    description:"fmbalza1@gmail.com",
  },
  {
    icon:<FaMapMarkedAlt />,
    title:"Addres",
    description:"Maracaibo/Zulia/Venezuela",
  }
]

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0}} animate={{ opacity:1, transition: {delay:2.4, duration:0.4, ease:"easeIn" },
     }} 
     className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">
                Trabajemos juntos!
              </h3>
              <p className="text-white/60">
                    A continuacion te dejare el siguiente formulario para recibir tu informacion.
              </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname"></Input>
                  <Input type="lastname" placeholder="Lastname"></Input>
                  <Input type="email" placeholder="Email adress"></Input>
                  <Input type="phone" placeholder="Phone number"></Input>
                </div>
                <Select>
                  <SelectTrigger className>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est"> Desarrollo de UI-UX</SelectItem>
                      <SelectItem value="cst"> Desarrollo de Aplicaciones Web (SPA y PWA)</SelectItem>
                      <SelectItem value="mst"> Integración con APIs y Servicios de Backend</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea 
                  className="h-[200px]"
                  placeholder="Type your message here."
                />
                <Button size="md" className="max-w-40">
                  Send message
                </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return(
                  <li key={index} className="flex items-center gap-1">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
