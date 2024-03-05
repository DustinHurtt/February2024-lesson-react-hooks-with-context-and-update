import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ApartmentContext } from "../context/apartments.context";
import { useNavigate } from "react-router-dom";

const EditListing = () => {
  const [apartment, setApartment] = useState(null);
  const navigate = useNavigate();
  const { apartments, setApartments } = useContext(ApartmentContext);

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setApartments((prev) =>
      prev.map((element) =>
        element._id === apartment._id ? apartment : element
      )
    );
    navigate("/");
  };

  useEffect(() => {
    let thisApartment = apartments.find((apt) => apt._id === id);

    console.log("This is the apartment ===>", thisApartment);
    setApartment(thisApartment);
  }, [id]);

  return (
    <>
      {apartment && (
        <form className="card" onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              value={apartment.title}
              name="title"
              alt="title"
              onChange={(e) =>
                setApartment((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
          <label>
            Image
            <input
              type="text"
              value={apartment.img}
              alt="apartment"
              name="img"
              onChange={(e) =>
                setApartment((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
          <label>
            Price
            <input
              type="number"
              value={apartment.pricePerDay}
              alt="price"
              name="pricePerDay"
              onChange={(e) =>
                setApartment((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>

          <button type="submit">Edit Apartment</button>
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
