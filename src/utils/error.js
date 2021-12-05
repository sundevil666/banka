const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Пользователь не найден',
  INVALID_PASSWORD: 'Пользователь не найден'
}

export default function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неисвестаня ошибка'
}
