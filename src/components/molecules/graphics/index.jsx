import React from 'react';
import { Bar } from 'react-chartjs-2';
import './graphics.css'

export const Graphics = ({ income, expenses, debts, debtsPaid }) => {
    const data = {
        labels: ['Ingresos', 'Gastos', 'Deudas'],
        datasets: [
            {
                label: 'Saldo',
                data: [income, (expenses + debtsPaid), (debts - debtsPaid)],
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
        <div className="content-graph-form">
            <div className="graph">
                <div style={{ width: '100%', height: '100%', background: '#FFFFFF' }}>
                    <Bar data={data} options={option} />
                </div>
            </div>
        </div >
    )
}
