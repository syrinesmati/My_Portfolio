const SectionGlowBackground = () => {
  return (
    <>
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 480,
          height: 480,
          top: -80,
          right: -100,
          background: "hsl(330 81% 60%)",
          filter: "blur(120px)",
          opacity: 0.14,
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 360,
          height: 360,
          bottom: "10%",
          left: -80,
          background: "hsl(280 70% 50%)",
          filter: "blur(100px)",
          opacity: 0.12,
        }}
      />
    </>
  );
};

export default SectionGlowBackground;
