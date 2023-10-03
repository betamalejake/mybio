import Typewriter from 'typewriter-effect';
import Techicon from '@/components/techicon';
import Socialicon from '@/components/socialicon';

export default function About({ refID, inView }: { refID: any; inView: boolean }) {
    return (
        <>
            <section className='relative bg-slate-950 pb-8'>
                <h1 className={`text-white font-bold sm:text-6xl text-4xl font-kanit text-center pb-8`}>
                    A little about me.
                </h1>
                <div className='flex flex-col max-w-6xl w-full mx-auto '>
                    <div className='bg-slate-900 self-center w-3/4 rounded-md overflow-hidden border-2 border-orange-700 hover:-translate-y-1 duration-300 p-4 mb-16'>
                        <p ref={refID} className={`text-white text-md font-kanit`}>
                            {inView && (
                                <Typewriter
                                    options={{
                                        delay: 30,
                                        strings: ["I am passionately dedicated to acquiring proficiency in a multitude of programming languages and frameworks, driven by my ultimate goal of creating software that resonates with and benefits people. I firmly believe that the versatility offered by various languages and frameworks is the key to addressing diverse challenges and catering to the unique needs of users, motivating me to explore this ever-evolving landscape continually."],
                                        loop: false,
                                        autoStart: true,
                                        deleteSpeed: 604800000,
                                    }}
                                />
                            )}
                        </p>
                    </div>
                    <h2 className={`text-white font-semibold sm:text-2xl text-lg xl:px-0 px-8 font-kanit`}>
                         These are the languages, frameworks and libraries I&apos;m learning currently/ will learn in the future (more to come).
                    </h2>
                    <ul className='flex flex-row flex-wrap justify-start gap-2 mt-2 rounded-md w-fit xl:px-0 px-8'>
                    <Techicon href='https://html.com/html5/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' delay={0.2} />
                        <Techicon href='https://www.javascript.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' delay={0.3} rounded={true} />
                        <Techicon href='https://www.w3schools.com/css/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' delay={0.4} />
                        <Techicon href='https://nodejs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' delay={0.5} />
                        <Techicon href='https://reactjs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' delay={0.6} />
                        <Techicon href='https://tailwindcss.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' delay={0.7} />
                        
                    </ul>
                    <h2 className={`text-white font-semibold sm:text-2xl text-lg font-kanit text-right pt-24 xl:px-0 px-8`}>
                        Here are some of the tools I like to use.
                    </h2>
                    <ul className='flex flex-row flex-wrap gap-2 mt-2 self-end rounded-md w-fit xl:px-0 px-8'>
                        <Techicon href='https://code.visualstudio.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' delay={0.1} />
                        <Techicon href='https://www.mozilla.org/en-US/firefox/' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/firefox/firefox-original.svg' delay={0.2} />
                        <Techicon href='hhttps://www.microsoft.com/en-us/windows/?r=1' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/windows8/windows8-original.svg' delay={0.3} />
                        <Socialicon
                                href='https://github.com/'
                                svg={<svg xmlns="http://www.w3.org/2000/svg" className='m-auto mt-2.5 w-7 h-7 fill-white' viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>}
                                delay={0.4}
                            />
                        
                    </ul>
                </div>
            </section>
        </>
    )
}
