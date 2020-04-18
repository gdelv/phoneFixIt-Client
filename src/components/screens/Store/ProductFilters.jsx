import React, { Component } from 'react'
import Select from 'react-select'
import DropDown from '../FAQ/DropDown'

export default class ProductFilters extends Component {
    render() {
        return (
            <div className='columns'>
                <div className="column">
                    <DropDown
                        question={filterData[0].filterBy}
                        answer={filterData[0].options}   
                    />
                </div>
                <div className="column">
                    <DropDown
                        question={filterData[1].filterBy}
                        answer={filterData[1].options}
                    />
                </div>
                <div className="column">
                    <Select
                        label="Single select"
                        options={sortData}
                        placeholder={"Sort By:"}
                        onChange={onChange}
                        className='black-text'
                    />
                </div>
            </div>
        )
    }
}

const filterData = [
    {
        filterBy: "Collection",
        options: "All All Phones Apple iPhones"
    },
    {
        filterBy: "Price",
        options: ".99 to 100"
    }
]

const sortData = [
    { value: 'Newest', label: 'Newest' },
    { value: 'PriceLow', label: 'Price (Low to High)' },
    { value: 'PriceHigh', label: 'Price (High to Low)' },
    { value: 'NameAZ', label: "Name (A to Z)" },
    { value: 'NameZA', label: "Name (Z to A)" }
]
const onChange = (optionSelected) => {
    console.log("You selected", optionSelected);
    
}