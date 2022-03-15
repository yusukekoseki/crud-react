export const postData = async (url, obj) => {

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(obj)
  })

  const res_j = await res.json()
  if (res_j.data != null) {
    return await res_j.data
  } else {
    return await res_j.error
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