
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkoutdone, setshipaddress } from "../../Redux/action";
import "./shipping.css";
const Shipping_address = () => {
  const toast = useToast()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Warning = ({title, desc})=>{
    return(
          toast({
            title: title,
            position:'top',
            description: desc,
            status: 'warning',
            duration: 3000,
            isClosable: true,
          })
    )
  }

  const [ address, setAddress ] = useState({
    name:"",
    country:"",
    detailadd:"",
    number:""
  })

  const [ credit, setCredit ] = useState({
    cardname:"",
    cardnumber:"",
    expiraydate:"",
    cvv:""
  })
  const { name, country, detailadd, number } = address;
  const { cardname, cardnumber, expiraydate, cvv } = credit;

  const handlechangeaddress = (e)=>{
    const { value, name } = e.target;

    setAddress({...address, [name]:value})
  }

  const handlechangecredit = (e)=>{
    const { value, name } = e.target;

    setCredit({...credit, [name]:value})
  }

  const handlesubmit = (e)=>{
    e.preventDefault();

    
  if( name==="" || country==="" || detailadd==="" || number==="" ||
  cardname==="" || cardnumber==="", expiraydate==="" || cvv===""){
    Warning({title:"Empty Fields", desc:"Please fill all required fields"})
  }else if(cvv > 999 || cvv < 99){
    Warning({title:"Incorrect CVV", desc:"Please enter 3 digit CVV only !"})
  }else if(+cardnumber > 9999999999999999 || +cardnumber < 999999999999999){
    Warning({title:"Incorrect Card Number", desc:"Please enter 16 digit card number !"})
  }else{
      dispatch(setshipaddress(address))
      dispatch(checkoutdone());
      navigate("/ordersuccess");
  }
  
  }
  
  return (
    <>
      <div id="left" className="left">
      <form>
        <div className="form-class">
          <h3>Shipping Address</h3>
          <hr />
          <br />
          <p>Country</p>
           <select name='country'   id='country' className="selectBox"
           onChange={handlechangeaddress}
           value={country} required>
                <option value="United states">United States</option>
                <option value="Palau">Palau</option>
                <option value="Virgin Islands,U.S.">Virgin Islands,U.S.</option>
                 <option value="Puerto Rico">Puerto Rico</option>
                 <option value="Northern Mariana Islands">  Northern Mariana Islands</option>
             </select>       
          <p>Full Name</p>
          <input
            onChange={handlechangeaddress}
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="First and last name"
            required
          />
          <p>Address</p>
          <input
            onChange={handlechangeaddress}
            value={detailadd}
            type="text"
            name="detailadd"
            id="address"
            placeholder="Street address, company name, c/o"
            required
          />
          <p>Phone Number</p>
          <input
            onChange={handlechangeaddress}
            value={number}
            type="number"
            id="phone"
            name="number"
            placeholder="Including area code"
            required
          />
          <h3>Payment Details</h3>
          <div className="form bottom">
            <p>Name on Card</p>
            <input
              onChange={handlechangecredit}
              value={cardname}
              name="cardname"
              type="text"
              id="nameoncard"
              placeholder="Enter name on card"
              required
            />
            <p>Card Number</p>
            <input
              onChange={handlechangecredit}
              value={cardnumber}
              name="cardnumber"
              type="number"
              id="cardnumber"
              placeholder="Enter card Number"
              required
            />
            <div className="display">
              <div>
                <p>Expiry Date</p>
                <input
                  onChange={handlechangecredit}
                  name="expiraydate"
                  value={expiraydate}
                  type="month"
                  id="expirydate"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <p>CVV</p>
                <input name="cvv" value={cvv} onChange={handlechangecredit}
                 type="password" id="cvv" placeholder="cvv" required />
              </div>
            </div>
            <div className="div">
              <button id="form-submit" className="payment-btn" onClick={handlesubmit}>
                Place your order
              </button>
            </div>
          </div>
        </div>
        </form>
      </div>

    </>
  );
};

export default Shipping_address;
