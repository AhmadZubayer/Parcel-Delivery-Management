import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Auth.css';

const SignIn = () => {
  // ✅ REACT HOOK FORM: useForm hook initialization
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { signInUser, signInGoogle, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  // ✅ REACT HOOK FORM: handleSubmit wraps this function
  const handleSignIn = (data) => {
    setLoading(true);
    
    signInUser(data.email, data.password)
      .then(() => {
        alert('Sign in successful!');
        reset();
        navigate(location?.state || '/');
      })
      .catch((error) => {
        console.error('Sign in error:', error);
        alert('Sign in failed. Please check your credentials.');
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    signInGoogle()
      .then(() => {
        alert('Sign in successful!');
        navigate(location?.state || '/');
      })
      .catch((error) => {
        console.error('Google sign in error:', error);
        alert('Google sign in failed');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Sign In</h1>
        <p className="auth-subtitle">Welcome back! Please login to your account</p>
        
        {/* ✅ REACT HOOK FORM: handleSubmit wraps the handleSignIn function */}
        <form onSubmit={handleSubmit(handleSignIn)} className="auth-form">
          <div className="form-group">
            <label className="form-label">
              Email
            </label>
            {/* ✅ REACT HOOK FORM: register() connects this input to the form */}
            <input
              type="email"
              {...register('email', { required: true })}
              className="form-input"
              placeholder="Enter your email"
            />
            {/* ✅ REACT HOOK FORM: Display validation errors */}
            {errors.email?.type === 'required' && (
              <p className="error-message">Email is required.</p>
            )}
          </div>
          
          <div className="form-group">
            <label className="form-label">
              Password
            </label>
            <div className="password-input-container">
              {/* ✅ REACT HOOK FORM: register() connects this input to the form */}
              <input
                type={showPassword ? "text" : "password"}
                {...register('password', { required: true })}
                className="form-input password-input"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {/* ✅ REACT HOOK FORM: Display validation errors */}
            {errors.password?.type === 'required' && (
              <p className="error-message">Password is required.</p>
            )}
          </div>
          
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={loading}
          >
            {loading ? (
              <span className="spinner"></span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="auth-divider">
          <span className="divider-text">OR</span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="btn-google"
          disabled={loading}
        >
          {loading ? (
            <span className="spinner"></span>
          ) : (
            <>
              <FcGoogle className="text-xl" />
              Sign in with Google
            </>
          )}
        </button>

        <p className="auth-footer">
          Don't have an account?{' '}
          <Link to="/register" state={location?.state} className="auth-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;