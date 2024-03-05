import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ApartmentContext } from "../context/apartments.context";

const EditListing = () => {
  const [apartment, setApartment] = useState(null);

  const { apartments } = useContext(ApartmentContext);

  const { id } = useParams();

  useEffect(() => {
    let thisApartment = apartments.find((apt) => apt._id === id);

    console.log("This is the apartment ===>", thisApartment);
    setApartment(thisApartment);
  }, [id]);

  return (
    <>
      {apartment && (
        <form className="card">
          <label>
            Title
            <input type="text" value={apartment.title} alt="title" />
          </label>
          <label>
            Image
            <input type="text" value={apartment.img} alt="apartment" />
          </label>
          <label>
            Price
            <input type="number" value={apartment.pricePerDay} alt="apartment" />
          </label>

          <button>Edit Apartment</button>
        </form>
      )}
    </>
  );
};

export default EditListing;

{
  /* img

pricePerDay

195
title */
}
