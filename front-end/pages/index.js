import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fetchProjects from './api/hello'

export default function Home() {
  console.log("i am on the client non ? ")
  return (
    <div>Portfolio de Claire</div>
  )
}

export async function getStaticProps() {
  const data = fetchProjects()

  console.log(data)
  return {
    props: {}
  }
}
