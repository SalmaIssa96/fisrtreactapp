import StarLine from "../StarLine/StarLine";
import poert1 from '../../assets/poert1.png';
import poert2 from '../../assets/port2.png';
import poert3 from '../../assets/port3.png';
import Card from "./Card";

const Portofolio = () => {
  return (
    <div className="container vh-100 d-flex flex-column align-items-center justify-content-center mt-3">
      <h1 className='fw-bold'> PORTFOLIO COMPONENT</h1>
      <StarLine color="black" />
      <div className="cards-section">
        <div className="row gy-4">
            <Card source={poert1} />
            <Card source={poert2}/>
            <Card source={poert3}/>
            <Card source={poert1} />
            <Card source={poert2}/>
            <Card source={poert3}/>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
