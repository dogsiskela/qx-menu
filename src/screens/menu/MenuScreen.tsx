import React, { useEffect } from "react";


import { Text } from "styles/typography/Text";
import { useDispatch, useSelector } from "react-redux";
import { Category, Location } from "types/redux";
import { getCategoriesAction, getLocationAction } from "redux_state/actions/actions";
import { AppThunk } from "redux_state/config/types";
import { AppDispatch } from "redux_state/config/store";
import { useNavigate } from "react-router";

import Logo from 'assets/icons/CD-Logo.jpeg';
import Cover from 'assets/icons/cover.jpeg';
import ShareIcon from 'assets/icons/share.svg';
import FindIcon from 'assets/icons/find.svg';
import CallIcon from 'assets/icons/call.svg';

import './MenuScreen.css'


export default function MenuScreen() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const allCategories = useSelector((state: { content: { categories: [Category] } }) => state?.content?.categories);
    const locationState = useSelector((state: { content: { location: Location } }) => state?.content?.location);



    useEffect(() => {
        dispatch(getLocationAction() as AppThunk);
        dispatch(getCategoriesAction() as AppThunk);
    }, [])


    return (
        <div className="menu-screen">
            <div className="menu--info">
                <img src={locationState?.cover ?? Cover} className="cover" />
                <div className="head">
                    <img src={locationState?.logo ?? Logo} height={60} width={60} />
                    <div>
                        <Text tag="h8" weight="bold">{locationState?.name}</Text>
                        <Text tag="body1">{locationState?.active ? "Open now" : "Closed"}</Text>
                    </div>
                </div>
                <div className="description">
                    <Text tag="body1">{locationState?.description}</Text>
                </div>
                <div className="action-buttons">
                    <div className="item">
                        <img src={CallIcon} height={30} width={30} />
                        <Text tag="body2">Call Restaurant</Text>
                    </div>
                    <div className="item">
                        <img src={FindIcon} height={30} width={30} />
                        <Text tag="body2">Find Restaurant</Text>
                    </div>
                    <div className="item">
                        <img src={ShareIcon} height={30} width={30} />
                        <Text tag="body2">Share</Text>
                    </div>
                </div>
            </div>
            <div className="menu--categories">
                <Text tag="h8" weight="bold">Menu</Text>
                <div className="list-categories">
                    {allCategories?.map(el => {
                        return <div className="category-item" onClick={() =>
                            navigate('/category/' + el.id)
                        }>
                            <div className="category-name">
                                <Text tag="subtitle2" color="white" weight="bold">{el.name}</Text>
                            </div>
                            <img src={el.logo} height={240} width={200} className="category-image" />
                        </div>
                    })}
                </div>
            </div>
            <div className="menu--footer">
                <Text tag="body2" color="gray"> You don't like what you see?</Text>
                <Text tag="body1" color="gray" weight="bold"> REPORT</Text>
            </div>
        </div>)
}