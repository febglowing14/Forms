import React from 'react';

export default function App() {

  function signup(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const description = formData.get('description');
    const employmentStatus = formData.get('employmentStatus');
    const dietaryRestrictions = formData.getAll('dietaryRestrictions');
    const favcolor = formData.get('favcolor');
    console.log(favcolor);
    
  }

  return (
    <section className='container'>
      <h3>Signup Form</h3>
      <form action={signup}>
        <label>Email: </label>
        <input className='ps' name='email' placeholder="abcd@gmail.com" />
        <br />
        <label>Password:</label>
        <input className='ps' name='password' placeholder='password' />
        <br />
        <label className='ds'>Description:</label>
        <textarea className="ta" name='description' placeholder='description' />
        <fieldset className='fs'>
          <legend className='ps'>Employment status</legend>
          <label>
            <input type='radio' name='employmentStatus' value='unemployed' />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value='part-time' />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" value='full-time' />
            Full-time
          </label>
        </fieldset>

        <fieldset className='dr'>
          <legend>Dietary Restriction</legend>
          <label>
            <input type='checkbox' name='dietaryRestrictions' value='vegetarian' />
            veggie
          </label>
          <label>
            <input type='checkbox' name='dietaryRestrictions' value='non-veg' />
            Non-veg
          </label>
          <label>
          <input type='checkbox' name='dietaryRestrictions' value='Both' />
          Both
          </label>
        </fieldset>
        <br/>
        <label className='fc'>What is your favourite color?</label>
        <br />
        <select id='favcolor'>
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
        <option value='yellow'>Yellow</option>
        <option value='orange'>Orange</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}










