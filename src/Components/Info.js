import React, { useState, useEffect } from "react";
import "./info.css";
// import { Table } from "reactstrap";
//  import { AiFillCaretDown } from "react-icons/ai";
import DropdownBox from "./DropdownBox";

const Info = () => {
  const [arr, setarr] = useState([]);

  // const [showpersonal, setshowpersonal] = useState(false);
  // const [showaddress, setshowaddress] = useState(false);

  const getUsers = async () => {
    let resp = await fetch("https://randomuser.me/api/", {
      method: "Get",
    });
    const UData = await resp.json();
    console.log("show data", UData.results);
    setarr(UData.results);
  };

  useEffect(() => {
    getUsers();
  }, []);
  console.log("array data","arr");

  return (
    <div className="main-div">
      {arr.length > 0 && (
        <>
          <div>
            <img className="div-2" src={arr[0].picture.large} alt="Info" />
          </div>
          <DropdownBox  title = {'Personal Information'} header={["Name","Email","DoB","Phone"]} arr={arr[0]} type="Personal Info"/>
          <DropdownBox  title = {'Address'} header={["Country","City","State","Postcode"]} arr={arr[0]} type="Address"/>
          {/* <div className="L">
            <button
              className="div-3"
              onClick={() => setshowpersonal(!showpersonal)}
            >
              Personal Informtion
              <AiFillCaretDown className="icon1" />
            </button>

            {showpersonal && (
              <div className="pop ">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DoB</th>
                    <th>Phone</th>
                  </tr>
                  <tr>
                    <td>
                      {arr[0].name.title} {arr[0].name.first} {arr[0].name.last}
                    </td>
                    <td>{arr[0].email}</td>
                    <td>{arr[0].dob.age}</td>
                    <td>{arr[0].cell}</td>
                  </tr>
                </table>
              </div>
            )}
          </div> */}

          {/* <div className="p">
            <button className="div-4" onClick={() => setshowaddress(!showaddress)}>Address<AiFillCaretDown className="icon" />
            </button>
          </div> */}
</>
      )}
{/* 
      {showaddress && (
        <div className="top">
          <Table className="b">
            <tr>
              <th>Country</th>
              <th>City</th>
              <th>State</th>
              <th>Postcode</th>
            </tr>
            <tr>
              <td>{arr[0].location.country}</td>
              <td>{arr[0].location.city}</td>
              <td>{arr[0].location.state}</td>
              <td>{arr[0].location.postcode}</td>
            </tr>
          </Table>
        </div> */}

    </div>
  );
};
export default Info;
