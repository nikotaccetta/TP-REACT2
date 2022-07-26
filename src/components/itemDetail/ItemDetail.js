import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { id, name, description, price, img, stock } = item;
  const { addItem, updateItem, buyItem, getQuantity } = useCart();
  const navigate = useNavigate();

  const onAdd = (counter) => {
    addItem({ id, name, price, q: counter, img, stock });
  };

  const onBuy = (counter) => {
    buyItem([{ item: [{ id, name, price, q: counter }] }]);
    navigate("/checkout");
  };

  const onUpdate = (q) => {
    updateItem(id, q);
  };

  return (
    <div className="card mb-3 itemdetail">
      <div className="row g-0">
        <div className="col-md-4 img_header">
          <img src={img} className=" rounded-start" alt="Imagen de producto" />
        </div>
        <div className="col-md-8 card-body">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{description}</p>
            <p className="price">${price}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <ItemCount
                stock={stock}
                onAdd={onAdd}
                onBuy={onBuy}
                onUpdate={onUpdate}
                buyOption={true}
                informationOption={true}
                initial={getQuantity(id)}
              />
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
