import { NextPage } from 'next'

type Props = {
  params: {
    locale: string
  }
}

const AwesomePage: NextPage = async () => {
  return (
    <>
      <div>
        <p>NextJS is Awesome</p>
      </div>
    </>
  )
}

export default AwesomePage
