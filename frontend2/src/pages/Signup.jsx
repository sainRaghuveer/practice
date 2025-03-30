import React, { useEffect, useState } from 'react';
import "../styles/Signup.css";
const Signup = () => {

    let [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    let obj = {
        email, password
    }

    const fetchData = async()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const res = await response.json();
        setData(res)
        console.log(res)
        console.log(response)
    }

    useEffect(()=>{
        fetchData();
    }, [])


    return (
        <div>
            <h1>Signup Page</h1>
            <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
            <button>Submit</button>
            <p>Already have an account? <a href="/login">Login</a></p>
            <p>Already have an account? <a href="/login">Login</a></p>

            {/* {data.map((el, index)=>(
                <div key={index}>
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                    <img src={el.image} alt={el.title} className='img'/>
                    <p>Price: {el.price}</p>
                    <button onClick={()=>console.log(obj)}>Add to Cart</button>
                </div>
            ))} */}

            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7975478492085!2d88.42593737507781!3d22.576002579489266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f970ae9a2e19b5%3A0x16c43b9069f4b159!2sTechno%20India%20University!5e1!3m2!1sen!2sin!4v1742916524889!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

           
        </div>
    )
}

export default Signup