import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { PiNumberSquareFour } from "react-icons/pi";
import { IoGridOutline } from "react-icons/io5";
import { TbSquareRoundedLetterW  } from "react-icons/tb";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome className="nav-icon" />,
    cName: 'nav-text'
  },
  {
    title: 'Wordle',
    path: '/wordle',
    icon: <TbSquareRoundedLetterW className="nav-icon" />,
    cName: 'nav-text'
  },
  {
    title: 'Crossword',
    path: '/crossword',
    icon: <IoGridOutline className="nav-icon" />,
    cName: 'nav-text'
  },
  {
    title: 'Connections',
    path: '/connections',
    icon: <PiNumberSquareFour className="nav-icon" />,
    cName: 'nav-text'
  }
];