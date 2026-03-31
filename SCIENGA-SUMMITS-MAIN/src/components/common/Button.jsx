import React from 'react'

export default function Button({children, onClick, type='button'}){
  return (
    <button type={type} onClick={onClick} style={{background:'var(--primary)',color:'white',border:'none',padding:'0.6rem 1rem',borderRadius:6}}>
      {children}
    </button>
  )
}
import React from 'react'

export default function Button({children, ...props}){
  return (
    <button {...props} style={{background:'var(--brand)',color:'#fff',border:0,padding:'8px 12px',borderRadius:6}}>
      {children}
    </button>
  )
}
