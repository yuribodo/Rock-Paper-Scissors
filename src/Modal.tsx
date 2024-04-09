import React from 'react'

const Modal = () => {
  return (
    <div>
      <section className="modal hidden">
        <div className="flex">
          <img src="user.png" width="50px" height="50px" alt="user" />
          <button className="btn-close">⨉</button>
        </div>
        <div>
          <h3>Stay in touch</h3>
          <p>
            This is a dummy newsletter form so don't bother trying to test it. Not
            that I expect you to, anyways. :)
          </p>
        </div>

        <input type="email" id="email" placeholder="brendaneich@js.com" />
        <button className="btn">Submit</button>
      </section>

      <div className="overlay hidden"></div>
      <button className="btn btn-open">Open Modal</button>
    </div>
    
  )
}

export default Modal