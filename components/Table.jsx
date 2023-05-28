import React from 'react'
import style from '../styles/table.module.css'

const Table = () => {
  return (
    <div className='.px-0 .mx-0'>
      <div className=".table_container">
        <div className="table-responsive .container">
          <table className="table table-borderless">
            <thead>
              <tr className={`border-0 table-responsive`}>
                <th scope="col" className={style.th}>Transaction&nbsp;Type</th>
                <th scope="col" className={style.th}>Transfer&nbsp;Method</th>
                <th scope="col" className={style.th}>Amount</th>
                <th scope="col" className={style.th}>Date&nbsp;&&nbsp;Time </th>
              </tr>
            </thead>
            <tbody className={`${style.tr} bg-white`}>
              <tr className={`${style.tablerow}`}>
                <td>Transfer</td>
                <td>Card Transfer</td>
                <td>₦3,041,730</td>
                <td>19 July 4:30PM</td>
              </tr>
              <tr className={`${style.tablerow}`}>
                <td>Withdrawal</td>
                <td>Wallet Debit</td>
                <td>₦3,041,730</td>
                <td>19 July 4:30 PM</td>
              </tr>
              <tr className={`${style.tablerow}`}>
                <td>Transfer</td>
                <td>Card Transfer</td>
                <td>₦3,041,730</td>
                <td>19 July 4:30 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table