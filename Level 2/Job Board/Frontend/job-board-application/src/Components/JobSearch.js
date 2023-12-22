import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const JobSearch = () => {
    const locations = [
        'Mumbai', 'Delhi', 'Noida','Banglore','Chennai','Hyderabad','Kolkata'
    ];

    const catgeory = [
        'Full Stack Web Developer', 'Backend Developer','Frontend Developer','Python developer','Java developer'
    ];

    const _onSelectLocation = (selectedLocation) => {
        console.log(`Option selected: ${selectedLocation.label}`);
        // Add your logic here
      };
    const _onSelectCategory = (selectedCategory) => {
        console.log(`Option selected: ${selectedCategory.label}`);
        // Add your logic here
      };

    return (
    <div id='jobSearch'>
        <div id='jobSearchInput'>
            <input id='searchKeyword' placeholder='Search Keyword' />
            <Dropdown className='location' options={locations} onChange={_onSelectLocation} placeholder="Location" />
            <Dropdown className='category' options={catgeory} onChange={_onSelectCategory} placeholder="Category" />
            <button id='findJobBtn'>Find Job</button>
        </div>
    </div>
  )
}

export default JobSearch