
import react from 'react';
export default function App() {

  function signup(formData) {

    const email = formData.get('email');
    const password = formData.get('password');
    const description = formData.get('description');
    console.log(email)
    console.log(password)
    console.log(description)

  }
  return (
    <section>
      <h3>Signup Form</h3>

      <form action={signup}>

        <label>Email: </label>
        <input name='email' placeholder="abcd@gmail.com" />
        <br />
        <br />
        <label>Password:</label>
        <input name='password' placeholder='password' />
        <br />
        <br />
        <label className='ds'>Description:</label>
        <br />
        <textarea className="ta" name='description' placeholder='description' />
        <fieldset className='fs'>
          <legend>Employment  status</legend>

          <label>
            <input type='radio' name='employment' value='employed' />
            unemployed
          </label>
          <br/>
          <label>
            <input type="radio" name="employmentStatus" />
            Part-time
          </label>
          <br/>
          <label>
            <input type="radio" name="employmentStatus" />
            Full-time
          </label>
        </fieldset>

        <button>submit</button>
      </form>
    </section>
  )
}










