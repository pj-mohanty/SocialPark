import React from 'react';
import {TbCircleDashed} from "react-icons/tb"

const ProfileUserDetails = () => {
  return (
    <div className='py-10 w-full'>
      <div className='flex items-center'>
        <div className='w-[15%]'>
            <img className='w-32 h-32 rounded-full' 
            src='https://images.pexels.com/photos/541484/sun-flower-blossom-bloom-pollen-541484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=""/>
        </div>
        <div>
        <div className='flex  space-x-10 items-center'>
            <p>username</p>
            <button>Edit Profile</button>
            <TbCircleDashed></TbCircleDashed>
        </div>
        <div className='flex space-x-10'>
            <div>
                <span className='font-semibold mr-2'>10</span>
                <span>posts</span>
            </div>
            <div>
                <span className='font-semibold mr-2'>5</span>
                <span>follower</span>
            </div>
            <div>
                <span className='font-semibold mr-2'>5</span>
                <span>following</span>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserDetails;
