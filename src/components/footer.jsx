import React from 'react'
import IconProtfolio from '../image/icon_portfolio.png'
import '../style/footer.css'

export const FooterBlock = () =>{
    return <div className='footer'>
        <div className='icon'><img src={IconProtfolio} alt="Icon Portfolio"/></div>
        <div className='text'>
            <div>© 2022 Олександр Лоборчук | <a href="/">Веб-дизайн. Створення сайтів </a></div>
            <div>Копіювання матеріалів дозволено лише з активним посиланням на джерело</div>
        </div>
        <div className='text'><a href="/">Політика конфіденційності</a></div>
    </div>
}