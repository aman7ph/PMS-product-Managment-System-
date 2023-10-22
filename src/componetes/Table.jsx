import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import { db } from '../firebase';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import './Table.scss';

import Add from './Modal/Add';
import Detail from './Modal/Detail';
import Edit from './Modal/Edit';
import Delete from './Modal/Delete';

const Table = () => {
    const [productId, setProductId] = useState('');
    const [productData, setProductData] = useState([]);
    const [modal, setModal] = useState(false);
    const [crudNum, setCrudNum] = useState(0);
    const Toggle = () => setModal(!modal);

    const dbCollection = collection(db, 'productes');

    const handleDelete = async () => {
        await deleteDoc(doc(db, 'productes', productId));
        Toggle();
    };

    useEffect(
        () =>
            onSnapshot(dbCollection, (snapData) => {
                setProductData(
                    snapData.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                );
            }),
        []
    );

    return (
        <div className="app__table">
            <div className="table_header">
                <p>Producs</p>
                <div>
                    <input placeholder="products" />
                    <button
                        className="add_new clickme"
                        onClick={() => {
                            Toggle();
                            setCrudNum(1);
                        }}
                    >
                        + Add New
                    </button>
                </div>
            </div>
            <div className="app__table-section">
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Availability </th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {productData.map((product, index) => {
                            if (product) {
                                return (
                                    <tr key={index}>
                                        <td data-cell="No.">{index + 1}</td>
                                        <td data-cell="Name">{product.name}</td>
                                        <td data-cell="Price">{`${product.price}  Birr`}</td>
                                        <td data-cell="Quantity">
                                            {product.quantity}
                                        </td>
                                        <td
                                            data-cell="Availability"
                                            className={
                                                product.quantity === '0'
                                                    ? 'available'
                                                    : 'unavailable'
                                            }
                                        >
                                            {product.quantity === '0'
                                                ? 'out Stock'
                                                : 'in stock'}{' '}
                                        </td>
                                        <td data-cell="Action">
                                            <button
                                                className="clickme"
                                                onClick={() => {
                                                    Toggle();
                                                    setCrudNum(2);
                                                    setProductId(product.id);
                                                }}
                                            >
                                                <BiDetail />
                                            </button>
                                            <button
                                                className="clickme"
                                                onClick={() => {
                                                    Toggle();
                                                    setCrudNum(3);
                                                    setProductId(product.id);
                                                }}
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="clickme"
                                                onClick={() => {
                                                    Toggle();
                                                    setCrudNum(4);
                                                    setProductId(product.id);
                                                    handleDelete();
                                                }}
                                            >
                                                <MdDeleteForever />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </tbody>
                </table>
            </div>
            <Add show={modal} crudNum={crudNum} close={Toggle} />
            <Detail
                show={modal}
                crudNum={crudNum}
                close={Toggle}
                product={productData.filter((product) => {
                    return product.id === productId;
                })}
            />
            <Edit show={modal} crudNum={crudNum} close={Toggle} />
            <Delete
                show={modal}
                crudNum={crudNum}
                close={Toggle}
                ProductDelete={handleDelete}
            />
        </div>
    );
};

export default Table;
