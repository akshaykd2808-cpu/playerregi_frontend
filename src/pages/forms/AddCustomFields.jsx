import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AddCustomFields() {
  const [formData, setFormData] = useState({
    
    fieldName: "",
    fieldType: "",
    isRequired: false,
  });

  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState("");
  useEffect(() => {
    axios
      .get(`https://localhost:7014/api/Forms/GetForms`)
      .then((res) => {
        //setForms(res.data.forms);
        setForms(res.data); // ✅ FIX
        //setSelectedForm(res.data[0]?.id); // ✅ default selection
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      FormId: Number(selectedForm),
      FieldName: formData.fieldName,
      FieldType: formData.fieldType,
      IsRequired: formData.isRequired,
    };

    console.log("Form Data:", payload);
    try {
      const res = await axios.post(
        "https://localhost:7014/api/CustomField/CreateCustomField",
        payload,
        {
            headers : {
                "Content-Type":"application/json"
            }
        }
      );

      if (res.status === 200) {
        toast.success("Form created successfully!");
        
      }
    } catch (error) {
      toast.error("Failed to create form!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h5 className="mb-3">Add Form Field</h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Form Name */}
            <div className="col-md-6">
              <label className="form-label">Form Name</label>
              <select
                className="form-select"
                value={selectedForm}
                onChange={(e) => setSelectedForm(e.target.value)}
              >
                <option value="">Select Form</option>
                {forms &&
                  forms.map((form) => (
                    <option key={form.id} value={form.id}>
                      {form.formName}
                    </option>
                  ))}
              </select>
            </div>

            {/* Field Name */}
            <div className="col-md-6">
              <label className="form-label">Field Name</label>
              <input
                type="text"
                className="form-control"
                name="fieldName"
                value={formData.fieldName}
                onChange={handleChange}
                placeholder="Enter field name"
                required
              />
            </div>

            {/* Field Type */}
            <div className="col-md-6">
              <label className="form-label">Field Type</label>
              <input
                type="text"
                className="form-control"
                name="fieldType"
                value={formData.fieldType}
                onChange={handleChange}
                placeholder="Text / Number / Dropdown"
                required
              />
            </div>

            {/* Is Required */}
            <div className="col-md-6 d-flex align-items-center mt-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="isRequired"
                  checked={formData.isRequired}
                  onChange={handleChange}
                />
                <label className="form-check-label">Is Required</label>
              </div>
            </div>

            {/* Dropdown Values */}
            
          </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCustomFields;
