import React from 'react'
import Skillsitems from './Skillsitems'
import Skillslanguage from './Skillslanguage'

const Skils = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]  '>
        <h1 className='heading'>Education & <span className='text-yellow-400'>Skill</span></h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt=[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]
        items-center'>
            <div> 
                <Skillsitems title="React Developer" year="2014 - 2018"/>
                <Skillsitems title="MERN Stack Developer" year="2016 - 2020"/>
                <Skillslanguage 
                skill1="html" 
                skill2="css" 
                skill3 ="JavaScript" 
                level1="w-[91%]" 
                level2="w-[88%]"
                level3 = "w-[80%]"/>
            </div>
            <div> 
                <Skillsitems title="Next JS Developer" year="2018 - 2021"/>
                <Skillsitems title="Node JS Developer" year="2021 - 2023"/>
                <Skillslanguage
                skill1="React JS" 
                skill2="nEXT JS" 
                skill3 ="TypeScript" 
                level1="w-[81%]" 
                level2="w-[78%]"
                level3 = "w-[60%]"/>
            </div>

        </div>
    </div>
  )
}

export default Skils
