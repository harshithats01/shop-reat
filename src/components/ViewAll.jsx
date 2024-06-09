import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll=()=> {
    const [data,changeData]= useState(
      {
        "products":[]
      }
    )
      const fetchData=()=>{
        axios.get("https://dummyjson.com/products").then(
            (response)=>{
               
                changeData({products:response.data.products})
            }
        ).catch(error =>{
          console.error('Error fetching data:',error)
        })
      .finally()
    }
    useEffect(()=> {
      fetchData();
    },[])
  
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="row g-3">

                           {data.products.map(
                            (value,index) => {
                                return  <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src={value.images} height="300px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.id}</h5>
                                        <p class="card-title">{value.title}</p>
                                        <p class="card-title">{value.description}</p>
                                        <p class="card-title">{value.category}</p>
                                        <p class="card-title">{value.price}</p>
                                        <p class="card-title">{value.discountPercentage}</p>
                                        <p class="card-title">{value.rating}</p>
                                        <p class="card-title">{value.stock}</p>
                                        <p class="card-title">{value.tags}</p>
                                        

                                       
                                    </div>
                                </div>
                            </div>
                            }
                           )}

                   </div>
                   </div>
                   </div>
                   </div>
                        
                        )
}

                        export default ViewAll