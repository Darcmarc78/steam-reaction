import * as React from 'react'

const Searchbar = () => {
    return (
        <input 
            type='text'
            placeholder='Enter Steam username or game name'
            formAction='POST' 
        />
    )
}

export default Searchbar