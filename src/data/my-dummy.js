import React from 'react';
import { AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineStock, AiOutlineAreaChart, AiOutlineBarChart } from 'react-icons/ai';
import { BiColorFill } from 'react-icons/bi';
import { BsKanban, BsBarChart } from 'react-icons/bs';
import { FiShoppingBag, FiEdit, FiPieChart } from 'react-icons/fi';
import { GiLouvrePyramid } from 'react-icons/gi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';

import { RiHome6Line } from "react-icons/ri";
import { PiPackageDuotone } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { GiCoffeeBeans } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
import { RiHome6Fill } from "react-icons/ri";
import { HiMiniShoppingBag } from "react-icons/hi2";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import homeIcon from './home.png'
import coffeeIcon from './coffee-bean.png'
import customerIcon from './customer-experience.png'
import employeeIcon from './barista.png'
import orderIcon from './bill_02.png'

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'home',
        icon: <img src={homeIcon} className='w-6 h-auto' />  ,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'coffee',
        icon: <img src={coffeeIcon} className='w-6 h-auto' />,
      },
      {
        name: 'customer',
        icon: <img src={customerIcon} className='w-7 h-auto' />,
      },
      {
        name: 'employee',
        icon: <img src={employeeIcon} className='w-9 h-auto' /> ,
      },
      {
        name: 'order',
        icon: <img src={orderIcon} className='w-6 h-auto' /> , 
      },
    ],
  }
];
{/*< HiMiniShoppingBag className='w-6 h-auto' />*/}
