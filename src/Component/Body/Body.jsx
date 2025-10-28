import React from 'react'

const Body = () => {
  return (
    <>
    <div className="container">
        <div className="head-container">
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div className="input-container">
            <input type="email" placeholder='Enter your email here '/>
            <button>Get Started</button>
        </div>
        <p>Already have an account? Sign in now.</p>
    </div>
    </>
  )
}

export default Body
