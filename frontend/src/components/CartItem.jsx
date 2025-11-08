export const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4 rounded">
      <div>
        <h4 className="font-semibold">{item.productId.name}</h4>
        <p>Qty: {item.quantity}</p>
      </div>
      <span className="text-blue-600 font-semibold">${item.price * item.quantity}</span>
    </div>
  );
};
