import React, { useContext, useEffect, useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'

const Sidebar = () => {

    const {getUsers, users, selectedUser, setSelectedUser, unseenMessages, setUnseenMessages} = useContext(ChatContext) // Fixed: unSeenMessages -> unseenMessages

    const {logout, onlineUser} = useContext(AuthContext) // Fixed: onlineUsers -> onlineUser

    const [input, setInput] = useState(""); // Fixed: false -> ""

    const filteredUsers = input ? users.filter((user) => user.fullName.toLowerCase().includes(input.toLowerCase())) : users; // Fixed: method call

    const navigate = useNavigate();

    useEffect(() => {
        getUsers()
    }, [onlineUser]) // Fixed: onlineUsers -> onlineUser
    
    return (
        <div className={`bg-[#818582]/10 h-full flex flex-col border-r border-gray-600/30 text-white transition-all duration-300 ${
            selectedUser ? "max-md:hidden" : ""
        }`}>
            <div className='p-5 border-b border-gray-600/30'>
                <div className='flex justify-between items-center'>
                    <img src={assets.logo} alt="logo" className='max-w-40' />
                    <div className='relative group'>
                        <img 
                            src={assets.menu_icon} 
                            alt="Menu" 
                            className='max-h-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity' 
                        />
                        <div className='absolute top-full right-0 z-20 w-32 p-3 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block shadow-lg'>
                            <p 
                                onClick={() => navigate('/profile')} 
                                className='cursor-pointer text-sm py-1 hover:text-blue-400 transition-colors'
                            >
                                Edit Profile
                            </p>
                            <hr className='my-2 border-t border-gray-500' />
                            <p onClick={() => logout()} className='cursor-pointer text-sm py-1 hover:text-red-400 transition-colors'>
                                Logout
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4 mt-5'>
                    <img src={assets.search_icon} alt="Search" className='w-3' />
                    <input onChange={(e) => setInput(e.target.value)} type="text" className='bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1' placeholder='Search User....'/>
                </div>
            </div>
            
            <div className='flex flex-col overflow-y-auto'>
                {filteredUsers.map((user, index) => (
                    <div 
                        onClick={() => {
                            setSelectedUser(user)
                            setUnseenMessages(prev => ({
                                ...prev, 
                                [user._id]: 0
                            }))
                        }} 
                        key={index} 
                        className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm hover:bg-[#282142]/30 transition-colors ${
                            selectedUser?._id === user._id ? 'bg-[#282142]/50' : ''
                        }`}
                    >
                        <img 
                            src={user?.profilePic || assets.avatar_icon} 
                            alt="" 
                            className='w-[35px] aspect-[1/1] rounded-full object-cover' 
                        />
                        <div className='flex flex-col leading-5'>
                            <p className='text-white'>{user.fullName}</p>
                            {
                                onlineUser.includes(user._id) // Fixed: onlineUsers -> onlineUser
                                ? <span className='text-green-400 text-xs'>Online</span>
                                : <span className='text-neutral-400 text-xs'>Offline</span>
                            }
                        </div>
                        {unseenMessages[user._id] > 0 && ( // Fixed: unSeenMessages -> unseenMessages
                            <p className='absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50'>
                                {unseenMessages[user._id]} {/* Fixed: unSeenMessages -> unseenMessages */}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
