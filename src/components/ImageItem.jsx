/* eslint-disable react/prop-types */

const ImageItem = ({ src, onClick }) => (
  <div className="image-item" onClick={onClick}>
    <img src={src} alt="Gallery Item" loading="lazy" />
  </div>
);

export default ImageItem;
