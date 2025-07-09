import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    forest: "",
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
      "https://script.google.com/macros/s/AKfycbxRfxrwapz6dnYjFGvL9rAYsRFkAaV8U0gW_hKoE3HsW4FBvne-i9qmE0H_UfgT7lMH/exec";
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
          phone: "",
          forest: "",
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
        <h2 className="text-2xl font-bold mb-2">
          Support our Forest Conservation Efforts
        </h2>
        <p className="mb-6 text-gray-600">
          Your donations help us protect and preserve vital forest ecosystems,
          ensuring a sustainable future for all.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />

          <select
            name="forest"
            value={formData.forest}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          >
            <option value="">Select a Forest</option>
            <option value="Tahoe National Forest">Tahoe National Forest</option>
            <option value="Gunnison State Forest">Gunnison State Forest</option>
            <option value="Chattahoochee Oconee National Forest">
              Chattahoochee Oconee National Forest
            </option>
            <option value="Sawtooth National Forest">
              Sawtooth National Forest
            </option>
            <option value="Allegheny National Forest">
              Allegheny National Forest
            </option>
            <option value="25 Million Trees by 2033">
              25 Million Trees by 2033
            </option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />

          <button
            type="submit"
            className="bg-[#E1BE23] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-400 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "PLANT A TREE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
