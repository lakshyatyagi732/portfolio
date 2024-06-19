import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#252525] text-gray-50 flex items-center justify-around mt-5'>
    {/* DIV FOR LOGO */}
    <div>
<h1 className='font-bold text-3xl'>LAKSHYA</h1>
</div>
    {/*  */}

   {/* DIV FOR MENU */}
   <div>
<ul className='flex space-x-5'>
    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
    <li>Contact</li>


</ul>
</div>
   {/*  */}

   {/* DIV FOR DOWNLOAD CV */}
   <div>
<button className='bg-[#fd6e01] px-4 py-2 rounded-md'>DOWNLOAD CV</button>

</div>
   {/*  */}
    </div>
  )
}

export default Header