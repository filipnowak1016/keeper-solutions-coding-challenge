import moment from 'moment'

export const convertFormattedDate = (utcDateStr) => {
  const date = moment(utcDateStr)
  const formattedDate = date.format("DD/MM/YYYY")
  return formattedDate
}
