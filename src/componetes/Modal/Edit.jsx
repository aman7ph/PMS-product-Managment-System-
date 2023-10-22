import React, { useContext } from 'react';
import './ModalStyle.scss';
import { Context } from '../Table';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

const Edit = ({ show, crudNum, close }) => {
    const [selectedProduct, setSelectedProduct] = useContext(Context);

    function handleChange(event) {
        const { name, value } = event.target;
        setSelectedProduct((prevselectedProduct) => {
            return {
                ...prevselectedProduct,
                [name]: value,
            };
        });
    }

    const handleUpdate = async (e) => {};

    return (
        <div>
            {show && crudNum === 3 ? (
                <div className="modalContainer" onClick={() => close()}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal_header">
                            <h2 className="modal_header-title">Edit Product</h2>
                            <button className="close" onClick={() => close()}>
                                <img src="x.svg" alt="close" />
                            </button>
                        </div>
                        <div className="modal_content">
                            <input
                                type="text"
                                placeholder="Product Name"
                                onChange={handleChange}
                                name="name"
                                value={selectedProduct.name}
                            />
                            <input
                                type="text"
                                placeholder="Price"
                                onChange={handleChange}
                                name="price"
                                value={selectedProduct.price}
                            />
                            <input
                                type="text"
                                placeholder="Available Quantity"
                                onChange={handleChange}
                                name="quantity"
                                value={selectedProduct.quantity}
                            />
                            <textarea
                                type="text"
                                placeholder="Product Description"
                                onChange={handleChange}
                                name="description"
                                value={selectedProduct.description}
                            />
                        </div>
                        <div className=" modal_footer">
                            <button
                                className="modal-close"
                                onClick={() => close()}
                            >
                                Cancel
                            </button>
                            <button className="submit" onClick={handleUpdate}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Edit;
