import { DesignDetailProvider } from "@/context/DesignDetailProvider"

export default function KitchenDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <DesignDetailProvider>
            {children}
        </DesignDetailProvider>
    )
}