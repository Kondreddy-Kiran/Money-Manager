import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {optionId: 'INCOME', displayText: 'Income'},
  {optionId: 'EXPENSES', displayText: 'Expenses'},
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
  }

  updateMoneyDetails = transactionsList => {
    let totalIncome = 0
    let totalExpenses = 0
    transactionsList.forEach(transaction => {
      if (transaction.optionId === 'INCOME') {
        totalIncome += transaction.amount
      } else {
        totalExpenses += transaction.amount
      }
    })
    const totalBalance = totalIncome - totalExpenses
    this.setState({totalBalance, totalIncome, totalExpenses})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    if (titleInput && amountInput) {
      const newTransaction = {
        id: uuidv4(),
        title: titleInput,
        amount: parseFloat(amountInput),
        optionId,
      }
      this.setState(
        prevState => ({
          transactionsList: [...prevState.transactionsList, newTransaction],
          titleInput: '',
          amountInput: '',
          optionId: transactionTypeOptions[0].optionId,
        }),
        () => this.updateMoneyDetails(this.state.transactionsList),
      )
    }
  }

  onDeleteTransaction = id => {
    this.setState(
      prevState => {
        const updatedTransactionsList = prevState.transactionsList.filter(
          transaction => transaction.id !== id,
        )
        return {transactionsList: updatedTransactionsList}
      },
      () => this.updateMoneyDetails(this.state.transactionsList),
    )
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {
      transactionsList,
      titleInput,
      amountInput,
      optionId,
      totalBalance,
      totalIncome,
      totalExpenses,
    } = this.state
    return (
      <div className="money-manager-container">
        <div className="money-manager-content">
          <div className="Richard-container">
            <h1 className="Richard-heading">Hi, Richard</h1>
            <p className="welcome-des">
              Welcome back to your{' '}
              <span className="MoneyManager">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            totalBalance={totalBalance}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />
          <div className="form-and-transactions-container">
            <form className="transaction-form" onSubmit={this.onAddTransaction}>
              <h2 className="transaction-title">Add Transaction</h2>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                type="text"
                value={titleInput}
                onChange={this.onChangeTitleInput}
                placeholder="Title"
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                id="amount"
                type="text"
                value={amountInput}
                onChange={this.onChangeAmountInput}
                placeholder="Amount"
              />
              <label htmlFor="type">TYPE</label>
              <select
                id="type"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history">History</h1>
              <div className="transactions-titles">
                <p className="transaction-des">Title</p>
                <p className="transaction-des">Amount</p>
                <p className="transaction-des">Type</p>
              </div>
              <ul className="transactions-list">
                {transactionsList.map(transaction => (
                  <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
