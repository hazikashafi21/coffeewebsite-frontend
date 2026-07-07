import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const order = location.state;

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f5f2]">
        <h2 className="text-3xl font-bold text-[#4a2c20]">
          No order found
        </h2>
      </div>
    );
  }

  const { items = [], totalPrice } = order;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cardName.trim().length < 3) {
      alert("Enter valid card holder name");
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      alert("Card number must contain exactly 16 digits");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      alert("Expiry must be in MM/YY format");
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert("CVV must contain exactly 3 digits");
      return;
    }

    navigate("/thankyou", {
      state: {
        ...order,
        payment: "Card Payment",
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f2] flex justify-center items-center px-5 py-32">

      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8 md:p-10">

        <h1 className="text-4xl font-bold text-center text-[#4a2c20] mb-8">
          💳 Secure Payment
        </h1>

        {/* Order Summary */}

        <div className="bg-[#f8f3ee] rounded-2xl p-6 mb-8">

          <h2 className="text-2xl font-bold text-[#4a2c20] mb-5">
            Order Summary
          </h2>

          {items.length === 0 ? (
            <p className="text-gray-500">
              No items found
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-2 text-gray-700"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))
          )}

          <hr className="my-4" />

          <h3 className="text-xl font-bold text-[#4a2c20]">
            Total: ₹{totalPrice}
          </h3>

        </div>

        {/* Card Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Card Holder Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#8b5e3c]/20 transition"
          />

          <input
            type="text"
            placeholder="Card Number"
            maxLength="16"
            value={cardNumber}
            onChange={(e) =>
              setCardNumber(e.target.value.replace(/\D/g, ""))
            }
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#8b5e3c]/20 transition"
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="MM/YY"
              maxLength="5"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#8b5e3c]/20 transition"
            />

            <input
              type="password"
              placeholder="CVV"
              maxLength="3"
              value={cvv}
              onChange={(e) =>
                setCvv(e.target.value.replace(/\D/g, ""))
              }
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#8b5e3c]/20 transition"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-[#e6b566] text-[#3f2418] font-semibold py-4 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Pay Securely ₹{totalPrice}
          </button>

        </form>

      </div>

    </div>
  );
}

export default PaymentPage;