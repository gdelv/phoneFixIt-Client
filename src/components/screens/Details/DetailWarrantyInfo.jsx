import React from 'react'
import { storeInfo } from '../../../data'
import DropDown from '../FAQ/DropDown'

export default function DetailWarrantyInfo() {
    return (
        <div>
            {storeInfo.map(info => {
                return (
                    <>
                        <DropDown
                            question={info.title}
                            answer={info.content}
                        />
                    </>
                )
            })}
        </div>
    )
}
