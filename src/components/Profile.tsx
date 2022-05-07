import React from 'react';
import p from './Profile.module.css';

export function Profile() {
    return (
        <main className={p.profile}>
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
                        WebSite: <a href="https://github.com/AV-html">github-page</a>
                    </div>
                </div>
            </div>
            <div className={p['new-post']}>
                <h3 className={p['new-post-title']}>My posts</h3>
                <div className={p['new-post-text']}>
                    <textarea cols={40} rows={5} placeholder="Your news..."></textarea>
                    <div className={p['wrap-btn']}>
                        <button type={'button'}>Publish</button>
                    </div>
                </div>

            </div>
            <ul className={p['post-list']}>
                <li className={p['post-item']}>
                    <div className={p['post-avatar']}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt=""/>
                    </div>
                    <p className={p['post-message']}>
                        Doloremque dolorum, exercitationem libero nam odit porro quaerat, sequi similique
                        tempore? Cumque, illum, optio.
                    </p>
                </li>
                <li className={p['post-item']}>
                    <div className={p['post-avatar']}>
                        <img src="https://litolan.ua/templates/europlast/resource/img/ceo.svg"
                             alt=""/>
                    </div>
                    <p className={p['post-message']}>
                        Consectetur adipisicing elit. Alias distinctio eius est
                        laborum magni rerum!
                    </p>
                </li>
                <li className={p['post-item']}>
                    <div className={p['post-avatar']}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt=""/>
                    </div>
                    <p className={p['post-message']}>
                        Adipisci aut culpa doloremque
                        dolorum, exercitationem libero nam odit porro quaerat, sequi
                    </p>
                </li>
            </ul>
        </main>
    );
}