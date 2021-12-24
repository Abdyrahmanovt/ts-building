import React from 'react';
import './index.css'

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='contact-info'>
                <div className="info">
                    <h3 className='address'>БИШКЕК, УЛ.БАКАЕВА, Д.132</h3>
                    <p className="gmail">www.ihlas.kg <br/> info@ihlas.kg</p>
                    <p className="phone">+996 (556) 55-11-11 +996 (706) 55-11-11 +996 (776) 55-11-11</p>
                    <div className="social">
                        <a href="https://www.instagram.com/ihlaskg/?utm_medium=copy_link" className='social-icon'><i
                            className="fab fa-facebook-square"/></a>
                        <a className='social-icon' href="https://www.instagram.com/ihlaskg/?utm_medium=copy_link"><i
                            className="fab fa-instagram-square"/></a>
                        <a href="https://www.instagram.com/ihlaskg/?utm_medium=copy_link" className='social-icon'><i
                            className="fab fa-odnoklassniki-square"/></a>
                    </div>
                </div>
                <div className="contact-map">
                    <iframe title="map" width="700" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=IHLAS%20Residence,%20%D0%B6%D0%B8%D0%BB%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                </div>
            </div>

        </div>
    );
};

export default Contacts;