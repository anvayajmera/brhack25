import { motion  } from 'framer-motion';

const animals = [
  { image: "/medicons/stethoscope.svg" },
  { image: "/medicons/heart.svg" },
  { image: "/medicons/pill.svg" },
  { image: "/medicons/medkit.svg" },
  { image: "/medicons/syringe.svg" },
  { image: "/medicons/bandage.svg" },
  { image: "/medicons/ambulance.svg" },
  { image: "/medicons/clipboard.svg" },

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