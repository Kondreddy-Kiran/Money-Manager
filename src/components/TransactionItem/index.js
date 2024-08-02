import './index.css'

const TransactionItem = ({transaction, onDeleteTransaction}) => {
  const {id, title, amount, optionId} = transaction

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="transaction-title">{title}</p>
      <p className="transaction-amount">Rs {amount}</p>
      <p className="transaction-type">{optionId}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
