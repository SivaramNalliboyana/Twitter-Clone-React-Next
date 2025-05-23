import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useLoginModal from "@/hooks/useLoginModal";

const RegisterModal = () =>{
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(()=> {
        if (isLoading){
            return;
        }

        registerModal.onClose();
        loginModal.onOpen();
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async ()=> {
        try{
            setIsLoading(true);

            // TODO reg and login

            registerModal.onClose();


        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    } , [RegisterModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeHolder="Email" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            
            />
             <Input placeHolder="Name" 
            onChange={(e)=>setName(e.target.value)}
            value={name}
            disabled={isLoading}
            
            />
            <Input placeHolder="Username" 
            onChange={(e)=>setUserName(e.target.value)}
            value={username}
            disabled={isLoading}
            
            />
            <Input placeHolder="Password" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            
            />
           
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Already have an account?
                <span 
                onClick={onToggle}
                className="
                    text-white
                    cursor-pointer
                    hover:underline
                "> Sign in</span>
            </p>
        </div>
    )
    return (
       <Modal disabled={isLoading}
       isOpen={registerModal.isOpen}
       title="Create an account"
       actionLabel="Register"
       onClose={registerModal.onClose}
       onSubmit={onSubmit}
       body={bodyContent}
       footer={footerContent}
       ></Modal>
    );
}

export default RegisterModal;