export function Brands() {
  // Sample brand logos - replace with actual client logos
  const brands = [
    {
      name: "Planova",
      logo: "https://via.placeholder.com/200x80/0B2B5D/FFFFFF?text=Planova",
    },
    {
      name: "Kema Group",
      logo: "https://via.placeholder.com/200x80/0B2B5D/FFFFFF?text=Kema+Group",
    },
    {
      name: "Dodai Manufacturing",
      logo: "https://via.placeholder.com/200x80/0B2B5D/FFFFFF?text=Dodai",
    },
    {
      name: "Client 4",
      logo: "https://via.placeholder.com/200x80/0B2B5D/FFFFFF?text=Client+4",
    },
    {
      name: "Client 5",
      logo: "https://via.placeholder.com/200x80/0B2B5D/FFFFFF?text=Client+5",
    },
    {
      name: "Client 6",
      logo: "https://via.placeholder.com/200x80/0B2B5D/FFFFFF?text=Client+6",
    },
  ];

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2B5D] mb-4">
            We have proudly served brands, Just like YOU!
          </h2>
          <div className="w-24 h-1 bg-[#EC820C] mx-auto"></div>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling brands */}
          <div className="flex gap-12 animate-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="shrink-0 bg-white border-2 border-gray-200 rounded-sm p-6 hover:border-[#EC820C] transition-colors"
                style={{ width: "200px", height: "100px" }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
