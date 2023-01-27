import React from "react";

const Contact = () => {
  const handleSubmit = () => {
    return null;
  };

  return (
    <div className="h-screen pt-36 bg-customDarkPurple">
      <div className="flex flex-col items-center mt-4 mx-auto w-[32rem]">
        <h1 className="text-6xl">BİZE ULAŞIN</h1>
        <form className="w-full pt-16" onSubmit={handleSubmit}>
          <input type="text" placeholder="İSİM SOYİSİM" className="w-full" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
