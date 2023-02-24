import React from 'react'


export default function Input({ className, type, placeholder, borderRadius }) {
    return <input className={className} style={{ borderRadius: borderRadius }} type={type} placeholder={placeholder} />
}
