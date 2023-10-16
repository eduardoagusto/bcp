'use client'

import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import instagram from '@/assets/brands/instagram.svg';
import facebook from '@/assets/brands/facebook.svg';
import meta from '@/assets/brands/meta.svg';
import nextjs from '@/assets/brands/nextjs.svg';
import reactjs from '@/assets/brands/react.svg';
import framermotion from '@/assets/brands/framer.svg';
import photoshop from '@/assets/brands/photoshop.svg';
import figma from '@/assets/brands/figma.svg';
import notion from '@/assets/brands/notion.svg';

const brands = [
    {
        url:instagram,
        id:1,
        title:'Instagram',
    },
    {
        url:facebook,
        id:2,
        title:'Facebook',
    },
    {
        url:meta,
        id:3,
        title:'Meta',
    },
    {
        url:nextjs,
        id:4,
        title:'Next',
    },
    {
        url:reactjs,
        id:5,
        title:'React',
    },
    {
        url:framermotion,
        id:6,
        title:'Framer Motion',
    },
    {
        url:photoshop,
        id:7,
        title:'Photoshop',
    },
    {
        url:figma,
        id:8,
        title:'Figma',
    },
    {
        url:notion,
        id:9,
        title:'Notion',
    },

];

const Brands = () =>{
    return (
        <div>
            <HorizontalScrollCarousel/>
        </div>
    )
}

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0,1], ['-0%', '-100%']);

    return (
        <section ref={targetRef} className='relative h-[500vh]'>
            <div className='sticky top-1/4'>
                <div className=' flex items-center justify-center flex-wrap p-3 md:p-6'>
                     <p className='font-black text-white text-3xl md:text-5xl text-center'><span className='text-[#00EA75]'>Tecnologias</span> utilizadas em nosso <span className='text-[#00EA75]'>desenvolvimento:</span></p>
                </div>
                <div className='flex items-center overflow-hidden'>
                        <motion.div style={{x}} className='flex gap-4'>
                            {brands.map((brand) => {
                                return <Brand brand={brand} key={brand.id}/>
                            })}
                        </motion.div>
                </div>
            </div>
        </section>
    );
};



const Brand = ({ brand }) => {
    return (
        <div
            key={brand.id}
            className='group relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] overflow-hidden'
        >
            <div className='absolute inset-0 z-10 grid place-content-center w-full'>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <Image src={brand.url} className='w-20 h-20 md:w-40 md:h-40 ' width={'150'} height={'150'}/>
                            <p className='text-4xl lg:text-6xl font-black uppercase text-white text-center absolute top-52 md:top-80'>
                                {brand.title}
                            </p>
                    </div>
                </div>
        </div>   
    )
    
}

export default Brands;