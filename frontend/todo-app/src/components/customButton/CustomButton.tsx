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
        // dispatch(/* Your delete action here */);
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

    return (
        <button
      onClick={handleButtonClick}
      className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl'
    >
      {renderButtonContent()}
    </button>
    )
}
