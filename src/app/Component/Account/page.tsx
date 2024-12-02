"use client";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const LoginPage = ({ toggleForm }: { toggleForm: () => void }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme === "dark" ? "dark" : "light");
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-6 ">
        <Image
          src={
            theme === "dark" ? "/assets/img/white.png" : "/assets/img/Logo.png"
          }
          alt="logo"
          className="m-auto mb-2"
          width={120}
          height={46}
        />
        <p
          className={`mb-6 text-center ${
            theme == "dark" ? " text-white " : "text-gray-500"
          }`}
        >
          Log in to your account
        </p>

        <Form>
          <Form.Group className="mb-4">
            <Form.Label
              className={`${
                theme == "dark" ? " text-white " : "text-gray-700"
              }`}
            >
              Email Address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              className="rounded-lg"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label
              className={`${
                theme == "dark" ? " text-white " : "text-gray-700"
              }`}
            >
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="rounded-lg"
            />
          </Form.Group>

          <div className="flex justify-between items-center mb-4">
            <Form.Check
              type="checkbox"
              label="Remember me"
              className={`${
                theme == "dark" ? " text-white " : "text-gray-700"
              }`}
            />
            <a
              href="#"
              className={`text-sm ${
                theme == "dark" ? " text-white " : "text-gray-700"
              }`}
            >
              Forgot password?
            </a>
          </div>

          <Button
            variant="dark"
            className={`w-full py-2 rounded-lg text-white ${
              theme === "dark" ? "border-2 border-white" : "border-none"
            }`}
            type="submit"
          >
            Login
          </Button>
        </Form>

        <p
          className={`mt-6 text-center text-sm ${
            theme == "dark" ? " text-white " : "text-gray-500"
          }`}
        >
          Don't have an account?{" "}
          <Link
            href="#"
            className={`font-semibold ${
              theme == "dark" ? " text-white " : "text-black"
            }`}
            onClick={toggleForm}
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

const RegisterPage = ({ toggleForm }: { toggleForm: () => void }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme === "dark" ? "dark" : "light");
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-6">
        <Image
          src={
            theme === "dark" ? "/assets/img/white.png" : "/assets/img/Logo.png"
          }
          alt="logo"
          className="m-auto mb-2"
          width={120}
          height={46}
        />
        <p
          className={`mb-6 text-center ${
            theme == "dark" ? " text-white " : "text-gray-500"
          }`}
        >
          Create your account
        </p>

        <Form>
          <Form.Group className="mb-4">
            <Form.Label
              className={`${
                theme == "dark" ? " text-white " : "text-gray-700"
              }`}
            >
              Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              className="rounded-lg"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label
              className={`${
                theme == "dark" ? " text-white " : "text-gray-700"
              }`}
            >
              Email Address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              className="rounded-lg"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label
              className={`${
                theme == "dark" ? " text-white " : "text-gray-700"
              }`}
            >
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="rounded-lg"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label
              className={`${
                theme == "dark" ? " text-white " : "text-gray-700"
              }`}
            >
              Confirm Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              className="rounded-lg"
            />
          </Form.Group>

          <Button
            variant="dark"
            className={`w-full py-2 rounded-lg text-white ${
              theme === "dark" ? "border-2 border-white" : "border-none"
            }`}
            type="submit"
          >
            Register
          </Button>
        </Form>

        <p
          className={`mt-6 text-center text-sm ${
            theme == "dark" ? " text-white " : "text-gray-500"
          }`}
        >
          Already have an account?{" "}
          <Link
            href="#"
            className={`font-semibold ${
              theme == "dark" ? " text-white " : "text-black"
            }`}
            onClick={toggleForm}
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div>
      {isLogin ? (
        <LoginPage toggleForm={toggleForm} />
      ) : (
        <RegisterPage toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;
