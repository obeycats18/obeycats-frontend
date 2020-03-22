import React from 'react';

import classNames from 'classnames'

import './style.scss'

const Block = ( {type, children} ) => <div className={classNames('block ',`${type}-block`) } >{children}</div>;

export default Block;