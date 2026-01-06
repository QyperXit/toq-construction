
export function TrustedBy() {
  const logos = [
    { name: "Marriott", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Marriott_International_logo.svg/2560px-Marriott_International_logo.svg.png", class: "h-6" },
    { name: "Hilton", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hilton_Worldwide_logo.svg/2560px-Hilton_Worldwide_logo.svg.png", class: "h-8" },
    { name: "Hyatt", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hyatt_Hotels_Corporation_logo.svg/2560px-Hyatt_Hotels_Corporation_logo.svg.png", class: "h-6" },
    { name: "IHG", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/IHG_Hotels_%26_Resorts_logo.svg/2560px-IHG_Hotels_%26_Resorts_logo.svg.png", class: "h-8" },
  ];

  return (
    <div className="border-y border-slate-200 bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-sm text-slate-400 font-medium whitespace-nowrap">Trusted by industry leaders:</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <img 
              key={logo.name}
              src={logo.url} 
              className={`${logo.class} object-contain`} 
              alt={logo.name} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
