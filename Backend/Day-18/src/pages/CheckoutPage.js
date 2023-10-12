import React from 'react'
import '../pages/Checkoutpage.css';
import { Link } from 'react-router-dom';

function CheckoutPage() {
  return (
    <div style={{marginTop:"100px"}}>
    <form action="" class="formm">
          <section class="contact-formm">
            <h2 class="form__titlee">Contact information</h2>
            <div class="form__input">
              <label for="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email..."
                validate
              />
            </div>
            <div class="form__input">
              <label for="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your phone..."
              />
            </div>
          </section>
          <section class="shipping-form">
            <h2 class="form__title">Shipping address</h2>
            <div class="form__input">
              <label for="fullname">Full name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value="Rodney Cotton"
              />
            </div>
            <div class="form__input">
              <label for="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Your address.."
              />
            </div>
            <div class="form__input">
              <label for="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Your city.."
              />
            </div>
            <div class="col-2">
              <div class="form__input">
                <label for="country">Country</label>
                <select name="country" id="country">
                  <option value="">Your country..</option>
                  <option value="france">France</option>
                  <option value="germany">Germany</option>
                  <option value="italy">Italy</option>
                  <option value="spain">Spain</option>
                  <option value="switzerland">Switzerland</option>
                  <option value="portugal">Portugal</option>
                  <option value="uk">UK</option>
                </select>
              </div>
              <div class="form__input">
                <label for="postcode">Postal code</label>
                <input
                  type="number"
                  name="postcode"
                  id="postcode"
                  placeholder="Your postal code.."
                />
              </div>
            </div>
            <div class="form__input">
              <input type="checkbox" name="remember" id="remember" />
              <label for="remember">Save this information for next time</label>
            </div>
          </section>
        </form>
<Link to='/'><button type="submit" style={{width:"150px",backgroundColor:'#FF0000',borderRadius:'5px',marginLeft:'650px',height:'40px',textcolor:'white'}}>Save Address</button>
</Link></div>
    
    
  )
}
export default CheckoutPage;
