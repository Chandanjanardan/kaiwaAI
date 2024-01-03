import React, { useState } from 'react'
import user from "./user.svg"
import { Link } from 'react-router-dom'
import side from "./sidebar-img.png"
function Sidebar() {
    const [activeItem, setActiveItem] = useState('Dashboard'); // State to track active item

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };
  
  return (
    <nav>
        <div className="info">
            <div className="info-user">
                <img src='https://media.licdn.com/dms/image/D4D03AQF6f4kVR0cmNw/profile-displayphoto-shrink_400_400/0/1683708265013?e=1709164800&v=beta&t=zkMN7EP-WKPDHaylOokLbWgXRqAAxkaZm4uOoGVkNsY'/>    
            </div>
            <p className='info-role'>ADMIN</p>
            <p className="info-company">
                BlackBasil
            </p>
        </div>
        <div className="nav-container">
            <div   className={`dashboard ${activeItem === 'Dashboard' ? 'active' : ''}`}
                    onClick={() => handleItemClick('Dashboard')}
                >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" color='#D6A217' />
                </svg>
                <Link to="/">
            <h2>Dashboard</h2>
                </Link>

            </div>
            <div
                    className={`setting ${activeItem === 'Setting' ? 'active' : ''}`}
                    onClick={() => handleItemClick('Setting')}
                >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" color='#D6A217' />
</svg>
        <Link to="/setting">
            <h2>Setting</h2>
        </Link>

            </div>
            <div
                    className={`contact ${activeItem === 'Contact' ? 'active' : ''}`}
                    onClick={() => handleItemClick('Contact')}
                >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" color='#D6A217' />
</svg>
            <Link to="contact">
            <h2>Contact</h2>
            </Link>

            </div>
        </div>
        <div className="sidebar-footer">
            <img src={side}/>
            <h1>CONVERSATIONAL AI</h1>
        </div>
    </nav>
  )
}

export default Sidebar