"use client";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/app/lib/sanity";
import Toast from "@/app/Component/Toast/page";

const LoginPage = ({
  toggleForm,
  onLoginSuccess,
}: {
  toggleForm: () => void;
  onLoginSuccess: () => void;
}) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme === "dark" ? "dark" : "light");
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const users: { email: string; password: string }[] = await client.fetch(
        `*[_type == "userRegistration"]{email, password}`
      );

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setToastMessage({
          message: "Login successful!",
          type: "success",
        });

        setTimeout(() => {
          setToastMessage(null);
          onLoginSuccess();
        }, 2000);
      } else {
        setToastMessage({
          message: "Invalid email or password",
          type: "error",
        });
        setTimeout(() => setToastMessage(null), 3000);
      }
    } catch (error) {
      setToastMessage({
        message: "Login failed. Please try again.",
        type: "error",
      });
      setTimeout(() => setToastMessage(null), 3000);
      console.log("Error logging in:", error);
    }
  };

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

        <Form onSubmit={handleLogin}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        {toastMessage && (
          <Toast
            message={toastMessage.message}
            type={toastMessage.type}
            onClose={() => setToastMessage(null)}
          />
        )}

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

  const [toastMessage, setToastMessage] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setToastMessage({
        message: "Passwords do not match",
        type: "error",
      });
      setTimeout(() => setToastMessage(null), 3000);

      return;
    }

    try {
      const existingItems: { id: number; email: string }[] = await client.fetch(
        `*[_type == "userRegistration"]{id, email}`
      );

      const emailExists = existingItems.some((item) => item.email === email);
      if (emailExists) {
        setToastMessage({
          message: "Email already exists. Please use a different email.",
          type: "error",
        });
        setTimeout(() => setToastMessage(null), 3000);
        return;
      }

      const maxId = existingItems.reduce(
        (max, item) => Math.max(max, item.id || 0),
        0
      );

      await client.create({
        _type: "userRegistration",
        id: maxId + 1,
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString(),
      });

      setToastMessage({
        message: "Registration successful!",
        type: "success",
      });
      setTimeout(() => setToastMessage(null), 3000);

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setToastMessage({
        message: "Registration failed. Please try again.",
        type: "error",
      });
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

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

        <Form onSubmit={handleRegister}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          {toastMessage && (
            <Toast
              message={toastMessage.message}
              type={toastMessage.type}
              onClose={() => setToastMessage(null)}
            />
          )}
        </p>
      </div>
    </div>
  );
};

const AuthPage = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleLoginSuccess = () => {
    onClose();
  };

  return (
    <div>
      {isLogin ? (
        <LoginPage
          toggleForm={toggleForm}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <RegisterPage toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;
