import Typograph from '@/components/atoms/Typograph/Typograph'
import { login } from '@/constants/login'

const InfoLogin = () => {
  return (
    <>
      <div className="flex flex-col max-w-[80%] self-center items-center gap-2">
        <Typograph className="text-5xl font-bold text-white">
          {login.title}
        </Typograph>
        <Typograph className="text-white text-xl">{login.subTitle}</Typograph>
        <Typograph className="text-white text-justify">
          {login.description}
        </Typograph>
      </div>
    </>
  )
}

export default InfoLogin
