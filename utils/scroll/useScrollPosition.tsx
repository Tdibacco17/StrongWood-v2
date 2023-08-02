'use client'
import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100;
            if (window.scrollY > scrollThreshold) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };
        handleScroll()

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return hasScrolled;
};