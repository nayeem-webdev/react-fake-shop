const CartItem = () => {
  return (
    <div>
      <div className="flex items-center justify-between border-b py-4">
        <div className="flex items-center">
          <img
            className="w-16 h-16 object-cover rounded mr-4"
            src="https://images.pexels.com/photos/4173156/pexels-photo-4173156.jpeg"
            alt="Smart Refrigerator"
          />
          <div>
            <h2 className="font-bold text-lg">Smart Refrigerator</h2>
            <p className="text-gray-600">Quantity: 1</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-lg font-bold text-green-600">৳799.99</p>
          <button className="ml-4 bg-red-500 text-white p-1 rounded hover:bg-red-700">
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
