import React, { useContext, useState } from 'react';
import './ModalStyle.scss';
import { Context } from '../Table';
import { db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';

const Edit = ({ show, crudNum, close }) => {
    const [selectedProduct, setSelectedProduct] = useContext(Context);
    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const { name, value } = event.target;
        setSelectedProduct((prevselectedProduct) => {
            return {
                ...prevselectedProduct,
                [name]: value,
            };
        });

        setErrors({
            ...errors,
            [name]: null,
        });
    }

    const validateForm = () => {
        const newErrors = {};

        // Validation rules (you can customize these)
        if (formData.name.trim() === '') {
            newErrors.name = 'Product Name is required';
        }

        if (formData.price.trim() === '' || isNaN(formData.price)) {
            newErrors.price = 'Price must be a number';
        }

        if (formData.quantity.trim() === '' || isNaN(formData.quantity)) {
            newErrors.quantity = 'Quantity must be a number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                updateDoc(doc(db, 'productes', selectedProduct.id), {
                    ...selectedProduct,
                });
                close();
            } catch {}
        }
    };

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
                            {errors.name && (
                                <div className="error">{errors.name}</div>
                            )}
                            <input
                                type="text"
                                placeholder="Price"
                                onChange={handleChange}
                                name="price"
                                value={selectedProduct.price}
                            />
                            {errors.price && (
                                <div className="error">{errors.price}</div>
                            )}
                            <input
                                type="text"
                                placeholder="Available Quantity"
                                onChange={handleChange}
                                name="quantity"
                                value={selectedProduct.quantity}
                            />
                            {errors.quantity && (
                                <div className="error">{errors.quantity}</div>
                            )}
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
