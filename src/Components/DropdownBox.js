import React, { useEffect, useState} from "react";
import "./info.css";
import { AiFillCaretDown } from "react-icons/ai";
// import { Table } from "reactstrap";
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

    const DropdownBox = ({title,header,arr, type}) => {
    const [toggleDropdownList, toggle] = useState(false);
    const [dataArr, setArr] = useState({});
    // const [arr, setarr]= useState([])
    // const [dropdownlist,setdropdownList]=useState(false)
    // const toggle = () => toggle(!dropdownlist);
   useEffect(() => {
     if(type === 'Personal Info'){
       setArr({name: arr.name.first, email: arr.email, dob: arr.dob.age,phone: arr.phone})
     } else {
      setArr({country: arr.location.country, city: arr.location.city, state: arr.location.state, postcode: arr.location.postcode})
     }
   },[type])

  return (
 <>
 
          <div className="Long">
            <button
              className="div-3"
              onClick={() => toggle(!toggleDropdownList)}
            >
            {title}
              <AiFillCaretDown className="icon1" />
            </button>

            {toggleDropdownList && (
              <div className="pop ">
                <table>
                  <tr>
                      {header.map(item => (<th key={item}>{item}</th>))}
                  </tr>
                  <tr>
                  {Object.keys(dataArr).length > 0 && (
                    Object.keys(dataArr).map(item => (
                      <td>{dataArr[item]}</td>

                    ))
                  )}
                  </tr>

                </table>
              </div>
            )}
          </div>
</>
  );
  
};
export default DropdownBox;
