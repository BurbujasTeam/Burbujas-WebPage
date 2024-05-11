/* eslint-disable react/prop-types */
export default function ProductCard({ item }) {
  return (
    <div className="border-2 border-yellow-400 p-1 rounded-md w-60 h-60">
      <figure className="w-full">
        <img
          src={item?.images[0]}
          alt={`images of the product ${item.name}`}
          className="block p-1 border-2 rounded-md border-white"
        />
      </figure>
      <h2>{item?.name}</h2>
    </div>
  );
}
