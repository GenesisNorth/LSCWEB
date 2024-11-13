import { useState } from "react";
import { FiSend } from "react-icons/fi";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="w-full p-6">
      <h2 className="font-bold text-[#111111] text-[24px] mb-4 text-center">
        Become a Member
      </h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#444444]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#444444]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#444444]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#444444]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Residential Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#444444] resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 w-full flex items-center justify-center gap-2 p-3 mt-5 rounded-md text-white font-semibold hover:bg-[#3e8e41] focus:outline-none focus:ring-2 focus:ring-[#3e8e41]"
          >
            <p>Submit</p>
            <FiSend size={18} />
          </button>
        </form>
      ) : (
        <div className="text-center mt-8">
          <h2 className="font-bold text-[#111111] text-[24px]">Thank You!</h2>
          <p className="text-[#444444] leading-relaxed mt-2">
            We have received your message and will be in touch shortly.
          </p>
        </div>
      )}
    </div>
  );
};

export default MembershipForm;
