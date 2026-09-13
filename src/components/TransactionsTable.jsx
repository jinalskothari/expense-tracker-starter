function TransactionsTable({ transactions, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(t => (
          <tr key={t.id}>
            <td>{t.date}</td>
            <td>{t.description}</td>
            <td>{t.category}</td>
            <td className={t.type === "income" ? "income-amount" : "expense-amount"}>
              {t.type === "income" ? "+" : "-"}${t.amount}
            </td>
            <td>
              <button className="delete-btn" onClick={() => onDelete(t.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsTable
