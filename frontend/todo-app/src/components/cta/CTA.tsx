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
    const renderRightSection = () => {
        switch (type) {
            case 'home':
                return <CustomButton variant={'create'} />
            case 'create':
                return <CustomButton variant={'save'} />
            case 'view':
                return <>
                <CustomButton variant={'edit'} />
                <CustomButton variant={'delete'} />
                </>
            default:
                return null
        }
    }
  return (
      <header className="flex items-center justify-between border-2 border-primary-blue p-8 rounded-2xl">
          <div>
                {renderLeftSection()}
          </div>
          <div>
              {renderRightSection()}
          </div>
    </header>
  )
}
