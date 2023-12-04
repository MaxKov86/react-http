import { useState, useEffect } from "react";

export function App() {
  // state = {
  //   img: null,
  //   query: "",
  // };
  const [img, setImg] = useState(null);
  // const [query] = useState("");

  // componentDidMount() {
  //   fetch(
  //     "https://pixabay.com/api/?key=34526021-da361fec4a670d7e6ab3378e0&q=cat&per_page=40"
  //   )
  //     .then((res) => res.json())
  //     .then((img) => this.setState({ img }));
  // }
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=34526021-da361fec4a670d7e6ab3378e0&q=tiger&per_page=40`
    )
      .then((res) => res.json())
      .then((img) => setImg(img));
  }, []);

  return (
    <ul>
      {img &&
        img.hits.map(({ largeImageURL, id }) => (
          <li key={id}>
            <img src={largeImageURL} alt="IMG" />
          </li>
        ))}
    </ul>
  );

  //   <>
  //     <SearchForm />
  //     <Images />
  //   </>;
}
