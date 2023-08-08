'use client'
import NavigationComponent from "@/components/NavigationComponent/NavigationComponent"
import useOutsideClick from "@/utils/click/useOutSideClick";
import { useWindowSize } from "@/utils/size/useWindowSize";
import { useEffect, useState } from "react"

export default function NavigationContainer({ isHome }: { isHome: boolean }) {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
        setShowDropdown(false)
    }

    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const menuRef = useOutsideClick(() => {
        if (showMenu) {
            if (showDropdown) {
                handleShowDropdown()
            }
            handleShowMenu()
        }
    });

    const dropdownRef = useOutsideClick(() => {
        if (showDropdown) {
            handleShowDropdown()
        }
    });

    const { width } = useWindowSize();

    useEffect(() => {
        if (width < 768 && showDropdown) {
            return
        }
        if (width > 768 && showMenu && showDropdown) {
            setShowDropdown(false);
            setShowMenu(false);
        }
        if (width > 768 && !showMenu && !showDropdown) {
            return
        }
    }, [width])

    return <NavigationComponent
        isHome={isHome}
        showMenu={showMenu}
        handleShowMenu={handleShowMenu}
        showDropdown={showDropdown}
        handleShowDropdown={handleShowDropdown}
        menuRef={menuRef}
        dropdownRef={dropdownRef}
    />
}