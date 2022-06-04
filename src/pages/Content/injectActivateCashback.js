import React from 'react';
import { render } from 'react-dom';
import ActivatePopup from './components/ActivatePopup';
import ActivatedPopup from './components/ActivatedPopup';

export const renderCashbackActivatedPopup = (data) => {
  let element = document.createElement('div');
  element.id = 'cb_activate_popup';
  document.body.append(element);
  render(<ActivatedPopup data={data} />, element);
};

export const renderCashbackActivatePopup = (data) => {
  let element = document.createElement('div');
  element.id = 'cb_activated_popup';
  document.body.append(element);
  render(<ActivatePopup data={data} />, element);
};
