export default function ProvalohProject() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Logo */}
      <div className="w-56 h-36 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-r from-blue-600 to-fuchsia-600 shadow-2xl">
        <span className="text-3xl font-light text-white tracking-widest">Provaloh</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Provaloh</h1>
      <p className="text-xl text-muted-foreground mb-2 text-center">Virtual Trial Room App</p>
      <p className="text-muted-foreground mb-8 text-center">(2017 – 2019)</p>

      <div className="text-lg text-muted-foreground space-y-6 text-left w-full">
        <p>
          Provaloh was my very first venture experience — a virtual trial room app designed to let users try on clothes digitally before making a purchase. The concept aimed to blend fashion with technology, reducing the uncertainty of online shopping while improving customer confidence in their choices.
        </p>
        <p>
          To bring this vision to life, I built and led a team of 10 people across engineering, marketing, business, and design. Together, we explored how to merge technical feasibility with customer needs while experimenting with different approaches to user experience and product delivery.
        </p>
        <p>
          As my first exposure to building a venture, Provaloh provided invaluable lessons in leadership, collaboration, and the fundamentals of product development. It showed me how bold ideas can spark new possibilities, and how execution and teamwork are key to turning vision into reality.
        </p>
      </div>
    </div>
  );
}
