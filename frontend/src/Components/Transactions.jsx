import React from 'react'
import { useState } from 'react'; 

const Transactions = () => {
  const [] = useState('');
  const [data,setData] = useState([]);
  return (
    <div>
      <h3>Transactions</h3>
      <button>ADD TRNASACTION</button>
      <button>IMPORT TRANSACTION</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>False</th>
            <th>Description</th>
            <th>Value</th>
            <th>Actions</th>

          </tr>
        </thead>
      {
        data.map((item) => {
          const {} = item;
          return(
            <div>
              
            </div>
          );
        })
      }
      </table>
    </div>
  )
}

export default Transactions
