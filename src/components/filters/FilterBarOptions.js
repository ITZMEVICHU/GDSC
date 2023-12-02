import React, { useContext } from 'react';
import filtersContext from '../../contexts/filters/filtersContext';
import { sortMenu } from '../../data/filterBarData';
import { displayMoney } from '../../helpers/utils';


const FilterBarOptions = () => {

    const {
        sortedValue,
        setSortedValue,
        updatedBrandsMenu,
        handleBrandsMenu,
        handlePrice,
        handlePrice1,
        selectedPrice: { price, minPrice, maxPrice },
        mobFilterBar: { isMobSortVisible, isMobFilterVisible },
        handleMobSortVisibility,
        handleMobFilterVisibility,
        handleClearFilters,
    } = useContext(filtersContext);

    const displayPrice = displayMoney(price);


    return (
        <>
            {/*===== Clear-Filters btn =====*/}
            {
                (sortedValue) && (
                    <div className="clear_filter_btn">
                        <button
                            type="button"
                            className="btn"
                            onClick={handleClearFilters}
                        >
                            Clear Filters
                        </button>
                    </div>
                )
            }

            {/*===== Sort-menu =====*/}
            <div className={`sort_options ${isMobSortVisible ? 'show' : ''}`}>
                <div className="sort_head">
                    <h3 className="title">Sort By</h3>
                    <button
                        type="button"
                        className="close_btn"
                        onClick={() => handleMobSortVisibility(false)}
                    >
                        &times;
                    </button>
                </div>

                <div className="separator"></div>

                <ul className="sort_menu">
                    {
                        sortMenu.map(item => {
                            const { id, title } = item;
                            return (
                                <li
                                    key={id}
                                    className={sortedValue === title ? 'active' : ''}
                                    onClick={() => setSortedValue(title)}
                                >
                                    {title}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

            {/*===== Filter-menu =====*/}
            <div className={`filter_options ${isMobFilterVisible ? 'show' : ''}`}>
                <div className="filter_head">
                    <h3 className="title">Filter By</h3>
                    <button
                        type="button"
                        className="close_btn"
                        onClick={() => handleMobFilterVisibility(false)}
                    >
                        &times;
                    </button>
                </div>

                <div className="separator"></div>

                {/* Filter by Brands */}
                <div className="filter_block">
                    <h4>Brands</h4>
                    <ul className="filter_menu">
                        {
                            updatedBrandsMenu.map(item => {
                                const { id, checked, label } = item;
                                return (
                                    <li key={id} className="filter_btn">
                                        <input
                                            type="checkbox"
                                            id={label}
                                            value={label}
                                            checked={checked}
                                            onChange={() => handleBrandsMenu(id)}
                                        />
                                        <label htmlFor={label}>{label}</label>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>

               
                {/* Filter by Price */}
                <div className="filter_block">
                    <h4>Price</h4>
                    <div className="price_filter">
                        <p>{displayPrice}</p>
                        <input
                            type="range"
                            min={minPrice}
                            max={maxPrice}
                            value={price}
                            onChange={handlePrice}
                        />
                    </div>
                </div>
                {/* Filter by Price */}
                <div className="filter_block">
                    <h4>Eco-Rating</h4>
                    <div className="price_filter">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={price}
                            onChange={handlePrice1}
                        />
                    </div>
                </div>

            </div>
        </>
    );
};

export default FilterBarOptions;