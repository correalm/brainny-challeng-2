import { faker } from '@faker-js/faker/locale/pt_BR'
import { getClientFirstAndLastName } from './getClientFirstAndLastName'

const translateGenre = (sex) => {
  if (sex === 'Feminino') {
    return 'female'
  } else {
    return 'male'
  }
}

export const buildRecords = (times, objOnly = false) => {
  const records = []

  for (let i = 0; i < times ; i++) {
    const genre = faker.name.sex()
    const name =  faker.name.fullName({
      sex: translateGenre(genre)
    })
    const { first_name, last_name } = getClientFirstAndLastName(name)
    const record  = {
      name: name,
      id: faker.datatype.uuid(),
      email: faker.internet.email(first_name, last_name),
      genre: genre,
      phone_number: faker.phone.number('(53) 9 ####.####')
    }

    if (objOnly) return record

    records.push(record)
  }

  return records
}