import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>{description}</Link>
            <p>{amount / 100} - {createdAt}</p>
        </div>
    );
};

export default ExpenseListItem;