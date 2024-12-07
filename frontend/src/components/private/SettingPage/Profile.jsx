import React from "react";
import LayoutWithSidebar from "./LayoutWithSidebar";

const Profile = () => {
  return (
    <LayoutWithSidebar>
      {/* Profile Content */}
      <div>
        <h2 className="text-blue-600 text-xl font-semibold mb-2 flex items-center">
          <i className="fas fa-user mr-2"></i> Profile
        </h2>
        <p className="text-gray-600 mb-6">
          Make changes to your account here. Click save when you're done.
        </p>

        {/* Profile Image & Info */}
        <div className="flex items-center mb-6">
          <img
            src="https://placehold.co/100x100"
            alt="Profile"
            className="rounded-full w-24 h-24 mr-4"
          />
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-gray-200 rounded-full h-2 w-48 mr-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <span className="text-gray-600 text-sm">12000/15000</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              3000 more exp to reach the next tier.
            </p>
            <p className="text-blue-600 text-sm font-semibold">Rising Star</p>
          </div>
          <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
            <i className="fas fa-pen mr-2"></i> Edit
          </button>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          Your Profile image should be no more than 2MB in size.
        </p>

        {/* Profile Form */}
        <form>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name*
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                value="Deca Devin"
              />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Username*
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                value="@decadevin"
              />
              <p className="text-gray-500 text-sm mt-1">
                This is your public display name.
              </p>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                value="peduarte@gmail.com"
                disabled
              />
              <p className="text-gray-500 text-sm mt-1">
                Your email will be filled automatically according to the email
                account you have registered.
              </p>
            </div>

            {/* Date of Birth & Gender */}
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Date of Birth*
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Pick a date"
                  />
                  <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-500"></i>
                </div>
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Gender*
                </label>
                <div className="flex items-center">
                  <input type="radio" name="gender" className="mr-2" /> Male
                  <input type="radio" name="gender" className="ml-4 mr-2" />{" "}
                  Female
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number*
              </label>
              <div className="flex items-center">
                <span className="bg-gray-200 border rounded-l-lg px-3 py-2">
                  +62
                </span>
                <input
                  type="text"
                  className="w-full border rounded-r-lg px-3 py-2"
                  value="8123456789"
                />
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-600">
                  Allow me to get information through this phone number.
                </label>
              </div>
            </div>

            {/* City */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                City*
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                value="Jakarta"
              />
              <p className="text-gray-500 text-sm mt-1">
                Fill in the city where you currently live.
              </p>
            </div>

            {/* Education */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Education*
              </label>
              <select className="w-full border rounded-lg px-3 py-2">
                <option>Fill with your last education.</option>
              </select>
            </div>

            {/* Company */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                value="Rakamin Academy"
              />
              <p className="text-gray-500 text-sm mt-1">
                You can write the name of the company or campus.
              </p>
            </div>

            {/* Role */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Role
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                value="Fullstack Developer"
              />
              <p className="text-gray-500 text-sm mt-1">
                Can be filled with your main role or position.
              </p>
            </div>

            {/* Bio */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Bio
              </label>
              <textarea
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Type Something Here"
              ></textarea>
              <p className="text-gray-500 text-sm mt-1">
                Tell us a little bit about yourself
              </p>
            </div>
            <div className="flex justify-between">
  {/* Tombol di kiri */}
  <div>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
      Save changes
    </button>
  </div>

  {/* Tombol di kanan */}
  <div className="flex space-x-4"> {/* Gunakan `space-x-4` untuk jarak antar tombol */}
    <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
      Delete Account
    </button>
    <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
      Logout
    </button>
  </div>
</div>

        </form>
      </div>
    </LayoutWithSidebar>
  );
};

export default Profile;
