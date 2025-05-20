'use client';

const Section = ({ data }: any) => {
  return (
    <div className="home-page">
      <h1 className="text-lg">{data?.tokenName}</h1>
      <p>{data?.description}</p>
    </div>
  );
};
export default Section;
