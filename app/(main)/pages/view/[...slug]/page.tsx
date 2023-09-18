import React from 'react';

const DetailPage = ({ params }: { params: any }) => {

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Detail with slug { params?.slug[0] } Page { params?.slug[1] }</h5>
                    <p>Use this page to start from scratch and place your custom content.</p>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
