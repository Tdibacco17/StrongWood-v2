import { ProductDetailProvider } from "@/context/ProductDetailProvider"

export default function ProductDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ProductDetailProvider>
            {children}
        </ProductDetailProvider>
    )
}