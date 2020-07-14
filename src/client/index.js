import React from 'react';
import App from './components/App';
import { render } from 'react-dom';

import reactMonitor from 'reactmonitorfiber'

import './styles/index.scss';

const container = document.querySelector('#root');
render(<App />, container);
reactMonitor(container);
