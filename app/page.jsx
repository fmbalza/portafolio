import { Button } from "@/components/ui/button"
import {FiDownload} from 'react-icons/fi'
import Socials from "@/components/ui/Socials"
import Photo from "@/components/ui/Photo"
import Stats from "@/components/ui/Stats"
const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left">
              <span className="text-xl"> Desarrollador Frontend</span>
              <h1 className="h1 mb-6">
                Yo soy <br /> <span className="text-accent"> Francisco Mendoza</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
              Soy ingeniero en computacion enfocado en el desarrollo frontend con experiencia especializada en diseño web y desarrollo móvil. Mi habilidad para crear interfaces de usuario intuitivas y atractivas se complementa con sólidos conocimientos en arquitectura de aplicaciones y programación orientada a componentes.

              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
        
                <div className="mb-8 xl:mb-0">
                  <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
            </div>
            <div>
              <Photo/>
            </div>
          </div>
        </div>
        <Stats/>
    </section>
  )
}

export default Home

