import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";

const About = () => {
  const getData = async () => await axios.get("/api/test");
  const { error, data, isLoading } = useQuery("test", getData);
  const result = data?.data;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div style={{color:"red"}}>Error: {(error as AxiosError).message}</div>;
  return (
    <div>
      <h1>About page</h1>
      <h3>{result?.message}</h3>
      <div style={{display:"flex" ,gap:"20px"}}>
        {result?.data.map((item: any) => (
          <div key={item.name} style={{backgroundColor:"blue",color:"white",padding:"20px"}}>
            <h5>Name: {item.name}</h5>
            <p>Age: {item.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
