import { faker } from '@faker-js/faker/locale/pt_BR'

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
    const record  = {
      name: faker.name.fullName({
        sex: translateGenre(genre)
      }),
      id: faker.datatype.uuid(),
      email: faker.internet.email,
      genre: genre,
      phone: faker.phone.number('(53) 9 ####.####')
    }

    if (objOnly) return record

    records.push(record)
  }

  return records
}