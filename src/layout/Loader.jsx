const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-white">
      <div className="flex gap-4 mb-6">
        <div
          className="w-2 h-2 rounded-full bg-black animate-side"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-2 rounded-full bg-black animate-side"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-2 rounded-full bg-black animate-side"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
      <h2 className="text-xs font-light tracking-[0.3em] uppercase text-zinc-500">
        Loading...
      </h2>
      <div className="flex gap-4 mt-6">
        <div
          className="w-2 h-2 rounded-full bg-black animate-side"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-2 rounded-full bg-black animate-side"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-2 rounded-full bg-black animate-side"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
