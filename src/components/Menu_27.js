import React from 'react'

const Menu_27 = ( {items}) => {
  return (
    <div className="section-center">
        { items.map((item) => {
            const {id, title, img, price, desc, chinese} = item;
            return (
                <article key={id} className="menu-item">
          <img
            src={img}
            alt="buttermilk"
            pancakes=""
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>{title}</h4>
              <h4 class="price">${price}</h4>
            </header>
            <p className="item-text">
              {desc}
              <h4>{chinese}</h4>

            </p>
          </div>
        </article>
            )
        }

        )}
      

      </div>
  )
}

export default Menu_27
