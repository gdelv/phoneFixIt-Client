import React from 'react'
import Select from 'react-select'

export default function DetailConditionDropdown(props) {
    return (
        <Select
            label="Single select"
            options={props.conditionOptions}
            placeholder={"Please select a condition"}
            onChange={props.onChange}
        />
    )
}
