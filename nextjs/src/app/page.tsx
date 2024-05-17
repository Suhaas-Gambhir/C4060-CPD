'use client';

import Link from "next/link";
import { Tldraw } from 'tldraw'
import './index.css'

export default function App() {
  return (
    <main>
      <h1>HELLO WORD!</h1>  
      <Link href="/users">Users</Link>
      <div style={{ position: 'fixed', inset: 100 }}>
   			<Tldraw />
 	  	</div>
    </main>
  );
}