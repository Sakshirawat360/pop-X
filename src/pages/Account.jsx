import React, { useEffect, useState } from "react";

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("currentUser"));
    setUser(data);
  }, []);

  return (
    <div className='min-h-screen flex justify-center items-center bg-white'>
      
      <div className='bg-gray-100  shadow-xl  w-[400px] h-[700px] flex flex-col '>
    
          <h2 className="font-semibold text-gray-700 bg-white p-5">Account Settings</h2>

        {user && (
          <div className="p-6 flex gap-4 items-center">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="w-14 h-14 rounded-full object-cover"
              />

              <div className="absolute bottom-0 right-0 bg-purple-600 w-4 h-4 rounded-full border-2 border-white"></div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                {user.fullname}
              </h3>
              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </div>
          </div>
        )}
        <div className="px-4 pb-6 text-sm text-gray-500">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </div>

        <div className="border-t border-dashed"></div>
        <div className="h-[300px]"></div>

      </div>
    </div>
  );
};

export default Account;