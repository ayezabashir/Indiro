import React from 'react';
import ShiftingButton from '../common/ShiftingButton'; // Aapka existing component

const CommentSection = ({ commentCount = 0 }) => {
  return (
    <div className=" mx-auto font-sans">
      
      {/* 0 Comments Heading */}
      <div className="mb-12 mt-12">
        <h3 className="text-white text-3xl [word-spacing:0.3rem] font-bold font-[Oswald] mb-2 tracking-tight">
          {commentCount} Comments
        </h3>
        <div className="w-16 h-1 bg-[#fb4e14]"></div>
      </div>

      {/* Leave Your Comment Heading */}
      <div className="mb-10">
        <h3 className="text-white text-2xl [word-spacing:0.3rem] font-bold font-[Oswald] mb-2 tracking-tight">
          Leave Your Comment
        </h3>
        <div className="w-16 h-1 bg-[#fb4e14]"></div>
      </div>

      {/* Form Section */}
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-[#152236] border border-zinc-800 p-5 text-white focus:outline-none focus:border-zinc-600 placeholder:text-white transition-colors"
          />
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#152236] border border-zinc-800 p-5 text-white focus:outline-none focus:border-zinc-600 placeholder:text-white transition-colors"
          />
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Add a Comment"
          rows="6"
          className="w-full bg-[#152236] border border-zinc-800 p-5 text-white focus:outline-none focus:border-zinc-600 placeholder:text-white transition-colors resize-none"
        ></textarea>

        {/* Submit Button */}
     
        <div className="pt-4">
          <ShiftingButton 
          >
            SUBMIT
          </ShiftingButton>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;