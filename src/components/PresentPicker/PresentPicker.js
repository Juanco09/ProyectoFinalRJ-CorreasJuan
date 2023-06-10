import React from 'react'

const PresentPicker = ({setPresent, options}) => {
    
    const handleSelect = (e) => {
        setPresent(e.target.value)
    }
  
    return (
    <select onChange={handleSelect}>
        {
            options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))
        }
    </select>
  )
}

export default PresentPicker