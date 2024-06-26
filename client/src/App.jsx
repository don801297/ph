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
 
<img className="img navlogo" src="./img/navlogo2.png" alt="fail img to load net banking" />
<p className='nav-heading main-nav-heading'>Phone Shop</p>
</div>


 <div className="cont1">
 <div className="header">
          
          <div className="heading">Payment Options</div>
          <img className="img" src="./img/net4.png" alt="fail img to load net banking" />
          
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

<div className="important-lins">* After registration compleate Send Payment done </div>
<div className="important-lins">* Confarmation Screenshot on Whatsapp</div>
<div className="important-lins">* Please ensure your Card or Net banking is enabled for online transaction</div>
<div className="important-lins">* Please ensure to complete the payment transaction well within time limits</div>

</div>
    </>
  )
}
export default App
