import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchEmojis = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    axios
      .get("/api/emojis/list/all-data")
      .then((resp) => {
        setState({
          data: resp.data,
          loading: false,
        });
      })
      .catch((error) => {
        setState({
          data: [],
          loading: false,
        });
        console.error(error.message);
      });
  }, []);
  return {...state, setState};
};
