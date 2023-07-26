const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className='h-full overflow-auto'
      style={{
        backgroundImage: "url('/filler.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='mx-auto max-w-screen-xl h-full w-full'>{children}</div>
    </main>
  );
};

export default LandingLayout;
