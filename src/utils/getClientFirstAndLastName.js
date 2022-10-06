export const getClientFirstAndLastName = (name) => {
  return {
    first_name: getFirstName(name),
    last_name: getLastName(name)
  }
}

const getFirstName = (name) => {
  return name.split(" ")[0]
}

const getLastName = (name) => {
  const names = name.split(" ")
  return names[names.length - 1]
}