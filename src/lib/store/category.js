import { writable } from 'svelte/store'

// function createData() {
//   const { subscribe, set, update} = writable([])

//   return {
//     subscribe,
//     set,
//     getName: (id) => {

//       return update()
//     }
//   }
// }

// export const category = createData()
export const category = writable(1)

// var aaa = $category

export function getName(data,id) {
  if (data.length > 0) {
    const obj = data.find(item => item.id === Number(id))
    return obj ? obj.name : ''
  }
  return ''
}

export function getCates(data,sid) {
  if (data.length > 0) {
    const obj = data.find(item => item.id === Number(sid))
    return obj ? obj.cate : []
  }
  return []
}

export function getCateName(data, sid, tid) {
  if (data.length > 0) {
    const obj = data.find(item => item.id === Number(sid))
    return obj.cate[tid] ? obj.cate[tid] : ''
  }
  return []
}