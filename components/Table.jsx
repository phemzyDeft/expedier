import React from 'react'
import style from '../styles/table.module.css'

const Table = () => {
  return (
    <div>
      <div className="table_container">
        <div className=".container">
        <table className="table table-borderless">
          <thead>
            <tr className={`border-0`}>
              <th scope="col" className={style.th}>Transaction Type</th>
              <th scope="col" className={style.th}>Transfer Method</th>
              <th scope="col" className={style.th}>Amount </th>
              <th scope="col" className={style.th}>Date  & Time </th>
            </tr>
          </thead>
          <tbody className={`${style.tr} bg-white`}>
            <tr className={`${style.tablerow}`}>
              <td>Transfer</td>
              <td>Card Transfer</td>
              <td>₦3,041,730</td>
              <td>19 July  4:30 PM</td>
            </tr>
            <tr className={`${style.tablerow}`}>
              <td>Withdrawal</td>
              <td>Wallet Debit</td>
              <td>₦3,041,730</td>
              <td>19 July  4:30 PM</td>
            </tr>
            <tr className={`${style.tablerow}`}>
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