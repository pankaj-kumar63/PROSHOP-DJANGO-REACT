import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Rating = ({ value }) => {
    // console.log(value)
    return (
        <div className='rating'>
            <span>
                <i style={{ color: '#f8e825' }} className={
                    value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i style={{ color: '#f8e825' }} className={
                    value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i style={{ color: '#f8e825' }} className={
                    value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i style={{ color: '#f8e825' }} className={
                    value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i style={{ color: '#f8e825' }} className={
                    value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                }>
                </i>
            </span>
        </div>
    );
};

export default Rating;
