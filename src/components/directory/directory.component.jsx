import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () =>{ 
  const [DATA, setDATA] = useState()
  useEffect(() => {
    
    fetch(`https://course-api.com/react-store-products`)
    .then(res => res.json())
    .then(users => setDATA(users))
}, [])
  return(
    <div className="directory-menu">
      
        <MenuItem data = {DATA} />
      
    </div>
  )
}  



export default Directory;

