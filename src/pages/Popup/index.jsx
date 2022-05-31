import React from 'react';
import { render } from 'react-dom';

import Popup from './components/Popup';
import './css/index.css';
import '../../tailwind/output.css';

render(<Popup />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
