import React from 'react'
import Select from 'react-select'

export default function DetailCarrierDropdown(props) {
    return (
        <Select
            label="Single select"
            options={props.carrierOptions}
            placeholder={"Please select a carrier"}
            onChange={props.onChange}
        />
    )
}
