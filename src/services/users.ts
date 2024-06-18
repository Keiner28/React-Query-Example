// const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms))

export const fetchUsers = async ({ pageParam = 1 }) => {
  // await delay(300)
  return await fetch(`https://randomuser.me/api?results=10&seed=kgodinez&page=${pageParam}`)
    .then(async res => {
      if (!res.ok) throw new Error('Error al cargar los usuarios')
      return await res.json()
    })
    .then(res => {
      const currentPage = Number(res.info.page) + 1
      const nextCursor = currentPage > 3 ? null : currentPage
      return {
        users: res.results,
        nextCursor
      }
    })
}
