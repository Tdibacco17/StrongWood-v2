'use client'
import { designData } from '@/models/design'
import { useContext, useEffect, useMemo, useState } from "react";
import { DesignCategorieInterface, FurnitureDataCardsInterface, FurnitureDataContextInterface, MeasureInterface } from "@/types/design";
import { ImgDataInterface } from '@/types';
import FurnitureComponent from '@/components/FurnitureComponent/FurnitureComponent';
import { FurnitureDetailContext } from '@/context/FurnitureDetailProvider';

export default function FurnitureContainer({
    designKey,
    params,
    isGeneric
}: {
    designKey: DesignCategorieInterface,
    params: { slug: string },
    isGeneric: boolean
}) {
    const { furnitureData, handleFurnitureDataChange } = useContext(
        FurnitureDetailContext
    ) as FurnitureDataContextInterface

    useEffect(() => {
        const selectedDesignData = isGeneric ? designData['cocinas'].details.tables['generic'] : designData['cocinas'].details.tables[params.slug];
        handleFurnitureDataChange(selectedDesignData);
    }, [params.slug, isGeneric]);

    const [measureValues, setMeasureValues] = useState<MeasureInterface | {}>({});
    const [selectedMeasureImage, setSelectedMeasureImage] = useState<string | null>(null);

    const [visibleTables, setVisibleTables] = useState<number[]>([1]);
    const [clickedImages, setClickedImages] = useState<{ tableId: number, tableTitle: string, images: string[] }[]>([]);

    useEffect(() => {
        // Aquí actualizamos measureValues en función de selectedMeasureImage
        if (selectedMeasureImage) {
            designData['cocinas'].details.measures && setMeasureValues(designData['cocinas'].details.measures[selectedMeasureImage]);
        } else {
            // Si no hay una imagen seleccionada para medir, reseteamos measureValues
            setMeasureValues({});
        }
    }, [selectedMeasureImage]);

    const handleImageClick = useMemo(() => (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string) => {
        // Verificamos si la imagen ya está en el array clickedImageSlugs
        const nextTableId = tableId + 1;
        if (!visibleTables.includes(nextTableId)) {
            setVisibleTables(prevTables => [...prevTables, nextTableId]);
        }

        //busco que tabla tiene la prop askMeasure en true (pedir medidas)
        const currentTable = furnitureData.find(table => table.table_id === tableId);
        if (currentTable?.askMeasure) {
            // Si la propiedad askMeasure está en true, actualizamos selectedMeasureImage
            setSelectedMeasureImage(image.title_slug);
        }

        // Verificamos si la imagen ya está en la lista de imágenes seleccionadas para esta tabla
        const selectedImageIndex = clickedImages.findIndex(item => item.tableId === tableId);

        if (selectedImageIndex !== -1) {
            const existingImages = clickedImages[selectedImageIndex].images;
            const isImageSelected = existingImages.includes(image.title_slug);
            const maxSelections = furnitureData[tableId - 1]?.maxSelections || 0;
            const tableImages = furnitureData[tableId - 1]?.cards || [];

            if (isImageSelected) {
                // Si la imagen ya está en la lista, la eliminamos
                const updatedImages = existingImages.filter(img => img !== image.title_slug);

                if (updatedImages.length === 0) {
                    // Si no quedan imágenes seleccionadas en esta tabla, la eliminamos
                    const updatedSelectedImages = [...clickedImages];
                    updatedSelectedImages.splice(selectedImageIndex, 1);
                    setClickedImages(updatedSelectedImages);
                } else {
                    // Si quedan imágenes seleccionadas en esta tabla, actualizamos la lista
                    const updatedSelectedImages = [...clickedImages];
                    updatedSelectedImages[selectedImageIndex].images = updatedImages;
                    setClickedImages(updatedSelectedImages);
                }
            } else if (maxSelections === 0 || existingImages.length < maxSelections) {
                // Agregamos la nueva imagen si no se ha alcanzado el límite
                const updatedSelectedImages = [...clickedImages];
                updatedSelectedImages[selectedImageIndex].images.push(image.title_slug);
                setClickedImages(updatedSelectedImages);
            } else if (maxSelections > 0 && existingImages.length >= maxSelections && maxSelections < tableImages.length) {
                // Reemplazamos la imagen más antigua si se ha alcanzado el límite y hay más imágenes disponibles
                const updatedImages = [...existingImages];
                updatedImages.shift(); // Elimina la imagen más antigua
                updatedImages.push(image.title_slug); // Agrega la nueva imagen
                const updatedSelectedImages = [...clickedImages];
                updatedSelectedImages[selectedImageIndex].images = updatedImages;
                setClickedImages(updatedSelectedImages);
            }
        } else {
            // Verificamos si se ha alcanzado el límite de selecciones para esta tabl
            const maxSelections = furnitureData[tableId - 1]?.maxSelections || 0;
            if (maxSelections === 0 || maxSelections > 0) {
                // Si no hay imágenes seleccionadas para esta tabla o no se ha alcanzado el límite, creamos una nueva entrada
                setClickedImages(prevSelectedImages => [
                    ...prevSelectedImages,
                    { tableId, tableTitle, images: [image.title_slug] }
                ]);

                // Verificamos si la propiedad askMeasure está en true y guardamos el title_slug
                if (currentTable?.askMeasure) {
                    designData['cocinas'].details.measures && setMeasureValues(designData['cocinas'].details.measures[image.title_slug]);
                }
            }
        }
    }, [furnitureData, clickedImages, visibleTables]);

    console.log("[MEASURE-VALUES]: ", measureValues)
    console.log("[CLICKED-IMAGES]: ", clickedImages)

    return <FurnitureComponent
        visibleTables={visibleTables}
        handleImageClick={handleImageClick}
    />
}