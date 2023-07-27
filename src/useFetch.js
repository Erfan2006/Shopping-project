import { useState , useEffect } from "react";

const useFetch = (url) => {

    const [data ,setData] = useState(null);
    const [ isPending , setPending ] = useState(true);
    const [error, setError ] = useState(null);
    
  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {
      console.log('Making request...');
      fetch(url , {signal: abortCont.signal})
        .then(res => {
          console.log('Response received:', res);
          if (!res.ok) {
            throw Error('Could not fetch the data');
          }
          return res.json();
        })
        .then(data => {
          console.log('Data received:', data);
          setData(data);
          setPending(false);
        })
        .catch(err => {
          if ( err.name === 'AbortError'){
            console.log('fetch aborted');
          }

          else{

            console.log('Error:', err);
          setError(err.massage);
          setPending(false);

          }

        
        });
    }, 1000);

    return() => abortCont.abort();
    
  }, [url]);

  return { data , isPending , error};
}

export default useFetch;