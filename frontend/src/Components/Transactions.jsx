import React, { useEffect } from 'react'
import { useState } from 'react';
import './styles/transactions.css';

const Transactions = () => {
  const [] = useState('');
  const [data, setData] = useState([]);
  const updateTrnsc = (id) => {
    
  }
  const deleteTrnsc = (id) => {
    
  }
  useEffect(() => {
    const arr = {
      "count": 1,
      "entries": [
        {
          "_id": "644cda32be918cd71f54fce7",
          "category": "worldbank",
          "amount": 2,
          "transaction_type": "cr",
          "remarks": "a",
          "createdBy": "644186a25e13e632baccd452",
          "createdAt": "2023-04-29T08:49:54.837Z",
          "updatedAt": "2023-04-29T08:49:54.837Z",
          "__v": 0
        }
      ]
    }
    setData(arr.entries);
  }, [])

  return (
    <div className='card'>
      <h4>Transactions</h4>
      <button className='btn btn-green'>ADD TRANSACTION</button>
      <button className='btn btn-blue'>IMPORT TRANSACTION</button>
      <table className='trnsc-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Flow</th>
            <th>Description</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              const { category, amount, transaction_type, remarks, createdAt, _id: id } = item;
              return (
                <tr key={id}>
                  <td>{createdAt}</td>
                  <td>{transaction_type}</td>
                  <td>{remarks}</td>
                  <td>{amount}</td>
                  <td>
                    <span onClick={() => updateTrnsc(id)}>update </span>
                    <span onClick={() => deleteTrnsc(id)}>delete</span>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
