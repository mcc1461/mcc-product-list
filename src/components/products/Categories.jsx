import React from 'react';
import {categories} from '../helpers/data';
import "./Categories.scss"; 


const Categories = () => {
  return (
    <div>
      <ul className='categories'>
        {categories.map((category) => {
          return <li key={category}>{category.toUpperCase()}</li>
        })}
      </ul>
    </div>
  )
}

export default Categories;