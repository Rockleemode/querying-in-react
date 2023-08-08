import { useQuery } from 'react-query';

const fetchPeople = async () =>{
    const res = await fetch("http://swapi.dev/api/planets/");
      return res.json();
}

const People = () => {
    const {data, status} = useQuery();
    return ( 
        <div className="people">
            <p>people</p>
            {status === "loading" && <p>loading data.....</p>}
            {status === "error" && <p>there is an error</p>}
            {status === "success" && data.map(person => <person)}
        </div>
     );
}
 
export default People;