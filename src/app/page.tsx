export const runtime = 'edge'

import SocialSignIn from './_components/social-sign-in'

const Index = async () => {
  /*
  const data = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'
  )
  console.log(await data.json())
  */

  return (
    <main>
      <div className="mx-auto max-w-4xl bg-white p-5">
        <SocialSignIn />
      </div>
    </main>
  )
}

export default Index
