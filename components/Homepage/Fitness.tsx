import React from 'react';

interface FitnessProps {
    products: Array<any>;
}

const Fitness: React.FC<FitnessProps> = ({ products }) => {
    console.log(products);
    return (
        <h2>fitness</h2>
    );
}

export default Fitness;
