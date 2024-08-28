"use client";

const ClientComponent = () => {
    return (
    
    <button className="bg-black text-white py-2 px-4" 
    onClick={async () => {
        await fetch("/api/emails", { method: "POST"});
        }}>Send Email Confirmation </button>
    
    )
 
}

export default ClientComponent;
