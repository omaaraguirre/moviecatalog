const Detail = ({ data, title }) => {
  return (
    <>
      {
        data !== 'N/A' &&
          <div>
            <p className='text-sm text-gray-500 font-semibold'>{title}</p>
            <p>{data}</p>
          </div>
      }
    </>
  )
}

export default Detail
