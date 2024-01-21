import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import AgenKlikPhoto from "./AgenKlik Blue  Logo.png"
import "./MaidHome.css";
import { useNavigate } from 'react-router-dom';

export default function Form() {
      const navigate = useNavigate();
  const url = "https://sheetdb.io/api/v1/yc2k6t3iekggk"
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    Age:"",
    email: "",
    occupation: "",
    qualifications: "",
    question1: "",
    question2: "",
    Pets: false,
    reasoning: null,
    Profilepic:"",
    KTP:"",
    askingSalary:"",
    salaryNegotiable:"",
    strength1:"",
    strength2:"",
    strength3:"",
    strength4:"",
    verified: false,
    WorkExperience: "",  
    tingkatpendidikan: "",  
    Anak: false,  
    Gender: "",  
  });

  const [submitState, setSubmitState] = useState(false)
  const [labels, SetLabel] = useState("Silakan memilih Foto")
  const [labels2, SetLabel2] = useState("Silakan memilih Foto")
  
  function handleChange(event) {
    const { name, type, value, checked } = event.target;

    setFormData((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
      reasoning: name === "Pets" && checked ? "" : value ,

     
    }));
  
    if (event.target.files && event.target.files.length > 0) {
      if (name === 'Profilepic') {
        SetLabel2(event.target.files[0].name);
      } else if (name === 'KTP') {
        SetLabel2(event.target.files[0].name);
      }
    }
  }

  
function Submitted(event) {
  event.preventDefault(); 
  const excludedFields = ["strength1", "strength2", "strength3", "strength4"];


  const isEmpty = Object.entries(formData).some(([name, value]) => {
    return !excludedFields.includes(name) && (value === "" || value === null);
  });

  if (isEmpty) {
    alert("Silakan isi semua masukan");
    return;
  }
  Axios.post(url, ({
  firstName: formData.firstName,
  lastName: formData.lastName,
  phoneNumber: formData.phoneNumber,
  Age: formData.Age,
  email: formData.email,
  occupation: formData.occupation,
  qualifications: formData.qualifications,
  question1: formData.question1,
  question2: formData.question2,
  Pets: formData.Pets,
  reasoning: formData.reasoning,
  Profilepic: formData.Profilepic,
  KTP: formData.KTP,
  askingSalary: formData.askingSalary,
  salaryNegotiable: formData.salaryNegotiable,
  strength1: formData.strength1,
  strength2: formData.strength2,
  strength3: formData.strength3,
  strength4: formData.strength4,
  WorkExperience: formData.WorkExperience,
  tingkatpendidikan: formData.tingkatpendidikan,
  Anak: formData.Anak,
  Gender: formData.Gender,
  verified: formData.verified,
  Location: formData.Locatiom
  }))
    .then((response) => {
      // Handle the successful response
      console.log("Response:", response.data);
      setSubmitState(true);
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        Age: "",
        email: "",
        occupation: "",
        qualifications: "",
        question1: "",
        question2: "",
        Pets: false,
        reasoning: null,
        Profilepic: "",
        KTP: "",
        askingSalary: "",
        salaryNegotiable: "",
        strength1: "",
        strength2: "",
        strength3: "",
        strength4: "",
        verified: false,
        WorkExperience: "",
        tingkatpendidikan: "",
        Anak: false,
        Gender: "",
        Locatiom: "",
      });
    })


    .catch((error) => {
      // Handle errors
      console.error("Error:", error);
      console.error("Request Config:", error.config);

      alert("Error: " + error.message);
    });
    


}
  return (
    <>

{ submitState?<div className='SubmitSuccess' >
          <h1>Applikasi kalian sedang ditinjau,</h1>
          <h2>kami akan memberikan respon ke kalianda melalui email untuk hasilnya</h2>
          <button onClick={() => navigate('/Home')} className='Button'>Home</button>

        </div> : null}

      <form onSubmit={Submitted} className='Form'>


  


      <img src= {AgenKlikPhoto} className='AgenKlikLogo'/>
        <h1 className='FormTitle'>Applikasi Lowongan</h1>
      
        <input 
          name="firstName"
          type="text"
          value={formData.firstName}
          placeholder="Nama Depan"
          onChange={handleChange}
          className='formInput'
        />
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          placeholder="Nama Belakang"
          onChange={handleChange}
          className='formInput'
        />
        <input
          name="Age"
          type="number"
          value={formData.Age}
          placeholder="Umur"
          onChange={handleChange}
          className='formInput'
        />
        <input
          name="phoneNumber"
          type="number"
          value={formData.phoneNumber}
          placeholder="Nomor HP"
          onChange={handleChange}
          className='formInput'
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          placeholder="email"
          onChange={handleChange}
          className='formInput'
        />
        <select
  name="WorkExperience"
  value={formData.WorkExperience}
  onChange={handleChange}
  className='formInput'
>
  <option value="" disabled>Silakan memilih seberapa banyak pengalaman yang kamu miliki kalian</option>
  <option value="Dalam 1 Tahun">Dalam 1 Tahun</option>
  <option value="1-2 Tahun">1-2 Tahun</option>
  <option value="2-4 Tahun">2-4 Tahun</option>
  <option value="6-8 Tahun">6-8 Tahun</option>
  <option value="8+ Tahun">8+ Tahun</option>

  


</select>



       <select
  name="occupation"
  value={formData.occupation}
  onChange={handleChange}
  className='formInput'
>
  <option value="" disabled>Silakan memilih perkerjaan kalian</option>
  <option value="PRT">PRT</option>
  <option value="Supir">Supir</option>
  <option value="Baby Sitter">Baby Sitter</option>
  <option value="Penrawat Lansia">Penrawat Lansia</option>
  <option value="Penajak Hewan">Penajak Hewan</option>
  <option value="Tukang Kebun">Tukang Kebun</option>
  


</select>

<input
          name="Location"
          type="text"
          value={formData.Location}
          placeholder="Lokasi Kerja"
          onChange={handleChange}
          className='formInput'
        />
        
        
        <label htmlFor="qualifications" className='Labels'>Qualifikasi (kerja sebelum)</label>
        <textarea
          id="qualifications"
          name="qualifications"
          value={formData.qualifications}
          onChange={handleChange}
          className='formtext'
        />
        <label htmlFor="question1" className='Labels'>Tentang Kalian</label>
        <textarea
          id="question1"
          name="question1"
          value={formData.question1}
          onChange={handleChange}
          className='formtext'
        />
        <label htmlFor="question2" className='Labels'>Apakah Yang Bikin Kalian Lebih Memenuhi Syarat Dari Setiap Orang?</label>
        <textarea
          id="question2"
          name="question2"
          value={formData.question2}
          onChange={handleChange}
          className='formtext'
        />
        <label htmlFor="Pets" className='Labels'>Apakah kamu Nyaman Dengan Hewan Peliharaan?</label>
        <input
          name="Pets"
          type="checkbox"
          checked={formData.Pets}
          onChange={handleChange}
          id="Pets"
          className='formInput'
        />
        {formData.Pets && (
          <input
            name="reasoning"
            type="text"
            value={formData.reasoning}
            placeholder="jika ya, apakah ada pengecualian"
            onChange={handleChange}
            className='formInput'
          />
        )}
        <label htmlFor="tingkatpendidikan" className='Labels'>Tingkat Pendidikan</label>
        <select
  name="tingkatpendidikan"
  value={formData.tingkatpendidikan}
  onChange={handleChange}
  className='formInput'
>
  <option value="" disabled>Silakan memilih tingkat pendidikankalian</option>
  <option value="SD">SD</option>
  <option value="SMP">SMP</option>
  <option value="SMA">SMA</option>
  <option value="Sarjana+">Sarjana+</option>

</select>
<label htmlFor="Anak" className='Labels'>Apa Anda Punya Anak?</label>
        <input
          name="Anak"
          type="checkbox"
          checked={formData.Anak}
          onChange={handleChange}
          id="Anak"
          className='formInput'
        />
<label htmlFor='Gender'className='Labels' >Jenis Kelamin Kalian</label>
<select
  name="Gender"
  value={formData.Gender}
  onChange={handleChange}
  className='formInput'
  id='Gender'
>
  <option value="" disabled>Silakan memilih Jenis kelamin kalian</option>
  <option value="Perempuan">Perempuan</option>
  <option value="Pria">Pria</option>

  
</select>



       
<label htmlFor="askingSalary" className='Labels'>Meminta Gaji </label>
<input
          name="askingSalary"
          type="number"
          checked={formData.askingSalary}
          onChange={handleChange}
          id="askingSalary"
          className='formInput'
        />
        <label htmlFor="salaryNegotiable" className='Labels'>Bisa Dinegosiasikan </label>
        <input
          name="salaryNegotiable"
          type="checkbox"
          checked={formData.salaryNegotiable}
          onChange={handleChange}
          id="salaryNegotiable"
          className='formInput'
        />

<label htmlFor="strength1" className='Labels'>Kekeuataan Kalian (Kalo Tidak ada isi kosong) </label>
        <input
          name="strength1"
          type="text"
          placeholder='strength1'
          value={formData.strength1}
          onChange={handleChange}
          id="strength1"
          className='formInput'
        />
            <input
          name="strength2"
          type="text"
          placeholder='strength2'
          value={formData.strength2}
          onChange={handleChange}
          id="strength2"
          className='formInput'
        />
            <input
          name="strength3"
          type="text"
          placeholder='strength3'
          value={formData.strength3}
          onChange={handleChange}
          id="strength3"
          className='formInput'
        />
            <input
          name="strength4"
          type="text"
          placeholder='strength4'
          value={formData.strength4}
          onChange={handleChange}
          id="strength4"
          className='formInput'
        />
         <div className="file-input-container">
  <label htmlFor="photoInput" className='Labels'>Profile Picture</label>
  <input
    name='Profilepic'
    type="file"
    id="photoInput"
    accept="image/*"
    className='formInput'
    onChange={handleChange}
  />
  <label className="custom-file-input" htmlFor="photoInput">{labels2}</label>
  <span className="file-name"></span>
</div>

<div className="file-input-container">
  <label htmlFor="ktpInput" className='Labels'>KTP</label>
  <input
    name='KTP'
    type="file"
    id="ktpInput"
    accept="image/*"
    className='formInput'
    onChange={handleChange}
  />
  <label className="custom-file-input" htmlFor="ktpInput">{labels}</label>
  <span className="file-name"></span>
</div>

<button type="submit">Submit</button>
</form>

</>
  );
}
