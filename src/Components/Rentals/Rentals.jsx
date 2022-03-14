// import { useState } from "react";
import "./Rentals.css";

import data1 from "../../../db.json";
import { useState } from "react";

export const Rentals = () => {
  const list = data1.houses;
  const [data, showData] = useState(list);


  const Id=()=>{
    data.sort(function (a,b) {return b.id-a.id});
    showData(data);
  }
  const rentascending=()=>{
    data.sort(function (a,b) {return a.rent-b.rent});
     showData([...data]);
  }
  const rentdescending=()=>{
    data.sort(function (a,b) {return b.rent-a.rent});
     showData([...data]);
  }
  const aresascending=()=>{
    data.sort(function (a,b) {return a.areaCode-b.areaCode});
    showData([...data]);
  }
  const areadescending=()=>{
    data.sort(function (a,b) {return b.areaCode-a.areaCode});
    showData([...data]);
  }



  // const [house, setHouse] = useState(data.houses);
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={Id}>Sort by ID</button>
        <button className="sortByRentAsc"onClick={rentascending}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={rentdescending}>Rent High to low</button>
        <button className="sortByAreaAsc"  onClick={aresascending}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={areadescending}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data1.houses.map((houses, index) => {
            return (
              <tr key={houses.id} className="houseDetails">
                <td className="houseId">{houses.id}</td>
                <td className="houseName">{houses.name} </td>
                <td className="ownersName">{houses.ownerName}</td>
                <td className="address">{houses.address}</td>
                <td className="areaCode">{houses.areaCode}</td>
                <td className="rent">{houses.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */ houses.preferred_tenants}

                </td>
                <td className="houseImage">
                  <img src={houses.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
