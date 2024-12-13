import React from 'react'

const socialLinks = [
    {
      href: 'https://github.com/kumphon14',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor" />
      </svg>,
      alt: 'GitHub'
    },
    {
        href: 'https://www.linkedin.com/in/kumphon-suwannapakul-069445336/',
        icon: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M19 0H5C2.23858 0 0 2.23858 0 5V19C0 21.7614 2.23858 24 5 24H19C21.7614 24 24 21.7614 24 19V5C24 2.23858 21.7614 0 19 0ZM7.06897 20.2069H3.7931V9H7.06897V20.2069ZM5.43103 7.48276C4.21896 7.48276 3.24138 6.50689 3.24138 5.2931C3.24138 4.07931 4.21896 3.10345 5.43103 3.10345C6.6431 3.10345 7.62069 4.07931 7.62069 5.2931C7.62069 6.50689 6.6431 7.48276 5.43103 7.48276ZM20.2069 20.2069H16.931V14.4828C16.931 13.1379 16.931 11.3448 15.1379 11.3448C13.3448 11.3448 13.1034 12.8276 13.1034 14.4828V20.2069H9.82759V9H12.931V10.3793H12.9655C13.3966 9.58621 14.4483 8.7931 15.7931 8.7931C19.0345 8.7931 20.2069 10.9655 20.2069 13.8276V20.2069Z"
                    fill="currentColor"
                />
            </svg>
        ),
        alt: 'LinkedIn',
    },
    {
      href: 'https://www.facebook.com/kajohnponf',
      icon: 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.351C0 23.407 0.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463 0.099 2.795 0.143v3.241h-1.918c-1.504 0-1.796 0.714-1.796 1.763v2.31h3.591l-0.467 3.622h-3.124V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0z" fill="#1877F2"/>
          <path d="M16.671 24v-9.294h3.124l0.467-3.622h-3.591v-2.31c0-1.048 0.292-1.763 1.796-1.763h1.918V3.793c-0.332-0.044-1.47-0.143-2.795-0.143-2.765 0-4.659 1.688-4.659 4.788v2.310H9.692v3.622h3.128V24h3.851z" fill="white"/>
        </svg>,
      alt: 'facebook'
    },
    {
        href: 'https://www.instagram.com/f_kumphon/',
        icon: (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient id="InstagramGradient" x1="12.5" y1="0" x2="12.5" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F58529" />
              <stop offset="0.5" stopColor="#DD2A7B" />
              <stop offset="1" stopColor="#8134AF" />
            </linearGradient>
            <path
              d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z"
              fill="url(#InstagramGradient)"
            />
          </svg>
        ),
        alt: 'Instagram',
    },
  ];

const Contact = () => {
  return (
    <section id='contact' className='section'>
        <div className='container lg:grid lg:grid-cols-2 lg:items-stretch'>
            <div className='mb-12 lg:mb-0 lg:flex lg:flex-col'>
                <h2 className="headline-2 lg:max-w-[12ch]">
                    Contact me for collaboration
                </h2>

                <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]'>
                    Reach out today to discuss your project needs 
                    and start collaborating on something amazing!
                </p>

                <div className='flex items-center gap-2 mt-auto'>
                    {socialLinks.map(({ href, icon }, key) => (
                        <a
                            key={key}
                            href={href}
                            target='_blank'
                            className='w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80'
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>

            <form 
                action="https://getform.io/f/awnnklnb" 
                method='POST' 
                className="xl:pl-10 2xl:pl-20"
            >
                <div className='md:grid md:items-center md:grid-cols-2 md:gap-2'>
                    <div className='mb-4'>
                        <label 
                            htmlFor="name" 
                            className="label"
                        >
                            Name
                        </label>

                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            autoComplete='name'
                            required
                            placeholder='Kumphon Suwannoppakul'
                            className="text-field" 
                        />

                    </div>

                    <div className='mb-4'>
                        <label 
                            htmlFor="email" 
                            className="label"
                        >
                            Email
                        </label>

                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            autoComplete='email'
                            required
                            placeholder='kumphon@example.com'
                            className="text-field" 
                        />

                    </div>

                    
                </div>

                <div className='mb-4'>
                    <label 
                        htmlFor="message" 
                        className="label"
                    >
                        Message
                    </label>

                    <textarea 
                        name='message' 
                        id='message' 
                        placeholder='Hi'
                        required
                        className='text-field resize-y min-h-32 max-h-80'
                    >

                    </textarea>
                </div>

                <button 
                    type="submit" 
                    className='btn btn-primary [&]:max-w-full w-full justify-center'
                >
                    Submit
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact