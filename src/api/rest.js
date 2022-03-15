export const postData = async (url, obj) => {

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(obj)
  })

  if (res.ok) {
    const res_j = await res.json()
    return await res_j.data
  }
}


export const getList = async (url, token) => {

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + token,
    }
  })

  if (res.ok) {
    const res_j = await res.json()
    return res_j.data
  }
}