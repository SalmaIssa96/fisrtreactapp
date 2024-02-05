import { useState } from 'react';
import ImageModel from '../ImageModel/ImageModel';
import './style.css';

const Card = ({ source }) => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <div className="img-card col-md-4">
      <div class="card" onClick={() => setOpenModel(true)}>
        <img className="w-100 rounded-2" src={source} alt="" />
        <div className="overlay">
          <p className="display-1 text-white">+</p>
        </div>
      </div>
      {openModel && (
        <ImageModel onClose={() => setOpenModel(false)}>
          <img className="modal-image" src={source} alt="modelimage" />
        </ImageModel>
      )}
    </div>
  );
};

export default Card;
