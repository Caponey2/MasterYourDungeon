import React from 'react';
import LogoutButton from './LogoutButton';

const AltHeader = () => {
	return (
		<div>
			<nav className='bg-gray-800'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						<div className='flex items-center'>
							<div className='flex-shrink-0'>
								<img
									className='h-10 w-24'
									src={require('../images/pngfind.com-dnd-logo-png-3863446.png')}
									alt='DND'
								/>
							</div>
							<div className='hidden md:block'>
								<div className='ml-10 flex items-baseline space-x-4'>
									<a
										href='http://localhost:8080/user'
										className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'>
										Tanner's Home
									</a>
									<a
										href='http://localhost:8080/party'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
										Create Party
									</a>
									<a
										href='http://localhost:8080/encounter'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
										Create Encounter
									</a>
									<LogoutButton />
								</div>
							</div>
						</div>
						<div className='-mr-2 flex md:hidden'>
							<button
								type='button'
								className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
								aria-controls='mobile-menu'
								aria-expanded='false'>
								<span className='sr-only'>Open main menu</span>

								<svg
									className='block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>

								<svg
									className='hidden h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* <header className='bg-white shadow'>
				<div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
				</div>
			</header> */}
		</div>
	);
};

export default AltHeader;
