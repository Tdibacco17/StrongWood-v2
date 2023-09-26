'use client'
import { designData } from '@/models/design'
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { DesignCategorieInterface, FurnitureDataCardsInterface, FurnitureDataContextInterface, MeasureInterface } from "@/types/design";
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
        return () => {
            handleFurnitureDataChange([]); // Clear furnitureData when unmounting
        };
    }, []);
    useEffect(() => {
        const selectedDesignData = isGeneric ? designData[designKey].details.tables['generic'] : designData[designKey].details.tables[params.slug];
        handleFurnitureDataChange(selectedDesignData);
    }, [params.slug, isGeneric, designKey]);

    const [measureValues, setMeasureValues] = useState<MeasureInterface | undefined>(undefined);
    const [selectedMeasureImage, setSelectedMeasureImage] = useState<string | null>(null);
    const [visibleTables, setVisibleTables] = useState<number[]>([1]);
    const [clickedImages, setClickedImages] = useState<{ tableId: number, tableTitle: string, images: string[] }[]>([]);
    const [missingTableIds, setMissingTableIds] = useState<number[]>([]);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [inputValues, setInputValues] = useState<{ [key: string]: number }>({});
    const [areInputsEmpty, setAreInputsEmpty] = useState<boolean>(false);

    const initialInputValues: { [key: string]: number } = {};
    // Itera sobre leters y establece valores iniciales en el estado
    measureValues?.leters.forEach((inputItem) => {
        initialInputValues[inputItem.title] = 0; // Puedes establecer el valor inicial que desees
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value);
        const inputName = e.target.name;

        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [inputName]: newValue,
        }));
    };

    // Efecto para limpiar inputValues cuando measureValues cambia
    useEffect(() => {
        setInputValues({}); // Limpia inputValues cuando measureValues cambia
    }, [measureValues]);
    useEffect(() => {
        // Aquí actualizamos measureValues en función de selectedMeasureImage
        if (selectedMeasureImage) {
            if (designKey === "cocinas") {
                designData['cocinas'].details.measures && setMeasureValues(designData['cocinas'].details.measures[selectedMeasureImage]);
            }
            if (designKey === "placares") {
                designData['placares'].details.measures && setMeasureValues(designData['placares'].details.measures[selectedMeasureImage]);
            }
        } else {
            // Si no hay una imagen seleccionada para medir, reseteamos measureValues
            setMeasureValues(undefined);
        }
    }, [selectedMeasureImage]);
    useEffect(() => {
        if (submitButtonClicked) {
            if (designKey === "cocinas" || designKey === "placares") {
                validateSelectedImages();
                validateCompleteInputs();
            } else {
                validateSelectedImages();
            }
        }
    }, [clickedImages, inputValues])

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
                    if (designKey === "cocinas") {
                        designData['cocinas'].details.measures && setMeasureValues(designData['cocinas'].details.measures[image.title_slug]);
                    }
                    if (designKey === "placares") {
                        designData['placares'].details.measures && setMeasureValues(designData['placares'].details.measures[image.title_slug]);
                    }
                }
            }
        }
    }, [furnitureData, clickedImages, visibleTables]);

    const validateSelectedImages = () => {
        const tableIdsWithImages = clickedImages.map(item => item.tableId);
        const allTableIds = furnitureData.map(item => item.table_id);

        const missingTableIds = allTableIds.filter(tableId => !tableIdsWithImages.includes(tableId));

        setMissingTableIds(missingTableIds);
    };

    const validateCompleteInputs = () => {
        const isEmpty = Object.keys(inputValues).length === 0; // Verificar si el objeto inputValues está vacío
        const hasEqualLength = Object.keys(inputValues).length === measureValues?.leters.length; // Verificar si tiene la misma cantidad de keys que measureValues

        const areInputsComplete = !isEmpty && hasEqualLength; // Comprobar si no está vacío y tiene la misma cantidad de keys

        // Verificar si alguno de los valores en inputValues es NaN
        const hasNaNValues = Object.values(inputValues).some((value) => isNaN(value));

        if (areInputsComplete) {
            if (hasNaNValues) {
                setAreInputsEmpty(true); // Marcar como vacío si hay valores NaN
            } else {
                setAreInputsEmpty(false); // Marcar como no vacío si todos los valores son válidos
            }
        } else {
            setAreInputsEmpty(true); // Marcar como vacío si no están completos
        }
    };

    const handleSubmit = () => {
        setSubmitButtonClicked(true); // Marcar el botón como presionado

        if (designKey === "cocinas" || designKey === "placares") {
            validateSelectedImages();
            validateCompleteInputs();
            if (missingTableIds.length > 0 || areInputsEmpty || (Object.keys(inputValues).length === 0)) {
                // Handle the case where some tables are missing images or inputs are not complete
                if (missingTableIds.length > 0) {
                    // console.log("Mesas sin imágenes:", missingTableIds);
                }
                if (areInputsEmpty) {
                    // console.log("Algunos inputs están vacíos");
                }
            } else {
                // Todas las mesas tienen al menos una imagen seleccionada y todos los inputs están completos
                // console.log("Todas las mesas tienen al menos una imagen seleccionada y todos los inputs están completos");
            }
        } else {
            validateSelectedImages();
            if (missingTableIds.length > 0) {
                // console.log("Mesas sin imágenes:", missingTableIds);
            } else {
                // console.log("Todas las mesas tienen al menos una imagen seleccionada");
            }
        }
    };

    return <FurnitureComponent
        measureValues={measureValues}
        missingTableIds={missingTableIds}
        handleSubmit={handleSubmit}
        visibleTables={visibleTables}
        handleImageClick={handleImageClick}
        handleInputChange={handleInputChange}
        inputValues={inputValues}
        areInputsEmpty={areInputsEmpty}
        clickedImages={clickedImages}
    />
}