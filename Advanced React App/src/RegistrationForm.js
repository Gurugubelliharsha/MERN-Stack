import React, { useState } from 'react';
import './RegistrationForm.css'; // Importing CSS for better styling

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [users, setUsers] = useState([]);

  const validateStep = () => {
    const errors = {};
    if (step === 1 && !name.trim()) errors.name = 'Name is required';
    if (step === 2 && (!email || !/\S+@\S+\.\S+/.test(email))) errors.email = 'Email is invalid';
    if (step === 3 && (!password || password.length < 6)) errors.password = 'Password must be at least 6 characters';
    return errors;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setStep(step + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length === 0) {
      const newUser = { name, email, password };
      setUsers([...users, newUser]);

      console.log('User Registered:', newUser);
      setSuccessMessage('Registered Successfully!');

      setStep(1);
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={step === 3 ? handleSubmit : handleNext} className="registration-form">
        {step === 1 && (
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <button type="submit">Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <button type="submit">Next</button>
          </div>
        )}

        {step === 3 && (
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <button type="submit">Register</button>
          </div>
        )}
      </form>

      {/* View Details Button (Green Color) */}
      <button onClick={() => setShowDetails(!showDetails)} className="view-details-btn">
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>

      {/* Show Stored Users */}
      {showDetails && (
        <div className="details">
          <h3>Registered Users</h3>
          {users.length > 0 ? (
            users.map((user, index) => (
              <div key={index} className="user-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Password:</strong> {user.password.replace(/./g, '*')}</p>
              </div>
            ))
          ) : (
            <p className="no-data">No data entered yet</p>
          )}
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
