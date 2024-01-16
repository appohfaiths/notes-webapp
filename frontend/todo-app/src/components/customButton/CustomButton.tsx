import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaSave, FaEdit, FaTrash } from 'react-icons/fa';
import { CustomButtonProps } from "./types";

export const CustomButton: React.FC<CustomButtonProps> = ({variant, buttonAction}) => {
    const navigator = useNavigate();

      const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (variant) {
      case 'create':
        navigator('/create');
        break;
      case 'edit':
        break;
      case 'save':
        buttonAction(e)
        break;
      case 'delete':
        buttonAction(e)
        break;
      default:
        break;
    }
      };

      const renderButtonContent = () => {
    switch (variant) {
      case 'create':
        return (
          <>
            Create <FaPlusCircle className='inline-block' />
          </>
        );
      case 'edit':
        return (
          <>
            Edit <FaEdit className='inline-block' />
          </>
        );
      case 'save':
        return (
          <>
            Save <FaSave className='inline-block' />
          </>
        );
      case 'delete':
        return (
          <>
            Delete <FaTrash className='inline-block' />
          </>
        );
      default:
        return null;
    }
      };

    const getButtonColor = () => {
    switch (variant) {
      case 'create':
        return 'bg-primary-blue hover:bg-blue-600';
      case 'edit':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'save':
        return 'bg-primary-green hover:bg-green-600';
      case 'delete':
        return 'bg-primary-red hover:bg-red-600';
      default:
        return 'bg-blue-500 hover:bg-blue-600';
    }
  };

    return (
        <button
      onClick={handleButtonClick}
      className={`text-white font-bold py-2 px-4 rounded-xl flex gap-2 items-center ${getButtonColor()}`}
    >
      {renderButtonContent()}
    </button>
    )
}
