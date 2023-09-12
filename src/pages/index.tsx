import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Navbar from '@/components/navbar';
import Hero from '@/components/index/hero';
import About from '@/components/index/about';

export default function Index() {
  const [pageLoad, setPageLoad] = useState(false);
  const [titleColor, setTitleColor] = useState('text-white');

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    setPageLoad(true);
    setTimeout(() => {
      setTitleColor('text-orange-600');
    }, 600);
  }, []);

  const handleClickScroll = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScroll2 = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>RobinTT.me</title>
        <meta name="description" content="RobinTT's personal site" />
        <meta property="og:image" content="https://r2.e-z.host/8a13052f-8c12-4034-b99f-0155cc616583/28uf4vk6.ico" />
        <meta property='theme-color' content='#ea580c' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://r2.e-z.host/8a13052f-8c12-4034-b99f-0155cc616583/28uf4vk6.ico" />
      </Head>
      <Navbar clickScroll={handleClickScroll} clickScroll2={handleClickScroll2} pageLoad={pageLoad} />
      <main className='relative h-screen'>
        <Hero pageLoad={pageLoad} titleColor={titleColor} />
        <About refID={ref} inView={inView} />
      </main>
    </>
  );
}
