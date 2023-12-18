import React from 'react';
import Fitness from './Fitness';
import MedicalEssentials from './MedicalEssentials';
import Topdeal from './Topdeal';

interface HomeCardsProps {
    products: any;
}

const HomeCards: React.FC<HomeCardsProps> = ({ products }) => {
    return (
        <div className="mx-16">
            <Fitness products={products} />
            <MedicalEssentials products={products} />
            <Topdeal products={products}/>
        </div>
    );
}

export default HomeCards;
