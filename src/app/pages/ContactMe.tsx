"use client"

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import IconTalking from "../components/IconTalking";
import InputForm from "../components/InputForm";

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send('service_i5a7drg', 'template_2m4qhbg', formData, 'aGFyu7MBSgmGrQ4ee')
            .then((result) => {
                console.log('E-mail enviado com sucesso!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='w-full mt-16 h-screen flex flex-col items-center justify-center'>
            <h1 className="text-5xl font-bold mb-10 dark:text-white">
                Entre <span className="text-PrimaryPurple">em contato.</span>
            </h1>
            <div className="flex items-center justify-center gap-10">
                <div>
                    <IconTalking />
                </div>    
                <div className="flex flex-col">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <InputForm 
                            type="text" 
                            PLaceholderProps="Nome" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <InputForm 
                            type="email" 
                            PLaceholderProps="E-mail" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea 
                            className="bg-transparent border-2 h-80 w-[700px] p-3 outline-none" 
                            placeholder="Mensagem" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button className="bg-PrimaryPurple text-white h-12 w-40 rounded-md">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
