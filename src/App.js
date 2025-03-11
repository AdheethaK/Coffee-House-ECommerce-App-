import React , { useEffect , useState } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import './App.css'

const App = () => {

    return(
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg' >

                    {/* Tooltip */}
                    <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}} >
                        
                    </div>

                    {/* The Sidebar */}
                    <div className='w-60 fixed sidebar dark:bg-secondary-dark-bg bg-black text-black p-5 mb-0'
                        style={{ height : '100%' , backgroundColor: '#FDFF74' }}
                        //  boxShadow : '2.8px 2.8px 0 0 #2E2328'
                    >
                    Sidebar
                        
                    </div>

                    {/* The Navigation Bar */}
                    <div className={'dark:bg-main-bg bg-main-bg min-h-screen overflow-hidden absolute flex-2'} style={{background : 'orange' , width : '1500px' , left : '240px' }} >
                        <div className='fixed bg-main-bg dark:bg-main-dark-bg navbar' style={{background : 'red' , width : '1500px' }} >
                          Navbar
                        </div>
                        <div className='absolute bg-purple-400' style={{ top : '70px' , width : '1500px' , height : '670px' }} >
                            <Routes>
                                <Route path="/" element= "Home" />
                                
                                {/* Pages  */}
                                <Route path="/home" element="Home" />
                                <Route path="/supplier" element= "SUpplier" />
                                <Route path="/item" element= "Item" />
                                <Route path="/employee" element= "Employee" />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App