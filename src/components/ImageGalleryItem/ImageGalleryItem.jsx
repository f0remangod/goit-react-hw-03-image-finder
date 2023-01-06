import {
  ImageGalleryItemImage,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onClick }) => {
  const { webformatURL, tags } = image;

  return (
    <ImageGalleryItemStyled onClick={() => onClick(image)}>
      <ImageGalleryItemImage src={webformatURL} alt={tags} />
    </ImageGalleryItemStyled>
  );
};
