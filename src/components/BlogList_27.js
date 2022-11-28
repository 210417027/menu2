import React from 'react'
import Blog_27 from './Blog_27'
const BlogList_27 = ({items, removeItem}) => {
  // console.log(removeItem)
  // console.log('items',items)
  return (
    <div className="blogs-center">
      <Blog_27 removeItem={removeItem} items={items}/>
    </div>
  )
}

export default BlogList_27