import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);
    setIsSubmit(true);
    
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form submitted successfully", formData);
      alert("Form submitted successfully");
      setFormData(initialValues);
      setIsSubmit(false)
    }
  }, [formErrors, isSubmit]);

  const validateForm = (values) => {
    const errors = {};
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!values.userName.trim()) {
      errors.userName = "UserName is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  return (
    <div className="App">
      <div className="form">
        <div className="login-form">
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <input
              type="text"
              placeholder="User Name"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="userName"
            />
            {formErrors.userName && <p className="error">{formErrors.userName}</p>}

            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="email"
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}

            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="password"
            />
            {formErrors.password && <p className="error">{formErrors.password}</p>}

            <button className="submit-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
