import React, {useState} from 'react'

export default function ContactForm(){
  const [form,setForm] = useState({name:'',email:'',message:''})
  const handle = e => setForm({...form,[e.target.name]: e.target.value})
  const submit = async e => {
    e.preventDefault()
    try{
      await fetch('/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(form)})
      alert('Message sent (demo)')
      setForm({name:'',email:'',message:''})
    }catch(err){console.error(err);alert('Failed to send')}
  }
  return (
    <form onSubmit={submit} className="container" style={{padding:'1rem 0'}}>
      <label>Name<input name="name" value={form.name} onChange={handle} /></label>
      <label>Email<input name="email" value={form.email} onChange={handle} /></label>
      <label>Message<textarea name="message" value={form.message} onChange={handle} /></label>
      <button type="submit">Send</button>
    </form>
  )
}
