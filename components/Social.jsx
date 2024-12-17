import Link from 'next/link';
import React from 'react'

import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path:""},
    {icon: <FaLinkedin/>, path:""},
    {icon: <FaFacebook/>, path:""},
    {icon: <FaTwitter/>, path:""},
];


const Social = ({containerStyle, iconStyles}) => {
  return (
    <div className={containerStyle}>
      {
        socials.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles} >{item.icon}</Link>
        })
      }
    </div>
  )
}

export default Social
