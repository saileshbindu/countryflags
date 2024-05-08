import { useEffect, useState } from "react";

const Xstopwatch = () =>{
    const countryUrl = "https://restcountries.com/v3.1/all";
    const [countries, setCountries] = useState([])

    const Country = ({imageUrl, imgalt, title}) =>{
       return(

        <div style={{
            alignItems:"center",
            border:"1px solid gray",
            borderRadius:"8px",
            textAlign:"center",
            margin:"20px",
            width:"150px",
            height:"150px",
            justifyContent:"center",
            display:"flex",
            flexDirection:"column"

        }}>
            <img src={imageUrl} alt={imgalt} style={{width:"100px"}} />
        <h4>{title}</h4>


        </div>

    )
    }

    useEffect(()=>{
        fetch(countryUrl)
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((error)=>{ console.log("Error while fetching data", error)})      
       
    },[])
 

    return(<div>

        <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center"
    
        }}>
        {countries.map((item)=>(
            <Country
                key={item.cca3}
                imageUrl={item.flags.png} 
                imgalt={item.flags.alt} 
                title={item.name.common}
            />
        ))}
        </div>

    </div>)
}

export default Xstopwatch;