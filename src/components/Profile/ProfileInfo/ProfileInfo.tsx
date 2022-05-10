import p from './ProfileInfo.module.css';
import React from 'react';

export function ProfileInfo() {
    return (
        <>
            <div className={p['profile-header']}>
                <img
                    src="https://assets.ey.com/content/dam/ey-sites/ey-com/cs_cz/topics/tax/tax-alerts/2021/03/ey-tax-alert-green.jpg"
                    alt="profile-header"/>
            </div>
            <div className={p['profile-info']}>
                <div className={p['profile-avatar']}>
                    <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                         alt="avatar"/>
                </div>
                <div className={p['profile-desc']}>
                    <div className={p['desc-name']}>
                        Alexander Volkov
                    </div>
                    <div className={p['desc-date']}>
                        Date: 30 october
                    </div>
                    <div className={p['desc-city']}>
                        City: Moscow
                    </div>
                    <div className={p['desc-educ']}>
                        Education: MAI'20
                    </div>
                    <div className={p['desc-site']}>
                        <span>WebSite: </span>
                        <a href="https://github.com/AV-html"
                           target={'_blank'}
                           rel="noopener noreferrer">
                            github-page
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}