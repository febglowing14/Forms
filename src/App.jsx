import React from 'react';

export default function App() {

  function signup(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const description = formData.get('description');
    console.log(email);
    console.log(password);
    console.log(description);
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}










