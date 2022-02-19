import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { HiMenu, HiMenuAlt1 } from 'react-icons/hi';
import { BsGrid, BsListUl, BsDoorClosed } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';

import Head from 'next/head';
import Image from 'next/image';

export default function Content({ blocks }) {

    const router = useRouter();

    const [isListOn, setIsListOn] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItem = [
        {
            id: '1',
            name: 'Bloklar',
            url: '/bloklar',
        },
        {
            id: '2',
            name: 'Derslikler',
            url: '/derslikler',
        },
        {
            id: '3',
            name: 'Yeme - İçme',
            url: '/yeme-icme',
        },
        {
            id: '4',
            name: 'Details',
            url: '/details',
        },
        {
            id: '5',
            name: 'Anasayfa',
            url: '/',
        }
    ];

    return (
        <>
            <Head>
                <title>Content</title>
            </Head>
            <div className="relative container mx-auto px-5 pt-10 flex items-center justify-between">
                <div className="hidden md:block ekoNav-navigation">
                    <ul className="flex items-center justify-start gap-10 text-ekonavLink/50 font-bold">
                        {
                            menuItem.map( (menu) => (
                                <li className={router.pathname === menu.url ? 'active' : ''} key={menu.id}>
                                    <Link href={menu.url}>{menu.name}</Link>
                                </li>

                            ) )
                        }
                    </ul>
                </div>

                <div className="md:hidden flex items-center">
                    <button className="outline-none cursor-pointer transition-all" onClick={() => setMobileMenu(!mobileMenu)}>
                        { mobileMenu ?
                            <HiMenuAlt1 className="text-ekonavGray" size={30} />
                            :
                            <HiMenu className="text-ekonavGray" size={30} />
                        }
                    </button>
                </div>
                <div className={mobileMenu ? '' : 'hidden'}>
                    <ul className="absolute bg-white pt-6 pr-6 pl-6 pb-11 left-0 top-24 flex gap-10 text-sm w-full text-ekonavLink/50 font-bold flex-wrap transition-all">
                        {
                            menuItem.map( (menu) => (
                                <li className={router.pathname === menu.url ? 'active relative' : 'relative'} key={menu.id}>
                                    <Link href={menu.url} >{menu.name}</Link>
                                </li>
                            ) )
                        }
                        <span className="absolute bottom-[5.2rem] left-5 w-0 h-0 border-r-[15px] border-l-[15px] border-l-transparent border-r-transparent border-t-0 border-b-[20px] border-b-white"></span>
                    </ul>
                </div>

                <form className="form-check flex items-center justify-center">
                    <label htmlFor="gridToList" className="flex items-center cursor-pointer relative">
                        <input type="checkbox" id="gridToList" className="sr-only" onChange={(e) => { setIsListOn(e.target.checked) }} />
                        <div className="gridToList bg-[#F4F2F8] border border-[#DCDBE0] h-10 w-20 rounded-lg flex items-center justify-around">
                            <BsGrid size={22} className="gridIcon" />
                            <BsListUl size={22} className="listIcon" />
                        </div>
                    </label>
                </form>
            </div>

            {
                !blocks ? 'Loading...'
                :

                <div className="container mx-auto px-5 py-12">
                { isListOn ?
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {blocks.map( ({ id, blockName, slug, blockImage, totalClassNum }) => 
                        <Link href={`/block/${slug}`} key={id} passHref>
                            <div className="cursor-pointer hover:shadow-2xl item flex justify-between flex-row bg-white rounded-xl shadow-lg">
                                <Image src={blockImage.url} alt={blockName} width={200} height={200} className="overflow-hidden flex-1 w-56 max-w-sm object-cover rounded-l-xl" />
                                <div className="details flex flex-1 flex-col justify-center items-center p-3 md:p-5 lg:p-9 gap-6">
                                    <div className="topInfo flex md:text-2xl text-lg">
                                        <h1 className="title font-bold">{blockName}</h1>
                                    </div>
                                    <div className="bottomInfo flex gap-10 md:gap-14 lg:gap-20 flex-1 items-center justify-between text-sm md:text-base">
                                        <div className="classNum flex items-center justify-center gap-2">
                                            <BsDoorClosed size={18} className="fill-ekonavGray/75"/>
                                            {totalClassNum}
                                        </div>
                                        <div className="viewNum flex items-center justify-center gap-2">
                                            {totalClassNum}
                                            <AiOutlineEye size={18} className="fill-ekonavGray/75"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}

                    </div>
                :
                    <div className="itemGrid">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                            {blocks.map( ({ id, blockName, slug, blockImage, totalClassNum }) => 
                                <Link href={`/block/${slug}`} key={id} passHref>
                                    <div className="cursor-pointer hover:shadow-2xl item flex justify-center flex-col bg-white rounded-xl shadow-lg">
                                        <Image src={blockImage.url} alt={blockName} width={200} height={200} className="overflow-hidden w-full object-cover rounded-t-xl" />
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
                            )}
                            
                        </div>
                    </div>
                }
                </div>
            }

        </>
    );
}