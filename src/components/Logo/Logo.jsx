import React from 'react'
import './logo.css'

import logoXs from '../../images/logoXs.png'
import logoXl from '../../images/logoXl.png'

export default function Logo() {
  return (
    <div className="logo">
      <picture>
        <source media="(min-width: 1920px)" srcSet={logoXl} />
        <source media="(min-width: 1200px)" srcSet={logoXl} />
        <img src={logoXs} alt="logo" />
      </picture>
    </div>
  )
}
