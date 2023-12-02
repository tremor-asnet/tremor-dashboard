// Libs
import { useState } from 'react';
import { TextInput, Button, Flex, Switch, Text, Title } from '@tremor/react';
import Link from 'next/link';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

// Constant
import { ROUTES } from '../../constants';

const SignIn = () => {

  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  // Handle to change value is (true or false) for attr checked switch
  const handleSwitchChange = (value: boolean) => {
    setIsSwitchOn(value);
  };

  return (
    <Flex className='bg-hero-signin min-h-screen'>
      <Flex className='flex-col mx-auto bg-white rounded-xl max-w-sm'>
        <div className='w-full p-4'>
          <Flex className='bg-gradient-primary rounded-xl -mt-11 justify-center flex-col mb-7'>
            <Title className='font-bold pt-8 pb-2 px-8 md:text-2xl text-white'>
              Sign In
            </Title>
            <Flex className='my-8 max-w-xs justify-center space-x-3 px-4'>
              <FaFacebook className='text-white' />
              <FaGithub className='text-white' />
              <FaGoogle className='text-white' />
            </Flex>
          </Flex>
          <div className='w-full p-3'>
            <div className='h-20 w-full'>
              <TextInput
                id='emmail'
                placeholder='Email'
                type='email'
                autoFocus
                className='py-1 w-full'
              />
            </div>
            <div className='h-20 w-full'>
              <TextInput
                id='password'
                placeholder='Password'
                type='password'
                autoFocus
                className='py-1 w-full'
              />
            </div>
            <div className='flex items-center space-x-3 mt-1'>
              <Switch
                id='switch'
                name='switch'
                checked={isSwitchOn}
                color={`${isSwitchOn ? 'gray' : 'zinc'}`}
                className='flex justify-center items-center'
                onChange={handleSwitchChange}
              />
              <Text className='text-gray-400'>Remember me</Text>
            </div>
            <Button
              className='w-full bg-gradient-primary py-3 mt-9 uppercase'
              size='xs'
            >
              Sign In
            </Button>
            <Flex className='mt-8 mb-2 justify-center items-center'>
              <Text>Don&rsquo;t have an acccount?</Text>
              <Link
                className='text-black-300 text-sm font-bold ml-2'
                href={ROUTES.SIGNUP}
              >
                Sign Up
              </Link>
            </Flex>
          </div>
        </div>
      </Flex>
    </Flex>
  );
};

export default SignIn;
