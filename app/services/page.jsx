"use client"

import {BsRocketTakeoff } from "react-icons/bs"
import Link from "next/link"


const services =[
  {
    num: '01',
    tittle: 'Desarrollo de UI-UX',
    description: 'Creación y diseño de interfaces de usuario atractivas y funcionales. Esto incluye el uso de frameworks como React, Next.js o Angular para construir elementos visuales y componentes que los usuarios finales interactúan.',
    href:""
  },
  {
    num: '02',
    tittle: 'Desarrollo de Aplicaciones Web (SPA y PWA)',
    description: 'Nuestras SPA proporcionan una experiencia de usuario fluida y rápida al cargar dinámicamente contenido en una sola página, eliminando la necesidad de recargas completas. Esto no solo mejora el rendimiento, sino que también ofrece una navegación más intuitiva y reactiva para los usuarios.',
    href:""
  },
  {
    num: '03',
    tittle: 'Diseño Responsivo y Mobile-First',
    description: 'Asegurar que las aplicaciones y sitios web se vean y funcionen correctamente en dispositivos de todos los tamaños y resoluciones, desde móviles hasta pantallas de escritorio. Esto se logra mediante técnicas de diseño responsivo y estrategias de desarrollo "mobile-first".',
    href:""
  },
  {
    num: '04',
    tittle: 'Integración con APIs y Servicios de Backend',
    description: 'Conectar aplicaciones frontend con APIs y servicios backend para intercambiar datos y funcionalidades. Esto implica el uso de tecnologías como RESTful APIs y GraphQL.',
    href:""
  },
]

import { motion } from "framer-motion"
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto"></div>
      <motion.div
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{ delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px] m-[60px]">
        {services.map((service, index) =>{
          return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
              <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-200 flex justify-center items-center hover:-rotate-45">
                <BsRocketTakeoff  className=" text-primary text-3xl"/>
              </Link>
            </div>
              <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300">{service.tittle}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
          </div>
          
        })}
      </motion.div>
    </section>
  )
}

export default Services
