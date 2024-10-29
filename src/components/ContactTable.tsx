import { getContacts } from '@/lib/data'
import React from 'react'

export default async function ContactTable() {

    const contacts = await  getContacts();
  return (
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Created At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            {contacts.map((contact, index)=>(

            <tr key={contact.id}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.createdAt.toLocaleDateString()}</td>{/* Format date */}
            </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}
