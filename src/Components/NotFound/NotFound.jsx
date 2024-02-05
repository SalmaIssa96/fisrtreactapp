import notFoundImage from '../../assets/notfound.webp'
const NotFound = () => {
  return (
    <div className='container vh-100 d-flex align-items-center justify-content-center'>
      <img src={notFoundImage} alt="Not Found" className='w-50' />
    </div>
  )
}

export default NotFound