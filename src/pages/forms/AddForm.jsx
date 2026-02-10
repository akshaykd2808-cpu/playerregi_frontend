import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createform } from '../../services/authService';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddForm = () => {


    const [formData, setFormData] = useState({
    name: "",
    description: "",
    amount: "",
    image: null,
    isActive: false,
  });

const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("FormName", formData.name);
    data.append("Description", formData.description);
    data.append("Amount", Number(formData.amount));
    data.append("Image", formData.image);
    data.append("isActive", formData.isActive);

    console.log("Form Data:", data);
        try {

                   
          {/*const res = await createform(formData);*/}
    
const  res = await axios.post(
  "https://localhost:7014/api/Forms/CreateForm",data,
  {
    headers: { "Content-Type": "multipart/form-data" },
     withCredentials: true
  }
  
);

          if(res.status === 200)
          {
            toast.success("Form created successfully!");
            navigate("/AddForm");

          }
                    
        } catch (error) {
            
          toast.error("Failed to create form!")
        }


  };

  return (
  <>
<div className="row"> 
  <form onSubmit={handleSubmit}
  encType="multipart/form-data" > 
  <h2 className="text-2xl font-semibold text-center text-gray-700">Create Registraion Form </h2> {/* Name */} 
  <div className="container"> 
<div className='row'>

<div className='col-6'>
<label className='form-check-label'> Name </label> 
    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required /> 
</div>
<div className='col-6'>
<label className='form-check-label'> Description </label>
      <input type="text" name="description" value={formData.description} onChange={handleChange} className="form-control" />
</div>

</div>

<div className='row'>
  
  <div className='col-6'>
 <label className='form-check-label'> Amount </label> 
    <input type="number" name="amount" value={formData.amount} onChange={handleChange} className="form-control" />
  </div>



  <div className='col-6'>
 <label className='form-check-label'> Upload Image </label> 
 <input type="file" name="image" accept="image/*" onChange={handleChange} className="form-control" />        
  </div>
  </div>
   

   <div className='row'>
    <div className='col-6'>
      <label className='form-check-label'>Is Active</label>
  <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} className="form-check-input" /> 
           
    </div>

       <div className='col-6'>
<button type="submit" className="btn btn-success" > Save </button> 
       </div>
           

   </div>
   </div>
   
       
  </form>
  </div>
  </>

  );
}

export default AddForm