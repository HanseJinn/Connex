import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import "../styles/Login.css";
import Headline from "@/components/ui/headline";

const Login: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      // Handle Register logic
      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        setMessageType("error");
        return;
      }
      // Simulate successful registration
      setMessage("Registration successful");
      setMessageType("success");
      console.log({ email, password, confirmPassword });
    } else {
      // Handle Login logic
      // Simulate successful login
      setMessage("Login successful");
      setMessageType("success");
      console.log({ email, password });
    }
  };

  // const googleLogin = () => {
  //   window.location.href = "http://localhost:8080/oauth2/authorization/google";
  // };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Headline />
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-accent rounded-lg shadow-xl w-full max-w-md p-8">
          <h1 className="text-3xl font-serif text-primary text-center mb-6">
            {isRegister ? "Create an Account" : "Welcome to Connex"}
          </h1>
          <p className="text-sm text-gray-400 text-center mb-8">
            {isRegister
              ? "Join Connex and experience the best!"
              : "An exclusive chat platform for those who demand the best. Flex with Connex!"}
          </p>
          {message && (
            <div className={`text-center mb-4 ${messageType === "success" ? "text-green-500" : "text-red-500"}`}>
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-text">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm text-text">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {isRegister && (
              <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-sm text-text">
                  Confirm Password
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-1 w-full text-white"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}
            <Button
              type="submit"
              className="w-full bg-primary text-background py-2 rounded-lg hover:bg-opacity-90 transition-all">
              {isRegister ? "Register" : "Sign In"}
            </Button>
          </form>
          <div className="text-center mt-4 text-sm text-gray-400">
            <a
              href="#"
              className="underline hover:text-primary"
              onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
            </a>
          </div>
          {/* <Button
            onClick={googleLogin}
            className="w-full bg-google text-background py-2 rounded-lg hover:bg-opacity-90 transition-all mt-4">
            Sign in with Google
          </Button> */}
          <Button
            onClick={handleGoHome}
            className="w-full bg-secondary text-background py-2 rounded-lg hover:bg-opacity-90 transition-all mt-4">
            Go to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;