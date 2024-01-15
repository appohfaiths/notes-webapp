import { CustomButton } from ".."
import { CTAProps } from "./types"

export const CTA: React.FC<CTAProps> = ({ type, title, customInput, buttonAction }) => {

    const renderLeftSection = () => {
        switch (type) {
            case 'home':
                return <h1 className='text-2xl text-red-500'>{title}</h1>
            case 'create':
                return customInput ? customInput : null
            case 'view':
                return <h1 className='text-2xl text-red-500'>{title}</h1>
            default:
                return <h1 className='text-2xl text-red-500'>Welcome to Note Pal</h1>
        }
    }
    const renderRightSection = () => {
        switch (type) {
            case 'home':
                return <CustomButton variant={'create'} buttonAction={buttonAction}/>
            case 'create':
                return <CustomButton variant={'save'} buttonAction={buttonAction}/>
            case 'view':
                return <>
                <CustomButton variant={'edit'} buttonAction={buttonAction}/>
                <CustomButton variant={'delete'} buttonAction={buttonAction}/>
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
