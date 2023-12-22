import Typograph from '@/components/atoms/Typograph/Typograph'
import { register } from '@/constants/register'

const InfoRegister = () => {
  return (
    <>
      <div className="flex flex-col max-w-[80%] self-center items-center gap-2">
        <Typograph className="text-5xl font-bold text-white">
          {register.title}
        </Typograph>
        <Typograph className="text-white text-xl">
          {register.subTitle}
        </Typograph>
        <Typograph className="text-purple-400 text-justify">
          {register.description}
        </Typograph>
      </div>
    </>
  )
}

export default InfoRegister
