import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetDetailsMovie from '../../service/Movie/GetDetailsMovie';
import Card from '../../components/Card';

// import { Container } from './styles';

function MovieDetails() {
    const [data, setData] = useState({})
    const params = useParams();
    console.log(params);

    useEffect(() => {
        async function getDetails() {
            const response = await GetDetailsMovie(params.id);
            setData(response)
            
        }
        getDetails()
    },[])


  return (
  
    <Card data={data} />
  
  );
}

export default MovieDetails;