import { useState } from 'react'


import './App.css'
import { useNavigate } from 'react-router-dom';
import { set } from 'mongoose';

function App() {

  const [ bor, setBor] = useState("2px solid white")

  const navigate = useNavigate();

const handleclick = () =>{
  navigate("/")
}


  return (
    <>


<div className="navbar">
 

<p className='nav-heading'>Welcome To page</p>
</div>


 <div className="cont1">
 <div className="header">
          <div className="heading">Payment Options</div>
          
        </div>

        <div className="payment-option-box">
          <div className="card-logo"><span className='span' class="material-symbols-outlined">
            credit_card
          </span>

            <h5 id='c-heading'>DEBIT/CREDIT CARD</h5>

          </div>

          <a id='pay' href="/Card-Payment">Pay</a>
        </div>



        <div className="payment-option-box net">
          <div className="card-logo"> <span className='span' class="material-symbols-outlined">
            account_balance
          </span>

            <h5 id='c-heading'>NET BANKING</h5>

          </div>

          <a id='pay' href="/Net-Banking">Pay</a>
        </div>

        </div>




        <div className="tips-box">
<div className="tips">Important Tips</div>

<div className="important-lins">* NOTE After registration compleate Send Payment done Confarmation Screenshot on Whatsapp</div>
<div className="important-lins">* Please ensure your Card or Net banking is enabled for online transaction</div>
<div className="important-lins">* Keep your password strong and top secret</div>
<div className="important-lins">* Never disclosed your details to Anyone</div>
<div className="important-lins">* Please ensure to complete the payment transaction well within time limits</div>




</div>
    </>
  )
}
export default App
