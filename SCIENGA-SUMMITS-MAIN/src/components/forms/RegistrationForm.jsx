import React, {useState} from 'react'

export default function RegistrationForm(){
  const [form,setForm] = useState({name:'',email:''})
  const handle = e => setForm({...form,[e.target.name]: e.target.value})
  const submit = async e => {
    e.preventDefault()
    try{
      await fetch('/api/register',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(form)})
      alert('Registered (demo)')
      setForm({name:'',email:''})
    }catch(err){console.error(err);alert('Failed to register')}
  }
  return (
    <form onSubmit={submit} className="container" style={{padding:'1rem 0'}}>
      <label>Name<input name="name" value={form.name} onChange={handle} /></label>
      <label>Email<input name="email" value={form.email} onChange={handle} /></label>
      <button type="submit">Register</button>
    </form>
  )
}
