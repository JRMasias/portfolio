'use client';
import { useEffect, useState } from 'react';
import MNavbar from './ui/mNavbar';
import DNavbar from './ui/dNavbar';

interface ScreenWidth {
    width: number;
    height: number;
}

export default function NavHandler() {
    const [screenWidth, setScreenWidth] = useState<ScreenWidth>({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenWidth.width >= 1024 ? <DNavbar /> : <MNavbar />;
}