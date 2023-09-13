import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';


export default function CnaeSearch() {
  const [cnaeList, setCnaeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v2/cnae/classes/');
        if (response.data) {
          setCnaeList(response.data);
        }
      } catch (error) {
        console.error('Error fetching CNAE data:', error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, []);

  const filteredCnaeList = cnaeList.filter(
    (cnae) =>
      cnae.id.toString().includes(searchTerm) || cnae.descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredCnaeList.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const offset = pageNumber * itemsPerPage;
  const currentItems = filteredCnaeList.slice(offset, offset + itemsPerPage);

  return (
    <div className="cnaePage">
      <h1>Seu CNAE</h1>
      <div className="pesquisa">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Busque pelo Código CNAE"
        />
      </div>
      <ul className='listaCnae'>
        {currentItems.map((cnae) => (
          <li key={cnae.id}>
            <span>Código: {cnae.id}</span>
            <p>{cnae.descricao}</p>
            <Link href={`/cnaes/${cnae.id}`} className="btn bg-dark text-white">
              Ver mais
            </Link>
          </li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Próximo'}
        breakLabel={'...'}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}
