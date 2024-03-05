// src/components/IronbnbList.jsx

import { Link } from "react-router-dom";

// import { useState, useEffect } from "react";
// import axios from "axios";

// const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

import { useContext } from "react";
import { ApartmentContext } from "../context/apartments.context";

function IronbnbList() {
  // const [fetching, setFetching] = useState(true);
  // const [apartments, setApartments] = useState([]);

  const { fetching, apartments} = useContext(ApartmentContext)


  // useEffect(() => {
  //   console.log("useEffect - Initial render (Mounting)");
  //   axios.get(apiURL)
  //       .then((response) => {
  //           console.log("Apartments data ===>", response.data)
  //           setApartments(response.data);
  //           setFetching(false);
  //       })
  //       .catch((err) => {
  //           console.log(err)
  //           setFetching(false);
  //       })
  // }, []);

  return (
    <div>
      <h3>List of apartments</h3>
      {fetching && <p>Loading ...</p>}

      {apartments.map((apt) => {
        return (
          <Link to={`/${apt._id}`} key={apt._id} className="card">
            <img src={apt.img} alt="apartment" />
            <h3>{apt.title}</h3>
            <p>Price: {apt.pricePerDay}</p>
          </Link>
        )
      })}
    </div>
  );
}

export default IronbnbList;
