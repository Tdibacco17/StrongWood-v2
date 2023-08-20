import { ImgDataInterface } from '@/types';
import styles from './ProductDetailGalleryComponent.module.scss'
import Image from 'next/image';
import { ProductsDataContextInterface } from '@/types/products';
import { ProductDetailContext } from '@/context/ProductDetailProvider';
import { useContext } from 'react';
import { ArrowBottomIconComponent, ArrowLeftIconComponent, ArrowRightIconComponent, ArrowTopIconComponent } from '../IconComponent/IconComponent';

export default function ProductDetailGalleryComponent({
    width,
    handleScrollLeft,
    handleScrollUp,
    handleScrollRight,
    handleScrollDown,
    activeImage,
    carouselRef,
    handleImageClick
}: {
    width: number,
    handleScrollLeft: () => void;
    handleScrollUp: () => void;
    handleScrollRight: () => void;
    handleScrollDown: () => void;
    activeImage: ImgDataInterface | undefined;
    carouselRef: React.RefObject<HTMLDivElement>;
    handleImageClick: (index: number) => void;
}) {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles['container-section-product-detail-gallery']}>
            <div className={styles['container-outer-image-product-detail']}>
                {
                    activeImage &&
                    <Image
                        src={activeImage.imgSrc}
                        alt={activeImage.imgAlt}
                        // placeholder='blur'
                        // blurDataURL={activeImage.imgBlur}
                        quality={100}
                        fill
                        sizes='100vw'
                        className={styles['container-inner-image-product-detail']}
                    />
                }
            </div>
            <div className={styles['container-section-carousel']}>
                <div className={styles['carousel']} ref={carouselRef}>
                    {productData &&
                        productData.details.images.map((image: ImgDataInterface) => {
                            return (
                                <div key={image.img_id} className={styles["container-outer-image-carousel"]} onClick={() => handleImageClick(image.img_id)}>
                                    <Image
                                        src={image.imgSrc}
                                        alt={image.imgAlt}
                                        fill
                                        className={styles['container-inner-image-carousel']}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div className={styles['carousel-buttons']}>
                    <button
                        className={styles['carousel-arrow']}
                        onClick={width < 768 ? handleScrollLeft : handleScrollUp}>
                        {
                            width < 768 ?
                                <ArrowLeftIconComponent fill={'white'} height={30} width={30} />
                                : <ArrowTopIconComponent fill={'white'} height={30} width={30} />
                        }
                    </button>
                    <button
                        className={styles['carousel-arrow']}
                        onClick={width < 768 ? handleScrollRight : handleScrollDown}>
                        {
                            width < 768 ?
                                <ArrowRightIconComponent fill={'white'} height={30} width={30} />
                                : <ArrowBottomIconComponent fill={'white'} height={30} width={30} />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}