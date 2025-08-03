import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import InputField from "./InputField";
import TextArea from "./Textarea";

const DonationForm = ({ selectedForest }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    honoreeName: "",
    honoreeEmail: "",
    forest: selectedForest,
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbwYFVMZrrJOPNZ4J6zAOPJ6jQR_3SZxJvGLRuG2n1wl6agYOqUfIl0CemOq7z40yuP-/exec";
    const proxy = "https://corsproxy.io/?";
    setLoading(true);

    fetch(proxy + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("Submitted:", data);
        navigate("/thanks");
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          honoreeName: "",
          honoreeEmail: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Failed:", err);
        setLoading(false);
      });
  };

  return (
    <div
      id="donate"
      className="bg-gray-50 p-6 h-full flex flex-col justify-between rounded-lg"
    >
      <div>
        <h2 className="text-3xl  mb-2 tracking-widest font-light text-center text-[#355C39]">
          Support Forest Conservation Efforts
        </h2>
        <p className="mb-6 text-gray-600 font-light text-center tracking-wider">
          Plant a tree in this location and your honoree will receive an eCard.
        </p>

        <p className="mb-6 text-gray-600 font-light text-center tracking-wider">
          Selected Forest :
          <span className="font-semibold text-green-600">{selectedForest}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <InputField
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            name="honoreeName"
            placeholder="Honoree Name"
            value={formData.honoreeName}
            onChange={handleChange}
          />

          <InputField
            name="honoreeEmail"
            type="email"
            placeholder="Honoree Email"
            value={formData.honoreeEmail}
            onChange={handleChange}
          />

          <TextArea
            name="message"
            placeholder="Leave Your Honoree a Message"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="flex justify-center mt-4">
            <Button
              type="submit"
              green
              className="bg-[#E1BE23] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-400 transition"
              disabled={loading}
              text={loading ? "Submitting..." : "PLANT A TREE"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
