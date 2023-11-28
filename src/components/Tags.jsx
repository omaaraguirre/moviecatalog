const Tags = ({ tags }) =>
  <div className='mt-5 flex justify-center items-center gap-3 flex-wrap text-lighter text-xs font-comforta text-shadow'>
    {
      tags.map((tag, index) =>
        <span key={index} className='whitespace-nowrap px-3 py-2 rounded-lg bg-secondary/30 backdrop-blur-sm box-shadow'>{tag}</span>
      )
    }
  </div>

export default Tags
