import './style.css';

const ImageModel = ({ children, onClose }) => {
  return (
    <div className="image-model" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="model-conent">{children}</div>
    </div>
  );
};

export default ImageModel;
