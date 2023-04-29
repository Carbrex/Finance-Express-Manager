import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DvrIcon from '@mui/icons-material/Dvr';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CategoryIcon from '@mui/icons-material/Category';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BookIcon from '@mui/icons-material/Book';
import EqualizerIcon from '@mui/icons-material/Equalizer';

export const SidebarData = [
	{
		title: 'Dashboard',
		icon: <DashboardIcon />,
		link: '/',
	},
	{
		title: 'Transactions',
		icon: <DvrIcon />,
		link: '/transactions',
	},
	{
		title: 'Accounts',
		icon: <AccountBalanceIcon />,
		link: '/',
	},
	{
		title: 'Categories',
		icon: <CategoryIcon />,
		link: '/',
	},
	{
		title: 'Entities',
		icon: <CorporateFareIcon />,
		link: '/',
	},
	{
		title: 'Rules',
		icon: <EmojiObjectsIcon />,
		link: '/',
	},
	{
		title: 'Budgets',
		icon: <BookIcon />,
		link: '/',
	},
	{
		title: 'Investments',
		icon: <EqualizerIcon />,
		link: '/investments',
	},
	{
		title: 'Stats',
		icon: <CategoryIcon />,
		link: '/',
	},
];
