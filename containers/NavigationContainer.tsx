'use client'
import NavigationComponent from "@/components/NavigationComponent/NavigationComponent"
import useOutsideClick from "@/utils/click/useOutSideClick";
import { useWindowSize } from "@/utils/size/useWindowSize";
import { useEffect, useState } from "react"

export default function NavigationContainer({ isHome }: { isHome: boolean }) {
    const [showMenu, isShowMenu] = useState<boolean>(false);
    const [showDropdown, isShowDropdown] = useState<boolean>(false);

    console.log(showDropdown, showMenu)

    const handleShowMenu = () => {
        isShowMenu(!showMenu);
    }

    const handleShowDropdown = () => {
        isShowDropdown(!showDropdown)
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
        if ((width > 768) && !showMenu) {
            return
        }
        isShowDropdown(false);
        if ((width < 768) && !showDropdown) {
            return
        }
        isShowMenu(false)
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