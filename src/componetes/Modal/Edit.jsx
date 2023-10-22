import React from 'react';
import './ModalStyle.scss';

const Edit = ({ show, crudNum, close }) => {
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
                            <input type="text" placeholder="Product Name" />
                            <input type="text" placeholder="Price" />
                            <input
                                type="text"
                                placeholder="Available Quantity"
                            />
                            <textarea
                                type="text"
                                placeholder="Product Description"
                            />
                        </div>
                        <div className=" modal_footer">
                            <button
                                className="modal-close"
                                onClick={() => close()}
                            >
                                Cancel
                            </button>
                            <button className="submit">Submit</button>
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
