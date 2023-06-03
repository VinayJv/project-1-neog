import { useDataContext } from "../context/dataContext";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

export function Profile() {
  const { dispatch, state: { foundUser } } = useDataContext();
  const [addresses, setAddresses] = useState(foundUser.address);
  const [loader, setLoader] = useState(true);
  const [profileData, setProfileData] = useState(true);
  const [toggleAddressForm,setToggleAddressForm] = useState(false);
  let newAddress = {firstName:"",zipcode:"",city:"",state:""};


  const inputChangeHandler = (event) => {
    const type = event.target.id;
    if(type === "name"){
      newAddress.firstName = event.target.value;
    }
    else if(type==="zipcode"){
      newAddress.zipcode = event.target.value;
    }
    else if(type==="city"){
      newAddress.city = event.target.value;
    }
    else {
      newAddress.state = event.target.value;
    }
  };

  const updateNewAddress = (event) => {
    event.preventDefault();
    setAddresses([...addresses,newAddress]);
    setToggleAddressForm(false);
    event.target.reset();
  }
  const deleteAddress = (event) => {
    setAddresses(()=>addresses.filter((address,index)=> index !== Number(event.target.value)));
  };

  const profileContent = <div className="profile-information">
    <p>Name: {foundUser.firstName} {foundUser.lastName}</p>
    <p>Email: {foundUser.email}</p>
    <button className="logout-btn" onClick={() => dispatch({ type: "Logout" })}>Logout</button>
  </div>;

  const addressesContent = <div className="address-information">
    <div className="add-address-container">
      <button className="logout-btn" onClick={()=>{setToggleAddressForm(!toggleAddressForm)}}>{toggleAddressForm ? "Close" : "Add New Address +"}</button>
      <form style={{display: toggleAddressForm ? "flex" : "none"}} className="address-form-container" onSubmit={updateNewAddress} action="">
        <input required type="text" className="address-form-input" onChange={inputChangeHandler} id="name" placeholder="Name"></input>
        <input required type="number" className="address-form-input" onChange={inputChangeHandler} id="zipcode" placeholder="Zipcode"></input>
        <input required type="text" className="address-form-input" onChange={inputChangeHandler} id="city" placeholder="City"></input>
        <input required type="text" className="address-form-input" onChange={inputChangeHandler} id="state" placeholder="State"></input> <br />
        <button type="submit" className="logout-btn">Save</button>
      </form>
    </div>
    {addresses.map((address,index) => <div key={index}>
      <h1>{address.firstName}</h1>
      <p>Zipcode: {address.zipcode}</p>
      <p>City: {address.city}</p>
      <p>State: {address.state}</p>
      <div>
        <button className="logout-btn" value={index}>Edit</button>
        <button className="logout-btn" value={index} onClick={deleteAddress}>Delete</button>
      </div>
    </div>)
    }
  </div>

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500)
  }, []);

  return (loader ? <div className="loader-container"><Triangle
    height="80"
    width="80"
    color="#EB4F47"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClassName="loader"
    visible={true}
  /></div> : <div className="profile-container">
    <div className="inner-profile-container">
      <div className="profile-header">
        <div style={{ backgroundColor: profileData ? "#EB4F47" : "", color: profileData ? "white" : "", cursor:"pointer" }} className="profile-info" onClick={() => setProfileData(true)}>Profile</div>
        <div style={{ backgroundColor: profileData ? "" : "#EB4F47", color: profileData ? "" : "white", cursor:"pointer" }} className="addresses-info" onClick={() => setProfileData(false)}>Addresses</div>
      </div>
      <div>{profileData ? profileContent : addressesContent}</div>
    </div>
    {/* <div className="profile-details-container">
    <h1 style={{ textAlign: "center" }}>User Profile</h1>
        <p style={{ margin: "0.5rem" }}><span style={{ fontWeight: "bolder" }}>Name: </span>{foundUser.firstName} {foundUser.lastName}</p>
        <p style={{ margin: "0.5rem" }}><span style={{ fontWeight: "bolder" }}>Email: </span>{foundUser.email}</p>
        <p style={{ margin: "0.5rem" }}><span style={{ fontWeight: "bolder" }}>Address: </span>{foundUser.address[0].city},{ foundUser.address[0].state}</p>
        <button className="logout-btn" onClick={() => dispatch({ type: "Logout" })}>Logout</button>
    </div> */}
  </div>);
}