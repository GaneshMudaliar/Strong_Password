import {useState} from 'react'

export const PasswordGenerator = () => {

const [length,setlength] = useState(10);
const handleLength = ((e) =>  setlength(parseInt(e.target.value)) );

const [includeUppercase,setIncludeUppercase] = useState(true);
const handleUpper = ((e) => setIncludeUppercase(e.target.checked));

const [includeLowercase,setIncludeLowercase] = useState(true);
const handleLower = ((e)=> setIncludeLowercase(e.target.checked));

const [includeNumber,setIncludeNumber] = useState(true);
const handleNumber = ((e)=> setIncludeNumber(e.target.checked));


const [includeSymbol,setIncludeSymbol] = useState(true);
const handleSymbol = ((e)=> setIncludeSymbol(e.target.checked));

const [password,setPassword] = useState("");

const generatePassword =() => {
  let charset = "";
  if (includeUppercase) charset+= "QWERTYUIOPASDFGHJKLMNBVCXZ";
  if (includeLowercase) charset+= "qwertyuioplkjhgfdsazxcvbnm";
  if (includeNumber) charset+= "0123456789";
  if (includeSymbol) charset+= "!+/*_-@#$%^&()=";

  let generatePsd = "";
  for (let i=0; i < length; i++) {
    const randomIndex =Math.floor(Math.random()* charset.length);
    generatePsd +=charset[randomIndex];
  }
  setPassword(generatePsd);

}

const copyToClipboard = () => {
  navigator.clipboard.writeText(password);
  alert("Password Copied");
}



  return (
    <div className='password-generator'>
      <h2>Strong Password Generator</h2>
      <div className='input-group'>
        <label htmlFor='num'>Password Length : </label>
        <input type='number' id='num' value = {length} onChange={handleLength} />
      </div>
      <div className='checkbox-group'>
        <input type='checkbox' id='upper' checked = {includeUppercase} onChange={handleUpper} />
        <label htmlFor='upper'>Include Uppercase</label>
      </div>
      <div className='checkbox-group'>
        <input type='checkbox' id='lower' checked = {includeLowercase} onChange={handleLower} />
        <label htmlFor='lower'>Include Lowercase</label>
      </div>
      <div className='checkbox-group'>
        <input type='checkbox' id='numbers' checked = {includeNumber} onChange={handleNumber} />
        <label htmlFor='numbers'>Include Numbers</label>
      </div>
      <div className='checkbox-group'>
        <input type='checkbox' id='symbol' checked={includeSymbol} onChange={handleSymbol} />
        <label htmlFor='symbol'>Include Symbol</label>
      </div>
      <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
      <div className='generate-password'>
        <input type='text'readOnly value={password} />
        <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
      </div>



    </div>
  )
}
