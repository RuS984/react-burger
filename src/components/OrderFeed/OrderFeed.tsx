import React, { FC } from 'react';
import Feed from './Feed/Feed';
import FeedSection from './OrdersQueue/OrdersQueue';
import styles from './OrderFeed.module.css'


const OrderFeed: FC = () => {

    return (
        <section className={styles.section}>
            <Feed />
            <FeedSection />
        </section>
    );
};

export {OrderFeed}