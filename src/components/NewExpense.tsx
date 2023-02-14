import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = ( props :any) => {
    const saveHandler=(expense :any)=>{
      const expenseData={
        ...expense,
        id:Math.random().toString()

      }
      props.onAddExpense(expenseData);


    }
  return (
    <div>
        <ExpenseForm onSaveExpense={saveHandler} />
    </div>
  )
}

export default NewExpense