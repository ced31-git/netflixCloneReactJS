import React from 'react'
import Main from '../components/Main/Main'
import Row from '../components/Row/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title="A venir" fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title="Populaire" fetchURL={requests.requestPopular} />
      <Row rowID='3' title="Tendance" fetchURL={requests.requestTrending} />
      <Row rowID='4' title="Les Top" fetchURL={requests.requestTopRated} />
      <Row rowID='5' title="Horreur" fetchURL={requests.requestHorror} />
    </>
  );
}

export default Home