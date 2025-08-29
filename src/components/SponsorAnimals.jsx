import { motion  } from 'framer-motion';

const animals = [
  { image: "/medicons/stethoscope-nobg.svg" },
  { image: "/medicons/heart-nobg.svg" },
  { image: "/medicons/pill-nobg.svg" },
  { image: "/medicons/medkit-nobg.svg" },
  { image: "/medicons/syringe-nobg.svg" },
  { image: "/medicons/bandage-nobg.svg" },
  { image: "/medicons/ambulance-nobg.svg" },
  { image: "/medicons/clipboard-nobg.svg" },

]

const animalLength = animals.length
const logoWidth = 96
const logoGap = 100

const maequeeSponsor = {
  animate: {
    x: [-animalLength * (logoWidth + logoGap), 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      }
    }
}
}

export default function Animals(){
  return(
    <section className="w-full flex flex-col overflow-x-hidden" id="animals">
      <motion.div
      variants={maequeeSponsor}
      animate="animate"
      className="flex flex-row w-full gap-[30px] mt-10 items-center">
          {animals.map((animal) => 
          <div className=' group relative flex justify-center items-center'>
            <img src={animal.image} width="60" height="60" className="object-contain min-w-[40px]" />
            </div>
          )}
      
      </motion.div>
    </section>
  )
}