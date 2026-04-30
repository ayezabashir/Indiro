const SplitLayout = ({
  bgImage,
  leftContent,
  rightContent,
  isAnimating,
  containerClassName = "",
  leftClassName = "",
  rightClassName = "",
}) => {
  return (
    <section
      className={`relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-brand-navy overflow-hidden ${containerClassName}`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000">
        <div
          className="absolute inset-0 block lg:hidden"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(2, 6, 23, 0.7) 0%, var(--color-brand-navy) 100%), url('${bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage: `linear-gradient(to right, transparent 0%, var(--color-brand-navy) 20%), url('${bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div
        className={`relative lg:static flex flex-col justify-center px-8 lg:px-16 py-20 z-10 ${leftClassName}`}
      >
        <div
          className={`transition-all duration-500 ease-out ${
            isAnimating
              ? "opacity-0 -translate-x-8"
              : "opacity-100 translate-x-0"
          }`}
        >
          {leftContent}
        </div>
      </div>
      <div
        className={`relative lg:static h-auto flex flex-col justify-center z-10 ${rightClassName}`}
      >
        <div
          className={`h-full w-full transition-all duration-700 ease-in-out ${
            isAnimating ? "opacity-0 scale-110" : "opacity-100 scale-100"
          }`}
        >
          {rightContent}
        </div>
      </div>
    </section>
  );
};

export default SplitLayout;
