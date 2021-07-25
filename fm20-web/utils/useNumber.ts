const useNumber = () => {
  const format = (number: number) => {
    return new Intl.NumberFormat().format(number)
  }

  return {
    format,
  }
}

export default useNumber
