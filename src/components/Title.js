import React from 'react';

export default function Title({text}) {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto text-center text-title my-4">
                <h1 className="text-capitalize font-weight-bold">
                    {text}
                </h1>
            </div>
        </div>
        </div>
    )
}
