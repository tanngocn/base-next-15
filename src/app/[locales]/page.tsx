import { Suspense, use } from 'react';
import Section from '../_components/views/home';

export default function Home() {
  const fetchData = async () => {
    const res = await fetch('https://gaminize.ekoios.net/api/tokens/6/2?timeFrame=7d', {
      method: 'GET',
    });
    return res.json();
  };
  const data = use(fetchData());

  return (
    <div className="bg-black md:p-8 p-4">
      <Suspense fallback={data.length <= 0 ? <>Loading...</>: <></>}>
        <Section  data={data}/>
      </Suspense>
    </div>
  );
}
