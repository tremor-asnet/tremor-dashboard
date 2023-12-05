// Libs
import { TextInput, Button, Flex, Text, Title } from '@tremor/react';
import Link from 'next/link';

// Constant
import { ROUTES } from '../../constants';

const SignUp = () => {
  return (
    <Flex className='min-h-screen flex-col pb-8'>
      <div className='bg-[linear-gradient(195deg,rgba(66,66,74,0.4),rgba(25,25,25,0.4)),url("/assets/images/bg-sign-up.webp")] m-4 pt-12 pb-56 opacity-100 rounded-xl shadow-none bg-cover bg-no-repeat bg-center w-[calc(100%-2rem)]'></div>
      <Flex className='flex-col mx-auto bg-white rounded-xl max-w-sm -mt-80 shadow-dark-tremor-card'>
        <div className='w-full p-4'>
          <Flex className='bg-gradient-primary rounded-xl -mt-11 justify-center flex-col mb-7 pb-8'>
            <Title className='font-bold pt-8 pb-2 px-8 md:text-2xl text-white'>
              Join us today
            </Title>
            <Text className='text-white font-light max-w-xs px-8 text-center'>
              Enter your email and password to register
            </Text>
          </Flex>
          <div className='w-full p-3'>
            <div className='h-20 w-full'>
              <TextInput
                id='name'
                placeholder='Name'
                type='text'
                autoFocus
                className='py-1 w-full sm:rounded-none sm:shadow-none py-3 border-0 border-b-2 hover:bg-transparent ring-0'
              />
            </div>
            <div className="h-20 w-full">
              <TextInput
                id="email"
                placeholder="Email"
                type="email"
                className='py-1 w-full sm:rounded-none sm:shadow-none py-3 border-0 border-b-2 boxhover:bg-transparent ring-0'
              />
            </div>
            <div className="h-20 w-full">
              <TextInput
                id="password"
                placeholder="Password"
                type="password"
                className='py-1 w-full sm:rounded-none sm:shadow-none py-3 border-0 border-b-2 hover:bg-transparent ring-0'
              />
            </div>
            <div className='flex items-center space-x-3 mt-1'>
              <input
                id='checkbox'
                type='checkbox'
                value=''
                className='w-4 h-4 rounded-lg'
              />
              <Text className='text-gray-400'>
                I agree with the{' '}
                <Link
                  href={ROUTES.HOME}
                  className='hover:underline text-gray-800 text-sm font-bold'
                >
                  Terms and conditions
                </Link>
              </Text>
            </div>
            <Button
              onClick={() => {}}
              className='w-full bg-gradient-primary py-3 mt-9 uppercase'
              size='xs'
            >
              Sign Up
            </Button>
            <Flex className='mt-8 mb-2 justify-center items-center'>
              <Text>Already have an acccount?</Text>
              <Link
                className='text-black-300 text-sm font-bold ml-2'
                href={ROUTES.SINGIN}
              >
                Sign In
              </Link>
            </Flex>
          </div>
        </div>
      </Flex>
    </Flex>
  );
};

export default SignUp;
