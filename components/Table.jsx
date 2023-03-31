import React from 'react'

const Table = () => {
  return (
    <div>
      <div className="table_container">
        <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Transaction Type</th>
              <th scope="col">Transfer Method</th>
              <th scope="col">Amount </th>
              <th scope="col">Date  & Time </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Transfer</td>
              <td>Card Transfer</td>
              <td>₦3,041,730</td>
              <td>19 July  4:30 PM</td>
            </tr>
            <tr>
              <td>Withdrawal</td>
              <td>Wallet Debit</td>
              <td>₦3,041,730</td>
              <td>19 July  4:30 PM</td>
            </tr>
            <tr>
              <td>Transfer</td>
              <td>Card Transfer</td>
              <td>₦3,041,730</td>
              <td>19 July  4:30 PM</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Table