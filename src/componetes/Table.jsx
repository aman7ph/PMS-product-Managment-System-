import React, { useEffect, useState, createContext } from 'react';
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

export const Context = createContext();

const Table = () => {
    const [productId, setProductId] = useState('X73ONmeQh2ASw59snxRC');
    const [selectedProduct, setSelectedProduct] = useState({});
    const [productData, setProductData] = useState([]);
    const [modal, setModal] = useState(false);
    const [crudNum, setCrudNum] = useState(0);
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState('ASC');

    const Toggle = () => setModal(!modal);
    const dbCollection = collection(db, 'productes');

    useEffect(() => {
        if (productId) {
            const product = productData.find(
                (product) => product.id === productId
            );
            setSelectedProduct(product);
        } else {
            setSelectedProduct(null);
        }
    }, [productId, productData]);

    useEffect(() => {
        onSnapshot(dbCollection, (snapData) => {
            setProductData(
                snapData.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            );
        });
    }, []);
    useEffect(() => {
        productData.length === 0 ? '' : setProductId(productData[0].id);
    }, [productData]);

    return (
        <div className="app__table">
            <div className="table_header">
                <p>Producs</p>
                <div>
                    <input
                        placeholder="products"
                        onChange={(e) => setSearch(e.target.value)}
                    />
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
                        {productData.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="6"
                                    rowSpan="2"
                                    className="td_color"
                                >
                                    There is no product yet, please add some
                                </td>
                            </tr>
                        ) : (
                            productData
                                .filter((item) => {
                                    return search.toLowerCase() === ''
                                        ? item
                                        : item.name
                                              .toLowerCase()
                                              .includes(search.toLowerCase());
                                })
                                .map((product, index) => {
                                    if (product) {
                                        return (
                                            <tr key={index}>
                                                <td data-cell="No.">
                                                    {index + 1}
                                                </td>
                                                <td data-cell="Name">
                                                    {product.name}
                                                </td>
                                                <td data-cell="Price">{`${product.price}  Birr`}</td>
                                                <td data-cell="Quantity">
                                                    {product.quantity}
                                                </td>
                                                <td data-cell="Availability">
                                                    <p
                                                        className={
                                                            product.quantity ===
                                                            '0'
                                                                ? 'unavailable'
                                                                : 'available'
                                                        }
                                                    >
                                                        {product.quantity ===
                                                        '0'
                                                            ? 'out Stock'
                                                            : 'in stock'}{' '}
                                                    </p>
                                                </td>
                                                <td data-cell="Action">
                                                    <button
                                                        className="clickme"
                                                        onClick={() => {
                                                            Toggle();
                                                            setCrudNum(2);
                                                            setProductId(
                                                                product.id
                                                            );
                                                        }}
                                                    >
                                                        <BiDetail />
                                                    </button>
                                                    <button
                                                        className="clickme"
                                                        onClick={() => {
                                                            Toggle();
                                                            setCrudNum(3);
                                                            setProductId(
                                                                product.id
                                                            );
                                                        }}
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                    <button
                                                        className="clickme"
                                                        onClick={() => {
                                                            Toggle();
                                                            setCrudNum(4);
                                                            setProductId(
                                                                product.id
                                                            );
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
                                })
                        )}
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
            <Context.Provider value={[selectedProduct, setSelectedProduct]}>
                <Edit
                    show={modal}
                    crudNum={crudNum}
                    close={Toggle}
                    product={selectedProduct}
                />
            </Context.Provider>
            <Delete
                show={modal}
                crudNum={crudNum}
                close={Toggle}
                product={productData.filter((product) => {
                    return product.id === productId;
                })}
            />
        </div>
    );
};

export default Table;
