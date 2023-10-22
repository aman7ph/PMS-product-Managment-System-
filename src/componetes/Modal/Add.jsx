import React, { useState } from 'react';
import './ModalStyle.scss';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

const Add = ({ show, crudNum, close }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        quantity: '',
        description: '',
    });

    const dbCollection = collection(db, 'productes');

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await addDoc(dbCollection, formData);
            close();
        } catch (error) {}
    };

    return (
        <div>
            {show && crudNum === 1 ? (
                <div className="modalContainer" onClick={() => close()}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal_header">
                            <h2 className="modal_header-title">Add Product</h2>
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
                                value={formData.name}
                            />
                            <input
                                type="text"
                                placeholder="Price"
                                onChange={handleChange}
                                name="price"
                                value={formData.price}
                            />
                            <input
                                type="text"
                                placeholder="Available Quantity"
                                onChange={handleChange}
                                name="quantity"
                                value={formData.quantity}
                            />
                            <textarea
                                type="text"
                                placeholder="Product Description"
                                onChange={handleChange}
                                name="description"
                                value={formData.description}
                            />
                        </div>
                        <div className=" modal_footer">
                            <button
                                className="modal-close"
                                onClick={() => close()}
                            >
                                Cancel
                            </button>

                            <button className="submit" onClick={handleAdd}>
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

export default Add;
