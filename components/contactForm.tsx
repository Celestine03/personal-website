"use client"
import { useState } from 'react';
import { supabase } from '../lib/supabase';

const ContactForm = () => {
  const [response, setResponse] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setResponse('');
    try {
      const { error } = await supabase.from("contacts").insert({ name, email, message });
      if (error) {
        throw error;
      }
      setName('');
      setEmail('');
      setMessage('');
      setResponse("Thank you! Your message has been successfully delivered.");
    } catch (error) {
      console.log(error);
      setResponse("Something went wrong, please try again!");
    }
  }

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-semibold border-t mt-10 pt-10 dark:border-white border-black">Leave a message</h1>
      <form onSubmit={ handleSubmit } className="space-y-2">
        <div className="flex md:flex-row flex-col">
          <label className="w-1/6">Name:</label>
          <input className="bg-transparent border dark:border-white border-black w-full p-1" 
            required
            value={ name }
            onChange={ e => setName(e.target.value) }
          />
        </div>
        <div className="flex md:flex-row flex-col">
          <label className="w-1/6">Email:</label>
          <input className="bg-transparent border dark:border-white border-black w-full p-1" 
            required
            type='email'
            value={ email }
            onChange={ e => setEmail(e.target.value) }
          />
        </div>
        <div className="flex md:flex-row flex-col">
          <label className="w-1/6">Message:</label>
          <textarea className="bg-transparent border dark:border-white border-black w-full p-1" 
            required
            rows={6}
            value={ message }
            onChange={ e => setMessage(e.target.value) }
          />
        </div>  
        <p>{ response }</p>
        <button type="submit" className="rounded-lg py-1 w-full hover:border-gray-400 hover:bg-blue-300 hover:text-white hover:dark:border-neutral-700 hover:dark:bg-neutral-500/30">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;