const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-brand-navy z-999999 fixed top-0left-0">
      <div className="flex gap-4 mb-6">
        <div
          className="w-2 h-2 bg-brand-orange animate-side"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-2 bg-brand-orange animate-side"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-2 bg-brand-orange animate-side"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
      <h2 className="text-[20px] font-light  uppercase text-white">
        Loading...
      </h2>
      <div className="flex gap-4 mt-6">
        <div
          className="w-2 h-2 bg-brand-orange animate-side"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-2 bg-brand-orange animate-side"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-2 bg-brand-orange animate-side"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
