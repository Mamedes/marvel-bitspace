import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heroes } from '../../components/Heroes';
import Header from "../../components/header";
import {ButtonProxima, ButtonAnterior, Container} from './styles'

export function HomePage() {
  const { page: tmp } = useParams<{ page: string }>();
  const pageQueryParam = tmp !== undefined ? Number.parseInt(tmp, 10) : 0;

  const [page, setPage] = useState(pageQueryParam);

  useEffect(() => {
    if (pageQueryParam !== page) {
      setPage(pageQueryParam);
    }
  }, [pageQueryParam, page]);


  let prevButtonClasses = 'btn btn-primary';
  if (page === 0) prevButtonClasses += ' disabled';

  return (
    <>
    <Header/>
     
      <Heroes page={page} />
      <Container>    
      <ButtonAnterior as={Link} to={`/${page - 1}`} className={prevButtonClasses}>
        &laquo; Anterior
      </ButtonAnterior>{' '}
     
      <ButtonProxima as={Link} to={`/${page + 1}`} className="btn btn-primary">
        Próxima Página &raquo;
      </ButtonProxima>
      </Container>
      
    </>
  );
}
