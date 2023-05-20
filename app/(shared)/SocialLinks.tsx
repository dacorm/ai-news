import React from 'react';
import Image from "next/image";
import Twitter from '@/public/assets/social_twitter.png';
import Facebook from '@/public/assets/social_facebook.png';
import Discord from '@/public/assets/social_discord.png';
import Google from '@/public/assets/social_google.png';
import Instagram from '@/public/assets/social_instagram.png';

interface SocialLinksProps {
    isDark?: boolean;
}

const SocialLinks = ({ isDark = false }: SocialLinksProps) => {
    return (
        <div className='flex justify-between items-center gap-7'>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                <Image src={Twitter} alt={'twitter'} className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`} width={20} height={20} />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                <Image src={Discord} alt={'discord'} className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`} width={20} height={20}/>
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                <Image src={Google} alt={'google'} className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`} width={20} height={20}/>
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                <Image src={Instagram} alt={'Instagram'} className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`} width={20} height={20}/>
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                <Image src={Facebook} alt={'facebook'} className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`} width={20} height={20}/>
            </a>
        </div>
    );
};

export default SocialLinks;