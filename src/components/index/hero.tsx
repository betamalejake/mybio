import { motion } from "framer-motion";
import Socialicon from '@/components/socialicon';
import Techicon from '@/components/techicon';

export default function Hero({ pageLoad, titleColor }: { pageLoad: boolean, titleColor: string }) {
    return (
        <>
            <svg className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020617" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,74.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <section className='flex max-w-5xl w-full mx-auto'>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col gap-y-1 px-8 w-full xl:py-0 lg:py-32 md:py-40 sm:py-48 min-[425px]:py-56 py-60'>
                        <h1 className={`${pageLoad ? 'animate-fadeIn' : 'opacity-0'} text-white font-bold sm:text-6xl text-4xl font-kanit`}>
                            Hey, I&apos;m
                            <span className={`duration-1000 ${titleColor}`}> RobinTT</span>
                            <span className='text-gray-400 sm:text-base text-sm sm:pl-1 pl-0 italic sm:inline flex'></span>
                        </h1>
                        <motion.p initial={{ transform: 'translateX(-20px)', opacity: 0 }} whileInView={{ transform: 'translateX(0)', opacity: 100 }} transition={{ duration: 1, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }} viewport={{ amount: 0.2, once: true }} className={`text-white font-semibold sm:text-2xl text-xl font-kanit`}>
                            I&apos;m a guy who likes to code.
                        </motion.p>
                        <ul className='flex flex-row flex-wrap w-fit gap-2'>
                            <Socialicon
                                href='https://youtube.com/@therealalphajake'
                                svg={<svg className='m-auto mt-2.5 w-7 h-7 fill-[#FF0000]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                </svg>}
                                delay={0.3}
                            />
                            <Techicon href='https://steamcommunity.com/profiles/76561199084195911/' src='https://www.vectorlogo.zone/logos/steampowered/steampowered-icon.svg' delay={0.4} />
                    
                            <Socialicon
                                href='https://github.com/betamalejake'
                                svg={<svg xmlns="http://www.w3.org/2000/svg" className='m-auto mt-2.5 w-7 h-7 fill-white' viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>}
                                delay={0.5}
                            />
                
                        </ul>
                    </div>
                    <motion.img draggable={false} initial={{ opacity: 0 }} whileInView={{ opacity: 100 }} transition={{ duration: 1, delay: 0.6, ease: [0.39, 0.21, 0.12, 0.96], }} viewport={{ amount: 0.2, once: true }} className={`relative rounded-full lg:h-72 lg:w-72 h-0 w-0 border-2 border-orange-700 xl:-translate-y-14 lg:translate-y-6 mr-8 -translate-y-0 lg:scale-100 scale-0`} alt="image" src='https://cdn.discordapp.com/avatars/685666840021958685/cd958c9506fb817e24fb7eeb6fc2ef74.png?size=4096' />
                </div>
            </section>
            <svg id="about" className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020617" fill-opacity="1" d="M0,160L48,133.3C96,107,192,53,288,48C384,43,480,85,576,96C672,107,768,85,864,74.7C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </>
    )
}
