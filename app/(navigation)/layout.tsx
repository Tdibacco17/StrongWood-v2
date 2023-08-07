import NavigationComponent from '@/components/NavigationComponent/NavigationComponent'

export default function NavigationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavigationComponent isHome={false} />
            {children}
        </>
    )
}