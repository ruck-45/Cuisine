const cuisines = [
  {
    name: "Search Recipes",
    image:
      "https://images.unsplash.com/photo-1627907228175-2bf846a303b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Customize Portions",
    image:
      "https://plus.unsplash.com/premium_photo-1694519942554-94c2766a66bd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Step By Step Guide",
    image:
      "https://images.unsplash.com/photo-1596450514659-4ff64fdde903?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fresh Ingredient Store",
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeaturedService = () => {
  return (
    <div className="flex flex-col items-start bg-white py-[3rem] px-[3rem] md:px-[5rem] gap-[3rem]">
      <h1 className="font-bold text-[2rem]">Featured Services</h1>
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

export default FeaturedService;
