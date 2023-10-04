import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [react(), svgr()],
})

import * as React from 'react'
import axios from 'axios'
import './App.css'

import { ReactComponent as Check } from './check.svg'

const Item = ({ item, onRemoveItem }) => (
    <li className="item">
        <span style={{ width: '40%' }}>
            <a href={item.url}>{item.title}</a>
        </span>

        <span style={{ width: '30%' }}>{item.author}</span>
        <span style={{ width: '10%' }}>{item.num_comments}</span>
        <span style={{ width: '10%' }}>{item.points}</span>
        <span style={{ width: '10%' }}>
            <button
                type='button'
                onClick={ () => onRemoveItem(item)}
                className='button button_small'
            >
                <Check height="18px" width="18px" />
            </button>
        </span>
    </li>
)