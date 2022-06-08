import React from 'react';
import '../index.scss';

const Account = function (props) {
    const userPhotoUrl = props.user.photo;

    return <img className='account' src={userPhotoUrl} alt='user photo' onClick={props.onAccountClick}></img>;
};
export default Account;
