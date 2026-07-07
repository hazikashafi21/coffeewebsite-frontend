import { useState } from "react";
import { useNavigate } from "react-router-dom";

const coffeeMenu = [
  { id: 1, name: "Espresso", price: 120 },
  { id: 2, name: "Latte", price: 160 },
  { id: 3, name: "Cappuccino", price: 170 },
  { id: 4, name: "Mocha", price: 190 },
  { id: 5, name: "Cold Coffee", price: 180 },
  { id: 6, name: "Caramel Latte", price: 210 }
];

function OrderPage() {

  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  const [payment, setPayment] = useState("COD");

  const [cart, setCart] = useState(
    coffeeMenu.map(coffee => ({
      ...coffee,
      quantity: 0
    }))
  );

  const handleCustomer = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  };

  const increase = (id) => {

    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));

  };

  const decrease = (id) => {

    setCart(cart.map(item =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 0
              ? item.quantity - 1
              : 0
          }
        : item
    ));

  };

  const selectedItems = cart.filter(
    item => item.quantity > 0
  );

  const totalItems = selectedItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleSubmit = (e) => {

    e.preventDefault();

    if(customer.name.trim()===""){
      alert("Enter your name");
      return;
    }

    if(!/^\d{10}$/.test(customer.phone)){
      alert("Enter a valid mobile number");
      return;
    }

    if(customer.address.trim()===""){
      alert("Enter your address");
      return;
    }

    if(selectedItems.length===0){
      alert("Select at least one coffee.");
      return;
    }
    if(payment==="COD"){

      navigate("/thankyou",{
        state:{
          customer,
          items:selectedItems,
          totalPrice,
          payment
        }
      });

    }

    else{

      navigate("/payment",{
        state:{
          customer,
          items:selectedItems,
          totalPrice,
          payment
        }
      });

    }

  };

  return (

  <div className="min-h-screen bg-[#f8f5f2] py-28 px-4">

    <div className="max-w-5xl mx-auto">

      <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 md:p-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#5c3b1e] mb-8">
          ☕ Order Your Coffee
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={customer.name}
            onChange={handleCustomer}
            className="w-full p-4 mb-4 border border-gray-300 rounded-xl text-base outline-none transition-all duration-300 focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20"
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={customer.phone}
            onChange={handleCustomer}
            className="w-full p-4 mb-4 border border-gray-300 rounded-xl text-base outline-none transition-all duration-300 focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20"
          />

          <textarea
            name="address"
            rows="3"
            placeholder="Delivery Address"
            value={customer.address}
            onChange={handleCustomer}
            className="w-full p-4 mb-4 border border-gray-300 rounded-xl resize-none text-base outline-none transition-all duration-300 focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={customer.city}
            onChange={handleCustomer}
            className="w-full p-4 mb-4 border border-gray-300 rounded-xl text-base outline-none transition-all duration-300 focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={customer.pincode}
            onChange={handleCustomer}
            className="w-full p-4 mb-8 border border-gray-300 rounded-xl text-base outline-none transition-all duration-300 focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20"
          />

          <h2 className="text-2xl sm:text-3xl font-bold text-[#5c3b1e] mb-6">
            Choose Your Coffee
          </h2>

          <div className="flex flex-col gap-5">

            {cart.map((coffee) => (

              <div
                key={coffee.id}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-[#faf7f2] rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >

                <div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#4b2e1f]">
                    {coffee.name}
                  </h3>

                  <p className="text-gray-500 font-semibold mt-1">
                    ₹{coffee.price}
                  </p>

                </div>

                <div className="flex items-center gap-4 mt-5 sm:mt-0">

                  <button
                    type="button"
                    onClick={() => decrease(coffee.id)}
                    className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white text-2xl hover:bg-[#6f4527] transition"
                  >
                    −
                  </button>

                  <span className="text-lg font-bold w-6 text-center">
                    {coffee.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => increase(coffee.id)}
                    className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white text-2xl hover:bg-[#6f4527] transition"
                  >
                    +
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-10 bg-[#f8f3ee] rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-[#5c3b1e] mb-5">
              Order Summary
            </h2>

            {selectedItems.length === 0 ? (

              <p className="text-gray-500">
                No coffee selected.
              </p>

            ) : (

              selectedItems.map((item) => (

                <div
                  key={item.id}
                  className="flex justify-between py-2"
                >

                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span className="font-semibold">
                    ₹{item.quantity * item.price}
                  </span>

                </div>

              ))

            )}

            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold mt-4">

  <strong>Total Items</strong>

  <strong>{totalItems}</strong>

</div>

<div className="flex justify-between text-xl font-bold text-[#5c3b1e] mt-3">

  <strong>Total Price</strong>

  <strong>₹{totalPrice}</strong>

</div>

</div>

<h2 className="text-2xl sm:text-3xl font-bold text-[#5c3b1e] mt-10 mb-6">
  Payment Method
</h2>

<div className="flex flex-col sm:flex-row gap-5 sm:gap-10 mb-8">

  <label className="flex items-center gap-2 cursor-pointer">

    <input
      type="radio"
      value="COD"
      checked={payment === "COD"}
      onChange={(e) => setPayment(e.target.value)}
      className="accent-[#8B5E3C]"
    />

    Cash On Delivery

  </label>

  <label className="flex items-center gap-2 cursor-pointer">

    <input
      type="radio"
      value="CARD"
      checked={payment === "CARD"}
      onChange={(e) => setPayment(e.target.value)}
      className="accent-[#8B5E3C]"
    />

    Card Payment

  </label>

</div>

<button
  type="submit"
  className="w-full bg-[#e6b566] text-[#3f2418] py-4 rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
>
  Place Order
</button>

</form>

</div>

</div>

</div>

  );

}

export default OrderPage;

           