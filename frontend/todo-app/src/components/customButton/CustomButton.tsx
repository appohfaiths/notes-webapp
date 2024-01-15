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
        // Handle edit functionality (e.g., make fields editable)
        break;
      case 'save':
        // Dispatch Redux action to save to the database
        buttonAction(e)
        // Redirect to the home page after saving
        navigator('/');
        break;
      case 'delete':
        // Dispatch Redux action to delete from the database
        buttonAction(e)
        // Redirect to the home page after deletion
        navigator('/');
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
      className={`text-white font-bold py-2 px-4 rounded-xl ${getButtonColor()}`}
    >
      {renderButtonContent()}
    </button>
    )
}
