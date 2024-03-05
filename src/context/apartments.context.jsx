import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApartmentContext = createContext();

const ApartmentProvider = ({ children }) => {
  const [fetching, setFetching] = useState(true);
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios
      .get("https://ironbnb-m3.herokuapp.com/apartments")
      .then((response) => {
        console.log("Apartments data ===>", response.data);
        setApartments(response.data);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
        setFetching(false);
      });
  }, []);

  return (
    <ApartmentContext.Provider value={{ apartments, fetching, setApartments }}>
      {children}
    </ApartmentContext.Provider>
  );
};

export { ApartmentContext, ApartmentProvider };
