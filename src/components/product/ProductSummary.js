import React from 'react';
import reviewsData from '../../data/reviewsData';
import useActive from '../../hooks/useActive';
import ProductReviews from './ProductReviews';

const ProgressBar = ({ value }) => (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${value}%` }}></div>
    </div>
  );
  const styles = `
  .progress-bar-container {
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .progress-bar {
    height: 20px;
    border-radius: 4px;
    background-color: #4caf50; /* Green color */
    transform-origin: left;
    animation: progressBarAnimation 2s ease-in-out forwards;
  }

  .sustainability-metrics {
    display: flex;
    flex-wrap: wrap;
  }

  .sustainability-metrics > div {
    flex: 0 0 calc(50% - 16px);
    margin-right: 16px;
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    .sustainability-metrics > div {
      flex: 0 0 calc(33.33% - 16px);
    }
  }

  @keyframes progressBarAnimation {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
const ProductSummary = (props) => {

    const { brand, title, eco, info, category, durability, repairability, resourceefficiency, climateefficiency, recyclability } = props;

    const { active, handleActive, activeClass } = useActive('specs');


    return (
        <>
            <section id="product_summary" className="section">
                <div className="container">

                    {/*===== Product-Summary-Tabs =====*/}
                    <div className="prod_summary_tabs">
                        <ul className="tabs">
                            <li
                                className={`tabs_item ${activeClass('specs')}`}
                                onClick={() => handleActive('specs')}
                            >
                                Eco-Rating
                            </li>
                            <li
                                className={`tabs_item ${activeClass('overview')}`}
                                onClick={() => handleActive('overview')}
                            >
                                Specifications
                            </li>
                            <li
                                className={`tabs_item ${activeClass('reviews')}`}
                                onClick={() => handleActive('reviews')}
                            >
                                Reviews
                            </li>
                        </ul>
                    </div>

                    {/*===== Product-Summary-Details =====*/}
                    <div className="prod_summary_details">
                        {
                            active === 'specs' ? (
                                <div className="prod_overview">
                                    <div className="sustainability-metrics">
    <div>
      <strong>Durability</strong><br></br>
      <ProgressBar value={durability} />
    </div>
    <div>
      <strong>Repairability</strong>
      <ProgressBar value={repairability} />
    </div>
    <div>
      <strong>Resource Efficiency</strong>
      <ProgressBar value={resourceefficiency} />
    </div>
    <div>
      <strong>Climate Efficiency</strong>
      <ProgressBar value={climateefficiency} />
    </div>
    <div>
      <strong>Recyclability</strong>
      <ProgressBar value={recyclability} />
    </div>
              
                </div>
                                    <h3>The <span>{eco}</span> {info} provides with fabulous sound quality</h3>
                                    <ul>
                                        <li>Sound Tuned to Perfection</li>
                                        <li>Comfortable to Wear</li>
                                        <li>Long Hours Playback Time</li>
                                    </ul>
                                    <p>Buy the <b>{title} {info}</b> which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these {category} giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.</p>
                                    
                                
                                </div>
                            ) : active === 'overview' ? (
                                <div className="prod_specs">
                                    <ul>
                                        <li>
                                            <span>Brand</span>
                                            <span>{brand}</span>
                                        </li>
                                        <li>
                                            <span>Model</span>
                                            <span>{title}</span>
                                        </li>
                                        <li>
                                            <span>Generic Name</span>
                                            <span>{category}</span>
                                        </li>
                                
                                    </ul>
                                </div>
                            ) : (
                                <div className="prod_reviews">
                                    <ul>
                                        {
                                            reviewsData.map(item => (
                                                <ProductReviews
                                                    key={item.id}
                                                    {...item}
                                                />
                                            ))
                                        }
                                    </ul>
                                </div>
                            )

                        }

                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductSummary;