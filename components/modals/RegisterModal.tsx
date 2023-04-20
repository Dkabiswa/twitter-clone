import useLoginModal from '@/hooks/useLoginModal'
import React, { useState, useCallback } from 'react'
import Input from '../Input';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    const onSubmit = useCallback(
      () => {
        try {
            setIsLoading(true)


            registerModal.onClose()
        } catch (error) {
            console.log(error); 
        } finally {
            setIsLoading(false)
        }
      },
      [registerModal],
    )
    
    const onToggle = useCallback(
      () => {
        if(isLoading) {
            return
        }
        registerModal.onClose()
        loginModal.onOpen()
      },
      [isLoading, registerModal, loginModal],
    )
    
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input 
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input 
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
            />
            <Input 
                placeholder='Password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Already have an account? 
                <span 
                className='text-white cursor-pointer hover:underline'
                onClick={onToggle}
                > Sign in
                </span>
            </p>
        </div>
    )
  return (
    <Modal 
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title='Create an account'
        actionLabel='Reigister'
        onClose={registerModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
    />
  )
}

export default RegisterModal