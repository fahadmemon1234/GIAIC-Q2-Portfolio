import React from "react";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-6 ">
        <Image
          src={"/assets/img/Logo.png"}
          alt="logo"
          className="m-auto mb-2"
          width={120}
          height={46}
        />
        <p className="text-center text-gray-500 mb-6">Log in to your account</p>

        <Form>
          <Form.Group className="mb-4">
            <Form.Label className="text-gray-700">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              className="rounded-lg"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="text-gray-700">Password</Form.Label>
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
              className="text-gray-700"
            />
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <Button
            variant="dark"
            className="w-full py-2 rounded-lg text-white"
            type="submit"
          >
            Login
          </Button>
        </Form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="font-semibold text-black hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
