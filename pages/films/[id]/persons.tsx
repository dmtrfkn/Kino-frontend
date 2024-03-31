import { useRouter } from 'next/router';

const Persons = () => {
  const route = useRouter();
  console.log(route.query.id);
  return <div>persons</div>;
};

export default Persons;
