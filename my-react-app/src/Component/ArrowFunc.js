import React from 'react';

const ArrowFunc=()=>{
    return(
        <div>
            <form>
                <div>
                    <h1>Login</h1>
                </div>
            <div>
                Email :<input type="Email" placeholder='Enter Your Email' required/>
            </div>
            <div>
                Password :<input type="Password" placeholder='Enter Your Password' required/>
            </div>
            <div>
                <button>Sumbit</button>
            </div>

            </form>
            
        </div>
    );
}

export default ArrowFunc;