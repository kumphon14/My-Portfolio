import React from 'react'

const aboutItems = [
    {
      label: 'Project done',
      number: 1
    },
    {
      label: 'Month of experience',
      number: 3
    }
  ];

const About = () => {
  return (
    <section
        id="about"
        className='section'

    >
        <div className='container'>
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
                <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
                "Hello! I'm Kumphon Suwannoppakul, a passionate Junior Software Developer specializing in crafting modern web applications using the MERN stack. 
                With a strong foundation gained from the Generation Thailand Bootcamp, I have honed my skills in creating software solutions that seamlessly integrate user needs with robust back-end systems."

                </p>

                <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>

                Driven by a proactive mindset and a passion for growth, I excel in transforming ideas into scalable digital solutions. 
                My unique ability to share knowledge and mentor others complements my technical expertise, ensuring both personal and team success in every project.
                </p>

                <div className='flex flex-wrap item-center gap-4 md:gap-7'>
                    {
                        aboutItems.map(({label,number},key)=>(
                            <div key={key}>
                                <div className='flex item-center md:mb-2'>
                                    <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                    <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                                </div>

                                <p className='text-sm text-zinc-400'>{label}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default About