import React from 'react'

const FooterYear = () => {
const currentYear = new Date().getFullYear()

  return (
    <span>{currentYear}</span>
  )
}

export default FooterYear