import React, { FC, useEffect, useState } from 'react';
import styles from './FeedInfo.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { AppDispatch, RootState, useDispatch, useSelector } from '../../../utils/Types/reduxThunkTypes';
import { useLocation, useParams } from 'react-router-dom';
import { getIngredients } from '../../../services/actions/ingredients';
import { WSClose, WSStart } from '../../../services/actions/ordersFeed';
import { WSCloseUser, WSStartUser } from '../../../services/actions/ordersFeedUser';
import { TOrdersFeedUserPropsUser } from '../../../utils/Types/ordersFeedTypesUser';
import { TBurgerIngredientsProps } from '../../../utils/Types/ingredientsTypes';

const FeedInfo: FC = () => {
    const location = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const ingredientsList = useSelector((state: RootState) => state.ingredients.data);
    const ordersPublic = useSelector((state: RootState) => state.ordersFeed.orders);
    const ordersUser = useSelector((state: RootState) => state.ordersUserFeed.orders);
    const [selectedOrder, setSelectedOrder] = useState<TOrdersFeedUserPropsUser>();

    const accessToken = localStorage.getItem("accessToken") as string;
    const token = accessToken.split('Bearer ')[1];
    console.log('accessToken: ', accessToken);

    const {id} = useParams() ;

    useEffect(() => {
        if (location.pathname.startsWith('/feed')) {
            dispatch(getIngredients());
            dispatch(WSStart());

        } 
    
        return () => {
            dispatch(WSClose());
        };
    }, [location.pathname]);
    
    useEffect(() => {
        if (location.pathname.startsWith('/profile')) {
            dispatch(getIngredients());
            if (accessToken !== undefined) {
                dispatch(WSStartUser(token));
            }
        } 
    
        return () => {
            dispatch(WSCloseUser());
        };
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname.startsWith('/feed')) {
            if (ordersPublic.length > 0 )
            {
                setSelectedOrder((ordersPublic.find((item) => item._id === id)))
            }
        };
        if (location.pathname.startsWith('/profile/orders/')) {
            if (ordersPublic.length > 0 )
                {
                    setSelectedOrder((ordersUser.find((item) => item._id === id)))
                }
        };

    }, [ordersPublic, ordersUser]);

    const infoItem = (): TBurgerIngredientsProps[] => {
        const ingredientId: string[] = selectedOrder ? selectedOrder.ingredients : [];
        return ingredientsList.filter(item => ingredientId.includes(item._id));
    };

    const itemsNumbers = (item: TBurgerIngredientsProps): number | undefined => {
        if (selectedOrder) {
            const count = selectedOrder.ingredients.filter(itm => itm === item._id).length;
            return count;
        }
    };

    const calculateTotalPrice = (): number => {
        return infoItem().reduce((acc: number, item: TBurgerIngredientsProps) => {
            if (item.type === 'bun') {
                return acc + (item.price * 2);
            }
            return acc + item.price;
        }, 0);
    };

    const getOrderStatus = (): string => {
        switch (selectedOrder?.status) {
            case 'done':
                return 'Выполнен';
            case 'pending':
                return 'В работе';
            case 'created':
            default:
                return 'Создан';
        }
    };

    const statusText = getOrderStatus();

    return (
        <main className={styles.main}>
            {selectedOrder 
              && (
                <>
                    <h2 className={styles.header}>
                        #{selectedOrder.number}
                    </h2>

                    <h2 className={styles.text}>
                        {selectedOrder.name}
                    </h2>

                    <div className={`${styles.state} ${styles[selectedOrder.status]}`}>
                        {statusText}
                    </div>

                    <p className={styles.text}>
                        Состав:
                    </p>

                    <div className={`${styles.scroller} custom-scroll`}>
                        {infoItem().map((item, key) => (
                            <div key={key} className={styles.ingredient}>
                                <div className={styles.ingredientWarpper}>
                                    <div className={styles.image}>
                                        <img alt={item.name} src={item.image} />
                                    </div>
                                    <p className={styles.title}>
                                        {item.name}
                                    </p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.numbers}>
                                        {`${itemsNumbers(item)} x ${item.price}`}
                                    </div>
                                    <div className={styles.primaryFeed}>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.bottom}>
                        <div className={`${styles.time} text_color_inactive`}>
                            <FormattedDate date={new Date(selectedOrder.createdAt)} />
                        </div>
                        <div className={styles.priceAll}>
                            <div className={styles.currency}> 
                                <CurrencyIcon type="primary" /> 
                            </div>
                            <div className={styles.ingredientsPrice}>
                                {calculateTotalPrice()}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
};

export { FeedInfo };
