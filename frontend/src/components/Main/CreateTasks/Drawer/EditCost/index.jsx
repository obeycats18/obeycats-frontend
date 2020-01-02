import React from 'react';

import './style.scss'
import {Item} from 'components/common';
import { useState } from 'react';

const EditCost = props => {

    const Coin = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#F29C1F"/>
            <path d="M11.5117 9.38086C12.1419 9.56706 12.6146 9.96094 12.9297 10.5625C13.2591 11.1641 13.3092 11.7871 13.0801 12.4316C12.9082 12.9043 12.6146 13.2839 12.1992 13.5703C11.7839 13.8424 11.3184 13.9857 10.8027 14V15.0312C10.8027 15.1315 10.7669 15.2103 10.6953 15.2676C10.638 15.3392 10.5592 15.375 10.459 15.375H9.77148C9.67122 15.375 9.58529 15.3392 9.51367 15.2676C9.45638 15.2103 9.42773 15.1315 9.42773 15.0312V14C8.74023 14 8.12435 13.7852 7.58008 13.3555C7.49414 13.2839 7.44401 13.1979 7.42969 13.0977C7.41536 12.9974 7.45117 12.9115 7.53711 12.8398L8.26758 12.1094C8.41081 11.9805 8.55404 11.9661 8.69727 12.0664C8.91211 12.2096 9.1556 12.2812 9.42773 12.2812H10.8457C11.0319 12.2812 11.1823 12.224 11.2969 12.1094C11.4258 11.9805 11.4902 11.8229 11.4902 11.6367C11.4902 11.3216 11.3398 11.1211 11.0391 11.0352L8.82617 10.3906C8.33919 10.2474 7.93099 9.98958 7.60156 9.61719C7.27214 9.24479 7.07878 8.8151 7.02148 8.32812C6.96419 7.6263 7.16471 7.02474 7.62305 6.52344C8.0957 6.00781 8.68294 5.75 9.38477 5.75H9.42773V4.71875C9.42773 4.61849 9.45638 4.53971 9.51367 4.48242C9.58529 4.41081 9.67122 4.375 9.77148 4.375H10.459C10.5592 4.375 10.638 4.41081 10.6953 4.48242C10.7669 4.53971 10.8027 4.61849 10.8027 4.71875V5.75C11.4902 5.75 12.1061 5.96484 12.6504 6.39453C12.7363 6.46615 12.7865 6.55208 12.8008 6.65234C12.8151 6.7526 12.7793 6.83854 12.6934 6.91016L11.9629 7.64062C11.8197 7.76953 11.6764 7.78385 11.5332 7.68359C11.3184 7.54036 11.0749 7.46875 10.8027 7.46875H9.38477C9.19857 7.46875 9.04102 7.5332 8.91211 7.66211C8.79753 7.77669 8.74023 7.92708 8.74023 8.11328C8.74023 8.24219 8.7832 8.36393 8.86914 8.47852C8.95508 8.5931 9.0625 8.67188 9.19141 8.71484L11.5117 9.38086Z" fill="white"/>
        </svg>
    )

    const {
        handleUpdate
    } = props

    const [value, setValue] = useState(null)

    const handleChange = e => {
        setValue(parseInt(e.target.value))
    }

    const handleBlur = () => {
        handleUpdate({cost: value})
    }

    return (
        <div className="edit-cost">
            <div className="description-section">
                <p>Сложность задачи (сторипоинт)</p>
            </div>
            <Item
                type='number'
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                classname='cost-input'
            ><span className='coint'>{Coin}</span></Item>
        </div>
    );
};

export default EditCost;