import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';

export default function Header() {

    const haveNotification = false;
    
    return (
        <div className="bg-white h-28 flex items-center justify-center shadow-sm">
            <div className="container mx-auto px-5 flex items-center justify-between flex-wrap gap-4">
                <Link href="/">
                    <div className='flex items-center justify-center md:w-auto w-full cursor-pointer'>
                        <img src='/logo.svg' alt='EkoNav Logo' className="mr-3" />
                        <p className="text-3xl font-glory font-normal">EkoNav</p>
                    </div>
                </Link>
                <div className="flex items-center justify-center gap-4 md:gap-8 md:w-auto w-full">
                    <form className="relative">
                        <input className="text-md border border-ekonavGray/75 rounded-full w-64 md:w-80 py-1 px-4 md:px-5" type="text" name="search" placeholder="Sınıf veya blok arayın" />
                        <span className="text-ekonavGray/75 absolute right-4 top-2 cursor-pointer">
                            <BiSearch className='fill-ekonavGray/75' size={19} />
                        </span>
                    </form>
                    <div className="relative">
                        <IoMdNotificationsOutline className='fill-ekonavGray/75' size={23} />
                        { haveNotification &&
                            <span className="absolute left-3 bottom-[0.625rem] border-2 border-white bg-ekonavPurple w-[0.938rem] h-[0.938rem] rounded-full shadow-notification"></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}