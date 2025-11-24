import { FaRegFileLines } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";
import {motion } from "framer-motion"
const data = [
    {
      desc: "High-quality image of a scenic mountain range during sunset.",
      size: "5.4 Mb",
      footer: true,
    },
    {
      desc: "PDF document containing the quarterly financial report.",
      size: "4.2 Mb",
      footer: true,
    },
    {
      desc: "Compressed video file of the recent team meeting recording.",
      size: "45.8 Mb",
      footer: true,
    },
    {
      desc: "Short audio clip of a motivational podcast episode.",
      size:" 3.2 Mb",
      footer: true,
    },
  ]

function Card({reference}) {
  return (
  <div className="flex gap-10 flex-wrap">
      {data.map((data, i) =>{
            return (<motion.div drag key={i} whileDrag={{scale: 1.2}} dragConstraints={reference} className='w-48 z-[9993] relative overflow-hidden  bg-slate-900  rounded-3xl'>
                <span className="text-xl mx-3 mt-5 inline-block">
                <FaRegFileLines/>
                </span>
                <p className="text-sm my-3 text-justify mx-3 ">{data.desc} </p>
                <div className="flex justify-between items-center mx-3 mb-3 mt-5">
                    <h2>
                        {data.size}
                    </h2>
                    <span className="text-gray-200 text-xl">
                        <MdDownloadForOffline />
                    </span>
                </div>
                {data.footer && <div className="w-full bg-slate-800 py-2 px-3 text-white text-sm text-center">
                    Download
                </div>}
                </motion.div>
        )
      })}
    
  </div>
  )
}

export default Card

