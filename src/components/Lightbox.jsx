/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Lightbox = ({ images, selectedImageIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(selectedImageIndex);
  const isRTL = document.documentElement.dir === "rtl";
  const handleNext = () => {
    if (isRTL) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrev = () => {
    if (isRTL) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          <FaTimes />
        </button>
        <img src={images[currentIndex]} alt="Current view" />
        <button className="prev" onClick={handlePrev}>
          {isRTL ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
        <button className="next" onClick={handleNext}>
          {isRTL ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
