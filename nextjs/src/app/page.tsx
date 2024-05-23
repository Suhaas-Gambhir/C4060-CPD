'use client';
import { Tldraw } from 'tldraw'

// import Link from "next/link";

import './index.css'

/* Can't Get working */
// import dynamic from 'next/dynamic';
// const Tldraw = dynamic(async () => (await import('tldraw')).Tldraw, { ssr: false })

export default function App() {
  return (
    <main>
      {/*
      <Link href="/users">Users</Link> */}
      <div style={{ position: 'fixed', inset: 0 }}>
   			<Tldraw />
 	  	</div>
    </main>
  );
}

