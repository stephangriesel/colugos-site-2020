import React from 'react'

export default function Title({ title }) {
    return (
        <div className="row">
            <div className="col text-center mb-3">
                <h2 className="font-weight-bold text-uppercase">{title}</h2>
            </div>
        </div>
    )
}
