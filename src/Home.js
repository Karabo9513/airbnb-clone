import React from 'react';
import Banner from './components/Banner/Banner'; 
import Card from './components/Card/Card';

import SearchPage from './components/SearchPage/SearchPage'


const Home = () => {
    return (
        <div className="home">
            <Banner />
            <div className="home-section">
                <Card
                    src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/163397961.jpg?k=72e15fc3573598d8d9da4da1753dab4e644ef07eb71a2b63fa7d1150f6047b32&o=&hp=1'
                    title='Apartment in Sandton'
                    description='Home Tsurumibashi room301'
                    price='$110/night'
                />
                <Card
                    src='https://www.home-designing.com/wp-content/uploads/2014/11/japanese-apartment-design.jpeg'
                    title='Apartment in Osaka'
                    description='Home Tsurumibashi room301'
                    price='$120/night'
                />
                <Card
                    src='https://www.home-designing.com/wp-content/uploads/2014/11/japanese-apartment-design.jpeg'
                    title='Apartment in Midrand'
                    description='Home Tsurumibashi room301'
                    price='$240/night'
                />
                <Card
                    src='https://www.home-designing.com/wp-content/uploads/2014/11/japanese-apartment-design.jpeg'
                    title='Apartment in Cape Town'
                    description='Home Tsurumibashi room301'
                    price='$130/night'
                />
            </div>
            <div className="home-section">
                <Card
                    src='https://www.home-designing.com/wp-content/uploads/2014/11/japanese-apartment-design.jpeg'
                    title='Apartment in Osaka'
                    description='Home Tsurumibashi room301'
                    price='$100/night'
                />
                <Card
                    src='https://www.home-designing.com/wp-content/uploads/2014/11/japanese-apartment-design.jpeg'
                    title='Apartment in Durban'
                    description='Home Tsurumibashi room301'
                    price='$150/night'
                />
                <Card
                    src='https://www.home-designing.com/wp-content/uploads/2014/11/japanese-apartment-design.jpeg'
                    title='Apartment in Pretoria'
                    description='Home Tsurumibashi room301'
                    price='$1000/night'
                />
                <Card
                    src='https://www.home-designing.com/wp-content/uploads/2014/11/japanese-apartment-design.jpeg'
                    title='Apartment in durban'
                    description='Home Tsurumibashi room301'
                    price='$1100/night'
                />
                
            </div>
            <SearchPage/>
        
        
       
        </div>
    );
};

export default Home;
