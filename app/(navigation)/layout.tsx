import NavigationContainer from '@/containers/NavigationContainer'

export default function NavigationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavigationContainer isHome={false} />
            {children}
        </>
    )
}