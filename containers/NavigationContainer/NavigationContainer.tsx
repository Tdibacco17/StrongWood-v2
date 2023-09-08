'use client'
import NavigationComponent from "@/components/NavigationComponent/NavigationComponent"
import useOutsideClick from "@/utils/click/useOutSideClick";
import { useCallback, useState } from "react"

export default function NavigationContainer({ isHome, url, showUrl }: { isHome: boolean, url: string, showUrl: boolean }) {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const handleShowMenu = useCallback(() => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
        setShowDropdown(false);
    }, []);

    const handleShowDropdown = useCallback(() => {
        setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    }, []);

    const menuRef = useOutsideClick(() => {
        if (showMenu) {
            if (showDropdown) {
                handleShowDropdown()
            }
            handleShowMenu()
        }
    });

    return <NavigationComponent
        isHome={isHome}
        showMenu={showMenu}
        handleShowMenu={handleShowMenu}
        showDropdown={showDropdown}
        handleShowDropdown={handleShowDropdown}
        menuRef={menuRef}
        url={url}
        showUrl={showUrl}
    />
}