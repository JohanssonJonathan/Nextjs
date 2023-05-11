import React, { useEffect, useState } from "react";
import getCharacters from "../util/getCharacters";
import { ICharacters, IApiInformation } from "../util/interfaces";
import Cards from "../components/Cards";
import { debounce } from "../util/functions";
import styled from "@emotion/styled";
import { colors } from "../util/colors";

const ErrorMessage = styled.p`
  position: relative;
  top: 150px;
  color: ${colors.white};
`;

export default () => {
  const [apiInformation, setApiInformation] = useState<IApiInformation | null>(
    null
  );
  const [characters, setCharacters] = useState<ICharacters[] | []>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setApiInformation(() => ({ ...data.info }));
        setCharacters([...data.results]);
      })
      .catch((error) => {
        if (typeof error === "string") {
          console.warn(error);

          return setError(error);
        }
        console.warn(error.message);
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    let bottom = false;

    const handleScroll = () => {
      const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const numberAtBottom = scrollHeight - window.innerHeight;

      if (
        window.pageYOffset === numberAtBottom &&
        apiInformation?.next &&
        !bottom
      ) {
        bottom = true;

        getCharacters(apiInformation.next)
          .then((data) => {
            setApiInformation({ ...data.info });
            setCharacters((previous) => [...previous, ...data.results]);
          })
          .catch((error) => {
            if (typeof error === "string") {
              console.warn(error);

              return setError(error);
            }
            console.warn(error.message);
            setError(error.message);
          });
      }
    };
    window.addEventListener("scroll", debounce(handleScroll, 400));

    return window.removeEventListener("scroll", handleScroll);
  }, [apiInformation]);

  return (
    <>
      {error && <ErrorMessage>Could not get characters</ErrorMessage>}
      {characters.length ? <Cards characters={characters} /> : null}
    </>
  );
};
