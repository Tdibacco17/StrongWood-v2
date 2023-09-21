import { FurnitureDetailProvider } from "@/context/FurnitureDetailProvider"

export default function KitchenDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <FurnitureDetailProvider>
            {children}
        </FurnitureDetailProvider>
    )
}