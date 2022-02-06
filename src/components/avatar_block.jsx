import Avatar from '../image/avatar3.jpg'
import '../style/avatar_block.css'
import Instagram from '../image/instagram.png'
import Telegram from '../image/telegram.png'
import Github from '../image/github.png'

export const AvatarBlock = ()=> {
    return <div className="avatar_block">
        <div className='avatar_block_img'>
            <img src={Avatar} className ='avatar' alt="User Avatar"/>
            <div className='name'>
                <div>Лоборчук Олександр Вікторович</div>
                <div>(Alex V. Loborchuk)</div>
            </div>
            <div className='name'>
                <a href='https://www.instagram.com/sanya_loborchuk/'><img src = {Instagram} alt="Instagram" className='contact_icons'/></a>
                <a href='https://t.me/Alex_Lobor'><img src = {Telegram} alt="Telegram" className='contact_icons'/></a>
                <a href='https://github.com/AlexLoborchuk'><img src = {Github} alt="Github" className='contact_icons'/></a>
            </div>
        </div>
    </div>
}
