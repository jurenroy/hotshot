import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import ProfileIcon from '../../Components/Icons/ProfileIcon.png';
import './Profile.css';
import { setName, setAddress, setPhoneNumber } from '../../Components/Redux/Profile/ProfileSlice';

function Profile() {
  const [isEditable, setIsEditable] = useState(false);
  const { name, address, phoneNumber } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
  };

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleAddressChange = (e) => {
    dispatch(setAddress(e.target.value));
  };

  const handlePhoneNumberChange = (e) => {
    dispatch(setPhoneNumber(e.target.value));
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <h1 style={{ fontSize: 40 }}>Profile</h1>
        <img src={ProfileIcon} alt="Menu" style={{ width: 180, height: 180, marginLeft: 10, marginTop: -30}} />
        <div className='form'>
          <div className='form-field' style={{marginTop: 10, marginBottom:-10}}>
            <label htmlFor='name' className='label'>Name:</label>
            <div className='input-box'>
              {isEditable ?
                <input type='text' id='name' value={name} onChange={handleNameChange} className='input editable-input' />
                :
                <p className='input'>{name}</p>
              }
            </div>
          </div>
          <div className='form-field' style={{marginBottom:-10}}>
            <label htmlFor='address' className='label'>Address:</label>
            <div className='input-box'>
              {isEditable ?
                <input type='text' id='address' value={address} onChange={handleAddressChange} className='input editable-input' />
                :
                <p className='input'>{address}</p>
              }
            </div>
          </div>
          <div className='form-field' >
            <label htmlFor='phoneNumber' className='label'>Phone Number:</label>
            <div className='input-box'>
              {isEditable ?
                <input type='text' id='phoneNumber' value={phoneNumber} onChange={handlePhoneNumberChange} className='input editable-input' />
                :
                <p className='input'>{phoneNumber}</p>
              }
            </div>
          </div>
          <div className='form-buttons' style={{marginTop:-30}}>
  {isEditable ?
    <button onClick={handleSaveClick}>Save</button>
    :
    <button onClick={handleEditClick}>Edit</button>
  }
  
</div>


        </div>
      </div>
    </div>
  );
}

export default Profile;
