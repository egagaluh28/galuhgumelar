// Awards.js

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
                        className={`nav-link ${activeTab === 'education' ? 'active' : ''}`}
                        onClick={() => handleTabClick('education')}
                    >
                        Education
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`}
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
            <div>
                <h2>{data.title}</h2>
                {data.items.map((item, index) => (
                    <div key={index} className="fancy-box">
                        <h4>{item.title}</h4>
                        <h6 className="sm-heading text-white-04 mb-2">{item.date}</h6>
                        <p>{item.description}</p>
                        <p>{item.description2}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div id="awards" className="section pb-0">
            <div className="container">
                <div className="row g-4 g-xl-5">
                    <div className="col-12">
                        {renderTabs()}
                        <div className="tab-content">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;
