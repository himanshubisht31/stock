import React from 'react'
import Company from './Company'
import SearchBox from './SearchBox'
import User from './User'

export default function WishList() {
    return (
        <div>
            <SearchBox/>
            <User />
            <Company />
        </div>
    )
}
