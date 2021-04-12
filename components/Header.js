import Image from 'next/image';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';

import { useRouter } from 'next/router';
import { useRef } from 'react';
import HeaderOptions from './HeaderOptions';

function Header() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();

		const term = searchInputRef.current.value;

		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<header className='sticky top-0 bg-white'>
			<div className='flex w-full p-6 items-center'>
				<Image
					src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
					width={120}
					height={40}
					className='cursor-pointer'
					onClick={() => router.push('/')}
				/>
				<form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
					<input
						ref={searchInputRef}
						type='text'
						className='flex-grow w-full focus:outline-none'
						defaultValue={router.query.term}
					/>
					<XIcon
						onClick={() => (searchInputRef.current.value = '')}
						className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
					/>
					<MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4, border-gray-300' />
					<SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
					<button hidden type='submit' onClick={search}>
						Search
					</button>
				</form>
				<Avatar
					className='ml-auto'
					url='https://assets.about.me/background/users/c/h/a/chanmyaemaung_1531913158_341.jpg'
				/>
			</div>
			<HeaderOptions />
		</header>
	);
}

export default Header;
