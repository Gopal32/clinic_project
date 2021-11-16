import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as GoIcons from 'react-icons/go';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io5';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';

export const MenuData = [
    {
        title : 'Patient Info',
        path : '/patient_info',
        icon : <MdIcons.MdPeopleAlt />,
    },
    {
        title : 'Doctor',
        path : '',
        icon : <GoIcons.GoDiffAdded />,
        iconOpen : <RiIcons.RiArrowUpSFill />,
        iconClose : <RiIcons.RiArrowDownSFill />,

        subMenu :[
            {
                title : 'Add Doctor',
                path : '/doctor/add_doctor',
                icon : <IoIcons.IoAddCircleOutline />,
            },
            {
                title : 'Search Doctor',
                path : '/doctor/search_doctor',
                icon : <BiIcons.BiSearchAlt />,
            }
        ]
    },
    {
        title : 'Add Speciality',
        path : '/add_Speciality',
        icon : <BiIcons.BiCategoryAlt />,
    },
    {
        title : 'Recent Appointment',
        path : '/recent_app',
        icon : <AiIcons.AiOutlineClockCircle />,
    }
]