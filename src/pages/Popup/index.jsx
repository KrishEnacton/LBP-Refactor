import React from 'react';
import { render } from 'react-dom';

import Home from './components/Home';
import './css/index.css';
import '../../tailwind/output.css';
import { i18nextInit } from '../../common/utils_global';
i18nextInit();

render(<Home />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
