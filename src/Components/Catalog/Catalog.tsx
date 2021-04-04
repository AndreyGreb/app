import React from 'react'
import PageWrapper from '../Common/PageWrapper/PageWrapper'

import style from './Catalog.module.scss'


const Catalog = () => {

    return(
        
        <PageWrapper colorHeader="black">
            <nav className={style.catalog__navbar}>
                <div className={style["catalog__navbar-categories"]}>
                <span>CATEGORIES</span>
                <ul>
                    <li>TOPS</li>
                    <li>NEW ARRIVALS</li>
                    <li>COLLECTIONS</li>
                    <li>TEES AND TANKS</li>
                    <li>SHIRTS</li>
                    <li>DRESSES</li>
                    <li>JACKETS</li>
                    <li>KNITWEAR</li>
                    <li>JUMPSUITS</li>
                    <li>BOTTOMS</li>
                    <li>INTIMATES</li>
                    <li>SHORTS</li>
                    <li>JEANS</li>
                    <li>SKIRTS</li>
                    <li>SALE</li>
                    <li>SHOP ALL</li>
                </ul>
                </div>

            </nav>
        </PageWrapper>
    )
}

export default Catalog