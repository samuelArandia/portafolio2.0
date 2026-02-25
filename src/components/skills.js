import React, { useEffect } from 'react';
import { FaVuejs, FaPython, FaHtml5, FaReact, FaCss3Alt, FaAngular, FaJava, FaGithub } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { SiPostgresql, SiNestjs, SiJetbrains, SiSpringboot, SiTypescript, SiAzuredevops, SiPostman, SiJavascript, SiMicrosoftazure, SiDocker } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { TbBrandVscode } from 'react-icons/tb';
import { GrGraphQl } from 'react-icons/gr';
import Aos from 'aos';
import 'aos/dist/aos.css';
import IconBox from './iconBox';

const Skills = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', 'true');
        const scrollerInner = scroller.querySelector('.scroller__inner');
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', 'true');
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);

  return (
    <section className='py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16' id='Skills'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-16' data-aos='fade-up'>
          <h2
            className='font-display font-bold text-[var(--text-primary)]'
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Habilidades
          </h2>
          <div className='section-divider mx-auto mt-3 mb-5' />
          <p className='text-[var(--text-secondary)] max-w-2xl mx-auto' style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.05rem)' }}>
            Tecnologías, lenguajes y herramientas con las que trabajo diariamente.
          </p>
        </div>

        <div className='space-y-8'>
          {/* Languages */}
          <div data-aos='fade-up' data-aos-delay='100'>
            <h3 className='text-xs sm:text-sm font-semibold font-display uppercase tracking-widest text-[var(--accent-primary)] mb-4 text-center'>
              Lenguajes de Programación
            </h3>
            <div className='scroller' data-direction='left' data-speed='slow'>
              <div className='scroller__inner'>
                <IconBox Icon={FaHtml5} color='text-red-500' label='HTML' />
                <IconBox Icon={FaCss3Alt} color='text-blue-500' label='CSS' />
                <IconBox Icon={SiJavascript} color='text-yellow-500' label='JavaScript' />
                <IconBox Icon={SiTypescript} color='text-blue-500' label='TypeScript' />
                <IconBox Icon={FaPython} color='text-blue-500' label='Python' />
                <IconBox Icon={FaJava} color='text-red-500' label='Java' />
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div data-aos='fade-up' data-aos-delay='200'>
            <h3 className='text-xs sm:text-sm font-semibold font-display uppercase tracking-widest text-[var(--accent-primary)] mb-4 text-center'>
              Frameworks y Librerías
            </h3>
            <div className='scroller' data-direction='right' data-speed='slow'>
              <div className='scroller__inner'>
                <IconBox Icon={FaVuejs} color='text-green-700' label='Vue.js' />
                <IconBox Icon={FaReact} color='text-sky-700' label='React' />
                <IconBox Icon={FaAngular} color='text-red-800' label='Angular' />
                <IconBox Icon={DiDjango} color='text-green-500' label='Django' />
                <IconBox Icon={GrGraphQl} color='text-pink-500' label='GraphQL' />
                <IconBox Icon={SiNestjs} color='text-red-500' label='NestJS' />
                <IconBox Icon={SiSpringboot} color='text-green-500' label='Spring Boot' />
              </div>
            </div>
          </div>

          {/* Tools */}
          <div data-aos='fade-up' data-aos-delay='300'>
            <h3 className='text-xs sm:text-sm font-semibold font-display uppercase tracking-widest text-[var(--accent-primary)] mb-4 text-center'>
              Herramientas y Bases de Datos
            </h3>
            <div className='scroller' data-direction='left' data-speed='slow'>
              <div className='scroller__inner'>
                <IconBox Icon={SiPostgresql} color='text-blue-500' label='PostgreSQL' />
                <IconBox Icon={SiAzuredevops} color='text-blue-500' label='Azure DevOps' />
                <IconBox Icon={SiMicrosoftazure} color='text-blue-500' label='Microsoft Azure' />
                <IconBox Icon={BsGit} color='text-red-500' label='Git' />
                <IconBox Icon={TbBrandVscode} color='text-blue-500' label='VS Code' />
                <IconBox Icon={SiPostman} color='text-orange-500' label='Postman' />
                <IconBox Icon={SiJetbrains} color='text-gray-500' label='JetBrains' />
                <IconBox Icon={SiDocker} color='text-blue-500' label='Docker' />
                <IconBox Icon={FaGithub} color='text-gray-500' label='GitHub' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
