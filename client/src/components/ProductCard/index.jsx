/* eslint-disable react/prop-types */
export default function ProductCard({ item }) {
  return (
    <div className="p-1 rounded-md w-72 h-80 shadow-2xl transition-all duration-500 hover:opacity-60">
      <figure className="flex items-center h-3/4">
        <img
          src={item?.images[0]}
          alt={`images of the product ${item.name}`}
          className="block mx-auto rounded-lg max-h-full max-w-full"
        />
      </figure>
      <h2 className="text-center text-black font-bold pt-2">{item?.name}</h2>
      <p className="text-right pr-2 pt-4 font-medium">${item?.price}</p>
    </div>
  );
}
