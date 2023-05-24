import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { upload } from '@testing-library/user-event/dist/upload';

export default function Form() {
  const location = useLocation();
  const params = useParams();
  let currentSite = params.id;
  const [email, setEmail] = useState('');
  const [tresc, setTresc] = useState('');
  const [temat, setTemat] = useState('');
  const [opis, setOpis] = useState('');
  const [file, setFile] = useState();
  const [srednia, setSrednia] = useState(0);
  const [formData, setFormData] = useState({
    unit : "",
    surname : "",
    name : "",
    email: "",
    title : "",
    content : ""
  });
  let {idx, unit, name} = useParams();
  const [ cnt, setCountER] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  function handleChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  const handleClick = (e)=>{
    if(params.id = "pwdRstMs" && !email.includes('zsegw.pl')){
      alert(email);
    }else if(email.includes('zsegw.pl')){
      alert("podaj poprawny email");
    } 
    if(params.id = "cert1"){
      alert("tresc: " + tresc);
    }
  }
  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
    fetch('http://localhost:3001/insert-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(formData => console.log(formData))
    .catch(error => console.error(error));
  }
  
  

  function siteChecker(){
    if(currentSite == "pwdRstMs"){
      console.log("jestem w pwdRstMs");
     return true;
    }else return false;
  }

  return (
    <div className="App-header">
        <h1>Form</h1>
        <p>Case id: {params.id}</p>
        <p>Case url: {location.pathname}</p>
        <p>Test params : {params.id}<br/> Klasa: {unit}</p>
        <p>Proba przeslania formularza : {cnt}</p>
        <button onClick={() => setCountER(cnt+1)}>+</button>
        <div>
          <form onSubmit={onSubmit}>
            <label htmlFor="unit">Klasa: </label>
            <select name="unit" id='unit' onChange={handleChange}>
            {data.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
            </select>
            <label htmlFor="name">Imie: </label>
            <input type="text" name="name" id="name" onChange={handleChange}></input>
            <label htmlFor="surname">Nazwisko: </label>
            <input type="text" name="surname" id="surname" onChange={handleChange}></input> 
          
            
        {params.id == "mLegit" || params.id =="pwdRstMs" ? (
          <>
            <label htmlFor="email">Email: </label>
            <input type="text" placeholder='adres email' onChange={handleChange} name="email" id="email" pattern={siteChecker ? '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' : ""}></input>
          </>
        ) : "" }
        {params.id == "cert1" ?(
          <>
            <label htmlFor="tresc">Tresc: </label>
            <textarea placeholder='podaj tresc zaswiadczenia' id="content" onChange={(e)=>{setTresc(e.target.value)}}></textarea>
          </>
        ) : ""}
        {params.id === "applic"?(
          <>
            <label htmlFor='srednia'>Średnia: </label>
            <input type="number" step="0.1" onChange={handleChange} value={srednia} placeholder="średnia" id='srednia' required></input>
          </>
        ) : ""}
        {params.id ==="other" ? (
          <>
            <label htmlFor="temat">Temat:</label>
            <input type="text" placeholder='Temat' onChange={handleChange} id="title" value={temat} required />
            <label htmlFor="opis">Opis Sprawy:</label>
            <input type="text" onChange={handleChange} id="desc" required placeholder='opis sprawy' />
            <label htmlFor='plik'>Załącznik: </label>
            <input type="file" name='plik' onChange={handleChange} id="file" placeholder="Dodaj plik" />
          </>
        ): ""}
        <br />
        <input type="submit" value="Wyślij"></input>
        </form>
        </div>
        
    </div>
  )
}
