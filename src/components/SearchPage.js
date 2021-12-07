import React from 'react';
import './SearchPage.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';

const SearchPage = () => {

    const navigate = useNavigate();

    const property = useSelector((state) => state.property);


    const handleClick = (e, id) => {
        e.preventDefault();
        console.log(id);
        navigate(`/details/${id}`);

    }



    return (
        <div className="serach_page">
            {
                property.propertyData &&
                <div>
                    <div>
                        <Header/>
                    </div>
                    <div className="search_container">
                        {
                            property.propertyData.map((item, index) => {
                                return (
                                    <div key={index} className="search_property_card" onClick={(e) => handleClick(e, item._id)}>
                                        <div>
                                            {
                                                item.Images.map((imageData, i) => {
                                                    if (i === 0) {
                                                        return (
                                                            <img key={i} src={imageData.url} alt="img" className="search_card_image" />
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                        <p className="property_card_title">{item.Title}</p>
                                        <p className="property_card_desc">{item.Bedrooms} Bedrooms {item.Building_Type} for {item.Property_Type}</p>
                                        <p className="property_card_price" >{item.Price}  €</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            }


        </div>
    )
}

export default SearchPage
