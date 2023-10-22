import React from 'react';
import './ModalStyle.scss';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const Delete = ({ show, crudNum, close, product }) => {
    const product1 = product[0];

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'productes', id));
        close();
    };

    return (
        <div>
            {show && crudNum === 4 ? (
                <div className="modalContainer" onClick={() => close()}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal_header">
                            <h2 className="modal_header-title">
                                Delete Product
                            </h2>
                            <button className="close" onClick={() => close()}>
                                <img src="x.svg" alt="close" />
                            </button>
                        </div>
                        <div className="modal_content">
                            Are you shure you Want to delete this product ?
                        </div>
                        <div className=" modal_footer">
                            <button
                                className="modal-close"
                                onClick={() => close()}
                            >
                                Cancel
                            </button>
                            <button
                                className="submit"
                                onClick={() => handleDelete(product1.id)}
                            >
                                Continue
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

export default Delete;
