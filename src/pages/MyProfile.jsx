import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/CreateContext";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaCamera, FaLink, FaSave } from "react-icons/fa";

const MyProfile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);
  const { displayName, photoURL, email } = user || {};

  // Handle Page Title
  useEffect(() => {
    document.title = "Kids Toy | My Profile";
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    
    const photoUrl = e.target.photo.value;
    const name = e.target.name.value;
    
    updateUser(name, photoUrl)
      .then(() => {
        setUser((prevUser) => ({
          ...prevUser,
          displayName: name,
          photoURL: photoUrl,
        }));
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error("Failed to update profile.");
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4 font-sans">
      
      {/* Main Card Container */}
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* --- LEFT SIDE: Profile Visual --- */}
        <div className="md:w-5/12 bg-gradient-to-br from-indigo-600 to-purple-700 text-white relative flex flex-col items-center justify-center p-10 text-center">
            
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

            {/* Avatar Container */}
            <div className="relative mb-6 group">
                <div className="w-32 h-32 rounded-full p-1 bg-white/30 backdrop-blur-sm shadow-xl">
                    <img 
                        src={photoURL || "https://i.ibb.co/5GzXkwq/user.png"} 
                        alt="Profile" 
                        className="w-full h-full rounded-full object-cover border-4 border-white"
                    />
                </div>
                {/* Badge */}
                <div className="absolute bottom-2 right-2 bg-green-500 p-2 rounded-full border-2 border-white shadow-sm" title="Active User">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
            </div>

            <h2 className="text-3xl font-bold mb-1">{displayName}</h2>
            <div className="flex items-center gap-2 text-indigo-100 bg-white/10 px-4 py-1 rounded-full text-sm backdrop-blur-md">
                <FaEnvelope size={12} />
                <span>{email}</span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <span className="block text-2xl font-bold">0</span>
                    <span className="text-xs text-indigo-200 uppercase tracking-wider">Orders</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <span className="block text-2xl font-bold">Active</span>
                    <span className="text-xs text-indigo-200 uppercase tracking-wider">Status</span>
                </div>
            </div>
        </div>

        {/* --- RIGHT SIDE: Edit Form --- */}
        <div className="md:w-7/12 p-8 md:p-12 bg-white">
            <div className="flex items-center gap-3 mb-8 text-gray-800">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <FaUser size={20} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Edit Profile</h3>
                    <p className="text-gray-500 text-sm">Update your personal details below.</p>
                </div>
            </div>

            <form onSubmit={handleUpdate} className="space-y-6">
                
                {/* Name Input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-gray-700">Display Name</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            <FaUser />
                        </div>
                        <input
                            name="name"
                            type="text"
                            defaultValue={displayName}
                            className="input input-bordered w-full pl-10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-gray-50 rounded-xl"
                            placeholder="Enter your full name"
                        />
                    </div>
                </div>

                {/* Photo URL Input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-gray-700">Profile Picture URL</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            <FaLink />
                        </div>
                        <input
                            name="photo"
                            type="text"
                            defaultValue={photoURL}
                            className="input input-bordered w-full pl-10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-gray-50 rounded-xl"
                            placeholder="https://example.com/photo.jpg"
                        />
                    </div>
                    <label className="label">
                        <span className="label-text-alt text-gray-400">Paste a direct link to an image.</span>
                    </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full border-none rounded-xl h-12 shadow-lg hover:shadow-indigo-200 transition-all flex items-center gap-2 text-lg">
                        <FaSave /> Save Changes
                    </button>
                </div>

            </form>
        </div>

      </div>
    </div>
  );
};

export default MyProfile;