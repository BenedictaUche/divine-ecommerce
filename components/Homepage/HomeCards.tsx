import React from 'react';
import Fitness from './Fitness';
import MedicalEssentials from './MedicalEssentials';
import Topdeal from './Topdeal';
import PersonalCare from './PersonalCare';
import Breaker from './Breaker';
import Groceries from './Groceries';


interface HomeCardsProps {
    products : any;
}

const HomeCards: React.FC<HomeCardsProps> = ({ products }) => {
    return (
        <div >
            <Fitness products={products} />
            <MedicalEssentials products={products} />
            <Topdeal products={products}/>
            <PersonalCare products={products} />
            <Breaker />
            <Groceries products={products} />
        </div>
    );
}

export default HomeCards;
