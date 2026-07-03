export default function YoungPreneursProject() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Logo */}
      <div className="w-36 h-36 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-b from-yellow-400 to-orange-500 shadow-2xl">
        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="40"
            fontWeight="100"
            fontFamily="sans-serif"
            fill="url(#grad)"
          >
            Yp
          </text>
        </svg>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">YoungPreneurs</h1>
      <p className="text-xl text-muted-foreground mb-2 text-center">Startup Founder Network</p>
      <p className="text-muted-foreground mb-8 text-center">(2018 – 2019)</p>

      <div className="text-lg text-muted-foreground space-y-6 text-left w-full">
        <p>
          YoungPreneurs was my first design project and second venture, created to connect startup founders, co-founders, and early investors through a dedicated mobile platform. The goal was to make it easier for entrepreneurs to find essential collaborators and initial funding, with a long-term vision of expanding the network to include venture capitalists and broader startup support.
        </p>
        <p>
          Building YoungPreneurs offered early lessons in both product design and the startup ecosystem. The project emphasized the challenges founders face when seeking co-founders and funding, and highlighted how critical usability is when designing a platform for networking.
        </p>
        <p>
          Through the process, I gained insights into the importance of community, relationship-building, and streamlined user experiences — lessons that continue to shape how I approach product design and venture creation today.
        </p>
      </div>
    </div>
  );
}
