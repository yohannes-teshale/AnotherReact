import React, { useState } from 'react'
import Buttons from './Buttons'
import ExpenseItem from './ExpenseItem'

const ExpenseForm = (props :any) => {
    // const[enterdTitle, setTitle]=useState('');
    // const[enterdDate, setDate]=useState(''); 
    // const[enterdAmount, setAmount]=useState('');
    const [userInput, setUserInput]= useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''

    })

   const titleChangeHandler=(event :any)=>{
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // });
        setUserInput((prevState)=>{
            return { ...prevState, enteredTitle:event.target.value}
        })
        
   }
   const amountChangeHandler=(event :any)=>{
    setUserInput({
        ...userInput,
        enteredAmount:event.target.value
    });
}
const dateChangeHandler=(event :any)=>{
    setUserInput({
        ...userInput,
        enteredDate:event.target.value
    });
}
const submitHandler=(event :any)=>{
    event.preventDefault();
    const expenseData={
        title: userInput.enteredTitle,
        amount:userInput.enteredAmount,
        date:new Date(userInput.enteredDate)
    };
     props.onSaveExpense(expenseData);
     setUserInput(
        {   
            enteredTitle:'',
            enteredDate:'',
            enteredAmount:''
        }

     )



}
  return (
   <form onSubmit={submitHandler}>
        <div className=' flex flex-wrap p-5 items-center bg-gray-100 border-2 rounded-xl'>
            <div>
                <label htmlFor="2">Title:</label>
                <input type="text" id="2" className=' border-2 rounded-lg h-9 m-2 w-96' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div>
                <label htmlFor="3">Date: </label>
                <input type="Date" id="3" className=' border-2 rounded-lg h-9 m-2 p-4' value={userInput.enteredDate} onChange={dateChangeHandler} />

            </div>
            <div>
                <label htmlFor="4">Amount: </label>
                <input type="number" id="4" className=' border-2 rounded-lg h-9 m-2 flex-wrap' value={userInput.enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div>
               <Buttons type='submit' >Add New Expense</Buttons>
            </div>
            
        </div>
   </form>
  )
}

export default ExpenseForm
