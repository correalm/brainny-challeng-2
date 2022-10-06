export const getClientsByFirstLetter = (records, letter) => {
  if (typeof letter !== 'string' || letter.length > 1 ) {
    return "Please, verify arguments pass"
  }
  return records.filter(record => record.name[0].toLowerCase() === letter.toLowerCase() )
}