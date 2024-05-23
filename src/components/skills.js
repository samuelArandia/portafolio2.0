import React, { useEffect } from 'react';
import { FaVuejs, FaPython, FaHtml5, FaReact, FaCss3Alt, FaAngular, FaJava, FaGithub } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
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
    Aos.init();
  }, []);

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
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
    <section className='min-h-screen mt-20 px-10 md:px-40' id='Skills'>
      <div className='flex text-center justify-center my-20'>
        <GiSkills className='text-4xl text-indigo-500 mx-5' />
        <h1 className='text-3xl text-center'>Habilidades</h1>
      </div>
      <p className='text-lg mb-4 text-center'>
        Estas son algunas de las tecnologías y lenguajes de programación en las que tengo experiencia y herramientas que uso diariamente.
      </p>
      <div className='scroller' data-direction='left' data-speed='slow'>
        <div className='scroller__inner'>
          {/* Lenguajes de Programación */}
          <IconBox Icon={FaHtml5} color='text-red-500' label='HTML' />
          <IconBox Icon={FaCss3Alt} color='text-blue-500' label='CSS' />
          <IconBox Icon={SiJavascript} color='text-yellow-500' label='JavaScript' />
          <IconBox Icon={SiTypescript} color='text-blue-500' label='TypeScript' />
          <IconBox Icon={FaPython} color='text-blue-500' label='Python' />
          <IconBox Icon={FaJava} color='text-red-500' label='Java' />
          </div>
      </div>
      <div className='scroller' data-direction='right' data-speed='slow'>
        <div className='scroller__inner'>
          {/* Frameworks */}
          <IconBox Icon={FaVuejs} color='text-green-700' label='Vue.js' />
          <IconBox Icon={FaReact} color='text-sky-700' label='React' />
          <IconBox Icon={FaAngular} color='text-red-800' label='Angular' />
          <IconBox Icon={DiDjango} color='text-green-500' label='Django' />
          <IconBox Icon={GrGraphQl} color='text-pink-500' label='GraphQL' />
          <IconBox Icon={SiNestjs} color='text-red-500' label='NestJS' />
          <IconBox Icon={SiSpringboot} color='text-green-500' label='Spring Boot' />
          </div>
      </div>
      <div className='scroller' data-direction='left' data-speed='slow'>
        <div className='scroller__inner'>
          {/* Herramientas */}
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
    </section>
  );
};

export default Skills;

