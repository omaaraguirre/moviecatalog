const ProductionCompanies = ({ companies }) =>
  companies &&
    <div className='my-10 flex gap-3 justify-center items-center flex-wrap'>
      {
        companies.map(prod =>
          <img
            key={prod.id}
            src={prod.logo_path}
            alt={prod.name}
            className='bg-lighter rounded-lg p-2 h-10 w-auto'
          />
        )
      }
    </div>

export default ProductionCompanies
