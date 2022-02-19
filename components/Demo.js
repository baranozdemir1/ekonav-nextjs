import Link from 'next/link';

import { useState, useEffect } from "react";

import { BsDoorClosed } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { FcExpand, FcCollapse } from 'react-icons/fc';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from 'next/image';

export default function Demo( ) {

    const [showCardSlides, setShowCardSlides] = useState(false);

    const [blocks, setBlocks] = useState([]);

    const fetchDataApi = async () => {
        const dataFetch = await fetch('http://localhost:3000/api/blocks');
        return await dataFetch.json();
    };

    useEffect(() => {
        fetchDataApi().then(data => setBlocks(data));
    }, []);

    return (
        <>
            {
                !blocks ? 'Loading...' :
                <>
                <div className='calc2 translate-x-2/4 z-50 absolute bottom-0 left-0 transition-all'>
                    <button 
                        className="px-6 h-10 text-white backdrop-blur-md rounded-t-xl border-t-2 border-r-2 border-l-2 " 
                        onClick={() => setShowCardSlides(!showCardSlides)}>
                            {showCardSlides ?  <FcExpand size={25} /> : <FcCollapse size={25} />}
                    </button>
                </div>
                {showCardSlides && (
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        slideToClickedSlide={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -30,
                            depth: 500,
                            modifier: 2,
                            slideShadows: true,
                        }}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        modules={[Pagination, EffectCoverflow]}
                        loop={true}
                        className="!absolute !bottom-0 !left-0 !right-0 !z-30 backdrop-blur-md border-t-2 py-10 transition-all"
                    >
                        <div className="itemGrid">
                            {blocks.blocks.map( ({ id, blockName, slug, blockImage, totalClassNum }) => 
                                <SwiperSlide key={id}>
                                    <Link href={`/block/${slug}`} passHref>
                                        <div className="cursor-pointer hover:shadow-2xl item flex justify-center flex-col bg-white rounded-xl shadow-lg">
                                            <Image src={blockImage.url} alt={blockName} width={300} height={300} className="overflow-hidden w-full object-cover rounded-t-xl" />
                                            <div className="details flex flex-col justify-center items-center p-6 md:p-5 lg:p-9 gap-6">
                                                <div className="topInfo flex flex-1 text-xl md:text-xl lg:text-2xl">
                                                    <div className="title font-bold">{blockName}</div>
                                                </div>
                                                <div className="bottomInfo flex gap-16  md:text-md lg:text-lg">
                                                    <div className="classNum flex items-center justify-center gap-2">
                                                        <BsDoorClosed size={20} className="fill-ekonavGray/75"/>
                                                        {totalClassNum}
                                                    </div>
                                                    <div className="viewNum flex items-center justify-center gap-2">
                                                        {totalClassNum}
                                                        <AiOutlineEye size={20} className="fill-ekonavGray/75"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                )}
                </>
            }
        </>
    );
}