'use client'
import ProyectsComponent from "@/components/ProyectsComponent/ProyectsComponent";
import { useState } from "react";

export default function ProyectsContainer() {
    const [isView, setIsView] = useState<boolean>(false)

    const handleViewProyects = () => {
        setIsView(!isView)
    }

    return <ProyectsComponent handleViewProyects={handleViewProyects} isView={isView} />
}