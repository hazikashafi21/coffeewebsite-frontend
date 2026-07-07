import { useLocation, useNavigate } from "react-router-dom";

function ThankYouPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const order = location.state;

  if (!order) {
    return (
      <div className="min-h-screen bg-[#f8f5f2] flex flex-col justify-center items-center px-5">
        <h2 className="text-3xl font-bold text-[#4a2c20] mb-6">
          No order found
        </h2>

        <button
          onClick={() => navigate("/")}
          className="bg-[#e6b566] text-[#3f2418] px-8 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const { customer, items = [], totalPrice, payment } = order;

  return (
    <div className="min-h-screen bg-[#f8f5f2] flex justify-center items-center px-5 py-28">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-10">

        {/* Header */}

        <div className="text-center">

          <div className="text-6xl mb-4">
            🎉
          </div>

          <h1 className="text-4xl font-bold text-[#4a2c20]">
            Thank You for Your Order!
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Your coffee is being prepared with love ☕
          </p>

        </div>

        {/* Customer Details */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-[#4a2c20] mb-4">
            👤 Customer Details
          </h2>

          <div className="space-y-2 text-gray-700">

            <p><strong>Name:</strong> {customer.name}</p>

            <p><strong>Phone:</strong> {customer.phone}</p>

            <p><strong>Address:</strong> {customer.address}</p>

            <p><strong>City:</strong> {customer.city}</p>

            <p><strong>Pincode:</strong> {customer.pincode}</p>

          </div>

        </div>

        <hr className="my-8" />

        {/* Order Summary */}

        <div>

          <h2 className="text-2xl font-bold text-[#4a2c20] mb-5">
            ☕ Order Summary
          </h2>

          {items.length === 0 ? (
            <p className="text-gray-500">
              No items in order
            </p>
          ) : (
            <div className="space-y-3">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between bg-[#f8f3ee] rounded-xl p-4"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span className="font-semibold">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}

            </div>
          )}

        </div>

        <hr className="my-8" />

        {/* Total */}

        <div className="bg-[#f8f3ee] rounded-2xl p-6 text-center">

          <h2 className="text-2xl font-bold text-[#4a2c20]">
            💰 Total Paid
          </h2>

          <h3 className="text-4xl font-bold text-[#8b5e3c] mt-2">
            ₹{totalPrice}
          </h3>

        </div>

        {/* Payment */}

        <div className="mt-8 text-center">

          <h3 className="text-2xl font-bold text-[#4a2c20]">
            💳 Payment Method
          </h3>

          <p className="mt-2 text-lg">
            {payment}
          </p>

          {payment === "Card Payment" ? (
            <p className="mt-3 font-semibold text-green-600 text-lg">
              Payment Successful ✔
            </p>
          ) : (
            <p className="mt-3 font-semibold text-orange-500 text-lg">
              Pay on Delivery 🚚
            </p>
          )}

        </div>

        {/* Button */}

        <button
          onClick={() => navigate("/")}
          className="w-full mt-10 bg-[#e6b566] text-[#3f2418] py-4 rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          Order More Coffee ☕
        </button>

      </div>

    </div>
  );
}

export default ThankYouPage;