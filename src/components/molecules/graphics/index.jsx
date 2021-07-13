import React from 'react';
import { Bar } from 'react-chartjs-2';

export const Graphics = ({ income, expenses }) => {
    const data = {
        labels: [ 'Ingresos', 'Gastos'],
        datasets: [
            {
                label: 'Saldo',
                data: [income, expenses],
                backgroundColor: [
                    '#2ea043',
                    'rgb(229,61,47)',
                    '#00796B'
                ]
            }
        ]
    }

    const option = {
        maintainAspectRatio: false,
        responsive: true
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Bar data={ data } options={ option } />
        </div>
    )
}
