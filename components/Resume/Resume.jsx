import React, { useState } from 'react';
import { awardsData } from './AwardsData';

const Awards = () => {
    const [activeTab, setActiveTab] = useState('education'); // State untuk menyimpan tab aktif (education atau experience)

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderTabs = () => {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`button button-sm me-2 me-lg-3 mb-2 ${activeTab === 'education' ? 'active' : ''}`}
                        onClick={() => handleTabClick('education')}
                    >
                        Education
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`button button-sm me-2 me-lg-3 mb-2 ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => handleTabClick('experience')}
                    >
                        Experience
                    </button>
                </li>
            </ul>
        );
    };

    const renderContent = () => {
        const data = activeTab === 'education' ? awardsData.education : awardsData.experience;

        return (
            <div className="row g-4 g-xl-5">
                <div className="col-12 col-xl-4">
                    <span className="title-heading text-white-04">{awardsData.mainData.title}</span>
                    <h1 className="display-3 fw-medium mb-0">
                        {awardsData.mainData.title2}
                        <span className="text-gradient">{awardsData.mainData.title2Span}</span>
                    </h1>
                </div>
                <div className="col-12 col-xl-8">
                    {renderTabs()}
                    <div className="row g-4">
                        {data.items.map((item, index) => (
                            <div key={index} className="col-12 col-md-6">
                                <div className="fancy-box">
                                    <h4>{item.title}</h4>
                                    <h6 className="sm-heading text-white-04 mb-2">{item.date}</h6>
                                    <h6 className="sm-heading text-white-04 mb-2"><i>{item.date2}</i></h6>
                                    <p>{item.description}</p>
                                    <p>{item.description2}</p>
                                </div>
                            </div>
                        ))}
                    </div> {/* end row(inner) */}
                </div>
            </div>
        );
    };

    return (
        <div id="resume" className="section pb-0">
            <div className="container">
                {renderContent()}
            </div>
        </div>
    );
};

export default Awards;
