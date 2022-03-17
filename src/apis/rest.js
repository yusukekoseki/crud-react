export const post = async (url, obj, token="") => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + token,
    },
    body: JSON.stringify(obj)
  })

  const res_j = await res.json()
  if (res_j.data != null) {
    return res_j.data
  } else {
    return res_j.error
  }
}

export const patch = async (url, obj, token) => {
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + token,
    },
    body: JSON.stringify(obj)
  })

  const res_j = await res.json()
  if (res_j.data != null) {
    return res_j.data
  } else {
    return res_j.error
  }
}

export const put = async (url, obj, token) => {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + token,
    },
    body: JSON.stringify(obj)
  })

  const res_j = await res.json()
  if (res_j.data != null) {
    return res_j.data
  } else {
    return res_j.error
  }
}

export const get = async (url, token) => {

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + token,
    }
  })

  const res_j = await res.json()
  if (res_j.data != null) {
    return res_j.data
  } else {
    return res_j.error
  }
}