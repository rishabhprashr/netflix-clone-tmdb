import React from "react";
import Row from "./../Rows";
import requests from "./../../requests";
import Banner from "./../Banner";
import "./index.css";
import Nav from "./../Navbar";

function index() {
  return (
    <div className="app">
      <Nav/>
//       <Banner/>

      <Row
        isLargeRow={true}
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default index;
