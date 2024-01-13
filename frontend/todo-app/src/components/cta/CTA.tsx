import { CustomButton } from ".."
import { CTAProps } from "./types"

export const CTA: React.FC<CTAProps> = ({ type, title }) => {

    const renderLeftSection = () => {
        switch (type) {
            case 'home':
                return <h1 className='text-2xl text-red-500'>{title}</h1>
            case 'create':
                return <h1 className='text-2xl text-red-500'>Create Note</h1>
            case 'view':
                return <h1 className='text-2xl text-red-500'>Edit Note</h1>
            default:
                return <h1 className='text-2xl text-red-500'>Welcome to Note Pal</h1>
        }
    }
  return (
      <header className="flex items-center justify-between border-2 border-primary-blue p-8">
          <div>
                {renderLeftSection()}
          </div>
          <div>
              <h1 className='text-2xl text-red-500'>One or two buttons</h1>
                <CustomButton />
                <CustomButton />
          </div>
    </header>
  )
}
