import Head from 'next/head'
import { useState } from 'react'
export default function Home( { cmd }: any ) {
  const [option, setoption] = useState(1)
  
  return (
    <>
      <Head>
        <title>ReviOS bot commands</title>        
      </Head>
      <main className="bg-[#1b1b1d] flex flex-col items-center min-w-screen min-h-screen">
	  	<h1 className="text-white text-4xl font-bold mt-2">ReviOS bot commands</h1>
		<select className="rounded-md bg-[#1b1b1d] text-white border-white border-2 w-1/4 h-10 my-4" value={option} onChange={(e) => {setoption(parseInt(e.target.value))}}>
  			{
				cmd.map((command: any) => (
					<option value={command.id}>{command.name}</option>
				))
			}
		</select>
		<p className="text-white text-xl px-16 whitespace-pre-wrap mb-4">{cmd[cmd.findIndex(item => item.id == option)].content}</p>
		<img src={cmd[cmd.findIndex(item => item.id == option)].image} />
		<p className="text-white text-xl mt-8">Created at: {cmd[cmd.findIndex(item => item.id == option)].createdAt}</p>
		<p className="text-white text-xl">Last edit: {cmd[cmd.findIndex(item => item.id == option)].lastEdit}</p>	
	  	<p className="text-white text-xl">Disabled: {cmd[cmd.findIndex(item => item.id == option)].disabled.toString()}</p>
	  </main>
    </>
  )
}

export async function getStaticProps(context) {
	const res = await fetch("https://hastebin.stasium.dev/raw/yvizotutek")
	const cmd = await res.json()
	return {
		props: { cmd }
	}
}
