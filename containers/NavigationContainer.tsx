'use client'
import NavigationComponent from "@/components/NavigationComponent/NavigationComponent"
import useOutsideClick from "@/utils/click/useOutSideClick";
import { useState } from "react"

export default function NavigationContainer({ isHome }: { isHome: boolean }) {
    const [showMenu, isShowMenu] = useState<boolean>(false);

    const handleShowMenu = () => {
        isShowMenu(!showMenu)
    }

    const menuRef = useOutsideClick(() => {
        if (showMenu) {
            handleShowMenu();
        }
    });

    return <NavigationComponent
        isHome={isHome}
        showMenu={showMenu}
        handleShowMenu={handleShowMenu}
        menuRef={menuRef}
    />
}