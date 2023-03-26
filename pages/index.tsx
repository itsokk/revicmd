import Head from 'next/head'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function getCommand(cmd: any, option: any) {
	return cmd[cmd.findIndex((item: any) => item.id == option)]
}

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
					<option key={command.name} value={command.id}>{command.name}</option>
				))
			}
		</select>
		<ReactMarkdown className="text-white text-xl px-16 whitespace-pre-wrap mb-4">{getCommand(cmd, option).content}</ReactMarkdown>
		<img src={getCommand(cmd, option).image} alt="" />
		<p className="text-white text-xl mt-8">Created at: {getCommand(cmd, option).createdAt}</p>
		<p className="text-white text-xl">Last edit: {getCommand(cmd, option).lastEdit}</p>	
	  	<p className="text-white text-xl">Disabled: {getCommand(cmd, option).disabled.toString()}</p>
	  </main>
    </>
  )
}

export async function getStaticProps() {
	const res = await fetch("https://hastebin.stasium.dev/raw/yvizotutek")
	const cmd = await res.json()
	return {
		props: { cmd }
	}
}
