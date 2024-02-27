const cuisines = [
  {
    name: "Italian Cuisine",
    image:
      "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mexican Delights",
    image:
      "https://images.unsplash.com/photo-1628200472485-178afb2a53b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Classic American",
    image:
      "https://images.unsplash.com/photo-1508801176750-a71beee9862a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Asian Fusion",
    image:
      "https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeaturedRecepie = () => {
  return (
    <div className="flex flex-col items-start bg-white py-[3rem] px-[3rem] md:px-[5rem] gap-[3rem]">
      <h1 className="font-bold text-[2rem]">Featured Recepie Selections</h1>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-[1rem] md:gap-[2rem] lg:gap-[3rem]">
        {cuisines.map((data, index) => (
          <div className="cursor-pointer hover:scale-105 transition">
            <div
              className="bg-no-repeat bg-center bg-cover h-[15rem] rounded-3xl"
              style={{
                backgroundImage: `url("${data.image}")`,
              }}
            ></div>
            <p className="text-[1.2rem] font-bold text-center text-default-400">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecepie;
