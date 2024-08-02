import React, { useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";
import { Category, Product } from "types/redux";
import { AppThunk } from "redux_state/config/types";
import { AppDispatch } from "redux_state/config/store";
import { useNavigate, useParams } from "react-router";
import { Text } from "styles/typography/Text";

import Logo from 'assets/icons/CD-Logo.jpeg';

import './CategoryScreen.css'
import { getCategoryByIdAction, getProductsByIdAction } from "redux_state/actions/actions";



export default function CategoryScreen() {
    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const productsById = useSelector((state: { content: { productsById: [Product] } }) => state?.content?.productsById);
    const categoryById = useSelector((state: { content: { categoryById: Category } }) => state?.content?.categoryById);



    useEffect(() => {
        dispatch(getProductsByIdAction(id as string) as AppThunk);
        dispatch(getCategoryByIdAction(id as string) as AppThunk);
    }, [id])


    return (
        <div className="category-screen">
            <div className="category--header">
                <Text style={{ cursor: 'pointer' }} weight="bold" tag="h4" color="gray" onClick={() => navigate('/')}>{"<"}</Text>
                <Text weight="bold" tag="subtitle1">{categoryById?.name}</Text>
                <img src={Logo} height={40} width={40} />

            </div>
            <div className="category--items">
                {productsById?.map(el => {
                    return <div className="category--item">
                        <div>
                            <Text tag="body1" weight="bold">{el.name}</Text>
                            <Text tag="body2" color="gray">{el.description}</Text>

                        </div>
                        <div>
                            <Text tag="body1" color="gray" weight="bold">{el.price}</Text>
                        </div>
                    </div>
                })}
            </div>
        </div >)
}