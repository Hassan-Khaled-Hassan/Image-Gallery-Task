import { useState } from "react";
import ImageItem from "./ImageItem";
import Lightbox from "./Lightbox";

const images = [
  "https://picsum.photos/401",
  "https://picsum.photos/402",
  "https://picsum.photos/403",
  "https://picsum.photos/404",
  "https://picsum.photos/405",
  "https://picsum.photos/406",
  "https://picsum.photos/407",
  "https://picsum.photos/408",
  "https://picsum.photos/409",
  "https://picsum.photos/410",
  "https://picsum.photos/411",
  "https://picsum.photos/412",
  "https://picsum.photos/413",
  "https://picsum.photos/414",
  "https://picsum.photos/415",
  "https://picsum.photos/416",
  "https://picsum.photos/417",
  "https://picsum.photos/418",
  "https://picsum.photos/419",
  "https://picsum.photos/420",
  "https://picsum.photos/421",
  "https://picsum.photos/422",
  "https://picsum.photos/423",
  "https://picsum.photos/424",
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((src, index) => (
          <ImageItem
            key={index}
            src={src}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <Lightbox
          images={images}
          selectedImageIndex={selectedImageIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Gallery;
