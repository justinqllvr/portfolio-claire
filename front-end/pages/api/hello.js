// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fetchProjects = async () => {
  const res = await fetch('http://localhost:1337/api/projets')
  const response = await res.json()
  return response.data
}

export default fetchProjects;