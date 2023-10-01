import { NextRequest, NextResponse } from "next/server";

const routesWeb = ["", "placares", "cocina", "banio", "dormitorio", "productos"];

const placaresItems = ["vestidor-de-luxe", "vestidor-fusion", "placard-urbanwood"] 
const cocinasItems = ["serie-nordica", "serie-new-york", "serie-premium", "serie-nova", "serie-de-luxe",]
const banioItems = ["vanitory-new-york", "vanitory-escandinavo", "vanitory-nordico",]
const dormitorioItems = ["comoda", "escritorio", "mesa-de-luz", "cama-individual", "cama-matrimonial"]

const routesProducts = [
    "mesa-de-luz-roma", "mesa-cracovia", "mesa-ratona-edimburgo", "maceta-sintra", "maceta-avi%C3%B1on", "estanteria-siena", "estanteria-avila",
    "estanteria-bath", "estanteria-bergen", "llavero-corfu", "llavero-viena", "le%C3%B1ero", "rack-tv-cordoba", "toallero-matera", "toallero-cuenca",
    "bodega-segovia", "porta-copas", "porta-vinos", "escritorio-brujas", "perchero-oporto", "recibidor-salamanca", "tabla-asado", "soporte-auricular",
];

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = new URL(request.url);

    if (pathname.startsWith("/productos/")) {
        const productSlug = pathname.replace("/productos/", "");
        const productExists = routesProducts.includes(productSlug);

        if (!productExists) {
            return NextResponse.redirect(new URL("/productos", request.url));
        }
    }

    //placares
    if (pathname.startsWith("/placares/")) {
        const productSlug = pathname.replace("/placares/", "");
        const productExists = placaresItems.includes(productSlug);

        if (!productExists) {
            return NextResponse.redirect(new URL("/placares", request.url));
        }
    }

    //cocinas
    if (pathname.startsWith("/cocinas/")) {
        const productSlug = pathname.replace("/cocinas/", "");
        const productExists = cocinasItems.includes(productSlug);

        if (!productExists) {
            return NextResponse.redirect(new URL("/cocinas", request.url));
        }
    }

    //dormitorio
    if (pathname.startsWith("/dormitorio/")) {
        const productSlug = pathname.replace("/dormitorio/", "");
        const productExists = dormitorioItems.includes(productSlug);

        if (!productExists) {
            return NextResponse.redirect(new URL("/dormitorio", request.url));
        }
    }

    //banio
    if (pathname.startsWith("/banio/")) {
        const productSlug = pathname.replace("/banio/", "");
        const productExists = banioItems.includes(productSlug);

        if (!productExists) {
            return NextResponse.redirect(new URL("/banio", request.url));
        }
    }

    return NextResponse.next();
}