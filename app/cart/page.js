import data from "./data.js";

export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4>Cart</h4>
      <CartItem 상품={장바구니[0]} />
      <CartItem 상품={장바구니[1]} />
      <Banner card="롯데카드" />
      <Banner card="현대카드" />
      <Button color="blue" />
    </div>
  );
}

function Button(props) {
  return <button style={{ background: props.color }}>버튼</button>;
}
function Banner(props) {
  return;
  <h5>{props.card} 결제 행사중</h5>;
}
function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.상품}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
