import { useRouter } from 'next/router'

export default function Person({ found }) {
  console.log(found)

  return (

    <div>
      { found.length === 0 ?
        <h1>Loading...</h1>
        :
        <>
          <h1>{ found.ownerName }'s { found.vehicle }</h1>
          <h2>{ found.details }</h2>
        </>
      }
    </div>
  )
}

Person.getInitialProps = async context => {
  console.log(context.req)
  if (!context.req) {
    return { found: [] }
  }

  const { query } = context
  const response = await fetch(
    'http://localhost:4001/vehicles?ownerName=' +
      query.person +
      '&vehicle=' +
      query.vehicle
  );
  const data = await response.json();
  return { found: data };
}