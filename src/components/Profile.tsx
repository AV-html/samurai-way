import React from 'react';

export function Profile() {
    return (
        <main className={'profile'}>
            <div className={'profile-header'}>
                <img
                    src="https://assets.ey.com/content/dam/ey-sites/ey-com/cs_cz/topics/tax/tax-alerts/2021/03/ey-tax-alert-green.jpg"
                    alt="profile-header"/>
            </div>
            <div className={'profile-info'}>
                <div className={'profile-avatar'}>
                    <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                         alt="avatar" width={200}/>
                </div>
                <div className={'profile-desc'}>
                    <div className={'desc-name'}>
                        Alexander Volkov
                    </div>
                    <div className={'desc-date'}>
                        Date: 30 october
                    </div>
                    <div className={'desc-city'}>
                        City: Moscow
                    </div>
                    <div className={'desc-educ'}>
                        Education: MAI'20
                    </div>
                    <div className={'desc-site'}>
                        WebSite: <a href="https://github.com/AV-html">github-page</a>
                    </div>
                </div>
            </div>
            <div className={'new-post'}>
                <h3 className={'new-post-title'}>My posts</h3>
                <div className={'new-post-text'}>
                    <textarea cols={30} rows={10} placeholder="Your news..."></textarea>
                </div>
                <div className={'wrap-btn'}>
                    <button type={'button'}>Publish</button>
                </div>
            </div>
            <ul className={'post-list'}>
                <li className={'post-item'}>
                    <div className={'post-avatar'}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt="" width={60} height={60}/>
                    </div>
                    <p className={'post-message'}>
                        Doloremque dolorum, exercitationem libero nam odit porro quaerat, sequi similique
                        tempore? Cumque, illum, optio.
                    </p>
                </li>
                <li className={'post-item'}>
                    <div className={'post-avatar'}>
                        <img src="https://litolan.ua/templates/europlast/resource/img/ceo.svg"
                             alt="" width={60} height={60}/>
                    </div>
                    <p className={'post-message'}>
                        Consectetur adipisicing elit. Alias distinctio eius est
                        laborum magni rerum!
                    </p>
                </li>
                <li className={'post-item'}>
                    <div className={'post-avatar'}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt="" width={60} height={60}/>
                    </div>
                    <p className={'post-message'}>
                        Adipisci aut culpa doloremque
                        dolorum, exercitationem libero nam odit porro quaerat, sequi similique tempore? Cumque,
                        illum, optio.
                    </p>
                </li>
            </ul>
        </main>
    );
}