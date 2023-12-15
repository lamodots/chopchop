

function Pagination({dataPerPage, totalData, paginate}) {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalData / dataPerPage); i++){
        pageNumber.push(i)
    }
  return (
    <nav >
            <ul className='flex gap-2 justify-center '>
                {
                    pageNumber.map(number => (
                        <li key={number} className='bg-orange-500 py-1 px-2 border border-zinc-900'>
                            <a href='!#' onClick={()=> paginate(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
    </nav>
  )
}

export default Pagination