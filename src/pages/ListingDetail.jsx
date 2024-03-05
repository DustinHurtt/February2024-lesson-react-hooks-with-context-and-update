import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ApartmentContext } from "../context/apartments.context";


const ListingDetail = () => {
  const [apartment, setApartment] = useState(null);

  const { apartments } = useContext(ApartmentContext);

  const { id } = useParams()

    useEffect(() => {
        let thisApartment = apartments.find((apt) => apt._id === id)
        
        console.log("This is the apartment ===>", thisApartment)
        setApartment(thisApartment)
    }, [id])

  return (
    <>
      {apartment && (
        <div className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
            <Link to={`/edit/${apartment._id}`}>Edit Apartment</Link>
        </div>
      )}
    </>
  );
};

export default ListingDetail;
