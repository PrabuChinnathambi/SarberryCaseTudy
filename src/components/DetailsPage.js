import React, { useEffect } from 'react';
import './DetailsPage.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SRLWrapper } from "simple-react-lightbox";
import { withScriptjs, withGoogleMap, GoogleMap, } from 'react-google-maps';
import hearIcon from '../assets/icons/heart.png';
import shareIcon from '../assets/icons/share.png';
import contactUsIcon from '../assets/icons/home.png';
import Header from './Header';
import Footer from './Footer';



const Map = () => {

    const property = useSelector((state) => state.property);

    console.log(property)

    var latitude = property.propertyData.Latitude;
    var longitude = property.propertyData.Longitude;

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: latitude , lng: longitude }}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const DetailsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })


    let { id } = useParams();


    const property = useSelector((state) => state.property);

    const fileterdData = property.propertyData.filter(x => x._id === id);


    const detailsData = fileterdData[0];


    const brochurelink = detailsData?.Brochure.map((item, i) => {
        return JSON.stringify(item?.url);
    })

    const floorplanlink = detailsData?.Floor_Plans.map((item, i) => {
        return JSON.stringify(item?.url);
    })



    return (
        <div className="details_page" >
            <div>
                <Header/>
            </div>

            <div className="details_container">
                <div className="image_container">
                    <div className="image_card">
                        {
                            detailsData?.Images.map((item, i) => {

                                return (
                                    <div key={i}>
                                        <div >
                                            <SRLWrapper>
                                                <img src={item.url} alt="properryImage" />
                                            </SRLWrapper>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className="details_card">
                    <div className="icon_hanlders">
                        <img src={shareIcon} alt="shareIcon" />
                        <img src={hearIcon} alt="heartIcon" />
                    </div>
                    <hr></hr>
                    <div>
                        <div className="detail_pg_price">
                            <p><strong className="price">€ {detailsData?.Price}</strong></p>
                            <p> {detailsData?.Bedrooms} bed</p>
                            <div className="vl"></div>
                            <p>{detailsData?.Floor_Area}sqm</p>
                        </div>
                        <p> {detailsData?.Bedrooms} bedroom {detailsData?.Building_Type} for {detailsData?.Property_Type} in the {detailsData?.Title} </p>

                        <a href="/" className="contact_link" > <img src={contactUsIcon} alt="contact_usIcon" /> please contact us</a>
                        <button className="contact_us_btn" >Contact Agent</button>
                        <div className="details_features">

                            <h4>FACTS AND FEATURES</h4>
                            <hr></hr>
                            <div className="features">
                                <div>
                                    <label>Neighbourhood:</label>
                                    <p>{detailsData?.Title}</p>
                                </div>
                                <div>
                                    <label>Price per sqm:</label>
                                    <p>€ {detailsData?.Price_Per_Sqm}</p>
                                </div>
                                <div>
                                    <label>Brochure:</label>
                                    <a href={brochurelink} download>Dwonload Brochure</a>
                                </div>

                                <div>
                                    <label>Floor plan:</label>
                                    <a href={floorplanlink} download >View Floor plan</a>
                                </div>
                            </div>

                            <div className="description" dangerouslySetInnerHTML={{ __html: detailsData?.Description }}  >
                            </div>

                            <div className="negotiator_card">
                                <div>
                                    <img src={detailsData?.Negotiator?.Image?.url} alt="negotiatorImg" />
                                </div>
                                <div>
                                    <p>{detailsData?.Negotiator?.Name}</p>
                                    <p>{detailsData?.Negotiator?.Designation}</p>
                                    <div className="broker_contact_dt" >
                                        <p>{detailsData?.Negotiator?.Phone}</p>
                                        <div className="vl"></div>
                                        <a target="_blank" rel="noreferrer" href={`mailto: ${detailsData?.Negotiator?.Email}`}>Email</a>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: "40vh" }} >
                                <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDbR6pZsUrP2uLmVMPbrKCETKO0bswJyZo`}
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `100%` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}

export default DetailsPage
