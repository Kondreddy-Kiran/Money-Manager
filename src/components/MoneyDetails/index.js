import './index.css'

const MoneyDetails = ({totalBalance, totalIncome, totalExpenses}) => {
  return (
    <div className="money-details-container">
      <div className="money-detail-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="money-detail-title">Your Balance</p>
          <p className="money-detail-amount" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="money-detail-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="money-detail-title">Your Income</p>
          <p className="money-detail-amount" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="money-detail-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="money-detail-title">Your Expenses</p>
          <p className="money-detail-amount" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
