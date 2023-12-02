import React, { useContext } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import FilterBar from '../components/filters/FilterBar';
import ProductCard from '../components/product/ProductCard';
import filtersContext from '../contexts/filters/filtersContext';
import EmptyView from '../components/common/EmptyView';


const AllProducts = () => {

    const { allProducts } = useContext(filtersContext);


    return (
        <>
            <section id="all_products" className="section">
                <FilterBar />

                <div className="container">
                    {
                        allProducts.length ? (
                            <div className="wrapper products_wrapper">
                                {
                                    allProducts.map(item => (
                                        <ProductCard
                                            key={item.id}
                                            {...item}
                                        />
                                    ))
                                }
                            </div>
                        ) : (
                            <EmptyView
                                icon={<BsExclamationCircle />}
                                msg="No Results Found"
                            />
                        )
                    }
                </div>
            </section>

        </>
    );
};

export default AllProducts;