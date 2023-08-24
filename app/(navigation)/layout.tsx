import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import { ProductDetailProvider } from '@/context/ProductDetailProvider'

export default function NavigationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavigationContainer isHome={false} />
            <ProductDetailProvider>
                {children}
            </ProductDetailProvider>
        </>
    )
}