import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function CnaeDetails() {
  const router = useRouter();
  const { cnaeId } = router.query; // Extract the cnaeId from the router query

  const [cnaeDetails, setCnaeDetails] = useState(null);

  useEffect(() => {
    if (cnaeId) {
      // Fetch the details of the CNAE class with the specified ID
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://servicodados.ibge.gov.br/api/v2/cnae/classes/${cnaeId}`);
          if (response.data) {
            setCnaeDetails(response.data);
          }
        } catch (error) {
          console.error('Error fetching CNAE details:', error);
          // Handle the error as needed
        }
      };

      fetchData();
    }
  }, [cnaeId]);

  return (
    <div className="cnaeDetailsPage">

        <a href='/' className='back'><i className='fa-solid fa-arrow-left'></i> <span>Voltar</span></a>

      <h1>Seu CNAE</h1>
      {cnaeDetails ? (
        <div className="cnaeDetails">

            <div className='header'>

                <h2>{cnaeDetails.id} - {cnaeDetails.descricao}</h2>

            </div>

            <ul className='infos'>

                <li>

                    <p>Código do Grupo: {cnaeDetails.grupo.id}</p>
                    <span> {cnaeDetails.grupo.descricao}</span>

                </li>

                <li>

                    <p>Divisão: {cnaeDetails.grupo.divisao.id}</p>
                    <span>{cnaeDetails.grupo.divisao.descricao}</span>

                </li>

                <li>

                    <p>Seção: {cnaeDetails.grupo.divisao.secao.id}</p>
                    <span> {cnaeDetails.grupo.divisao.secao.descricao}</span>

                </li>

              

            </ul>

            <div className='observacoes'>

                <p>Observações: {cnaeDetails.observacoes}.</p>

            </div>
         
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
