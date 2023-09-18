import React from 'react';

const DetailPage = ({ params }: { params: { id: string } }) => {

    console.log('halo', params);
    
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Detail with { params?.id } Page</h5>
                    <p>Use this page to start from scratch and place your custom content.</p>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
