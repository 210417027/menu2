const Blog_27 = (props) =>{    
    return(
        props.items.map((item)=>{
        const {id, img, span, title, describe} = item
        // console.log(props.removeItem)
        return(
                <article className="blog" key={id}>
                <img
                  src={img}
                  alt="Coffee photo"
                  className="img blog-img"
                />
                <div className="blog-content">
                  <span>{span}</span>
                  <h3>{title}</h3>
                  <p>{describe}</p>
                  <div className="item-control">
                    <a href="#">read more</a>
                    <div className='btn-container'>
                      <button type='button' className='delete-btn' onClick={() => props.removeItem(id)}> delete </button>
                    </div>
                  </div>
                </div>
              </article>
            )

        })

    )
  }

  export default Blog_27