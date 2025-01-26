import Link from 'next/link';
import React from 'react'

import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path:"https://github.com/shahriar2880"},
    {icon: <FaLinkedin/>, path:"https://www.linkedin.com/in/srshahriar/"},
    {icon: <FaFacebook/>, path:"https://www.facebook.com/shahriar.reza.35/"},
    // {icon: <FaTwitter/>, path:""},
];


const Social = ({containerStyle, iconStyles}) => {
  return (
    <div className={containerStyle}>
      {
        socials.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles} target='_blank'>{item.icon}</Link>
        })
      }
    </div>
  )
}

export default Social
