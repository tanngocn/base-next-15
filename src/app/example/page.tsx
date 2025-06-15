import { Suspense, use } from 'react';
// api fetch

export default function Page() {
  // get data from api
  const fetchData = async () => {
    const res = await fetch('https://gaminize.ekoios.net/api/tokens/6/2?timeFrame=7d', {
      method: 'GET',
    });
    return res.json();
  };
  // api update
  const data = use(fetchData());

  return (
    <div className="bg-black md:p-8 p-4">
      {/* data fetching */}
      <Suspense fallback={<>Loading...</>}>{/* use data here */}</Suspense>
    </div>
  );
}
